"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./particle-shaders";

const SPHERE_RADIUS = 3;
const CAMERA_Z = 9;

function buildGeometry(count: number) {
    const sphere = new Float32Array(count * 3);
    const dust = new Float32Array(count * 3);
    const wave = new Float32Array(count * 3);
    const random = new Float32Array(count * 4);

    const golden = Math.PI * (3 - Math.sqrt(5));
    const cols = Math.ceil(Math.sqrt(count * 1.9));
    const rows = Math.ceil(count / cols);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Fibonacci lattice, with a share of particles lifted into a halo
        const y = 1 - (i / (count - 1)) * 2;
        const ring = Math.sqrt(1 - y * y);
        const theta = golden * i;
        const halo = Math.random() < 0.14 ? 1.04 + Math.random() ** 2 * 0.7 : 1;
        const r = SPHERE_RADIUS * halo;
        sphere[i3] = Math.cos(theta) * ring * r;
        sphere[i3 + 1] = y * r;
        sphere[i3 + 2] = Math.sin(theta) * ring * r;

        dust[i3] = (Math.random() - 0.5) * 30;
        dust[i3 + 1] = (Math.random() - 0.5) * 16;
        dust[i3 + 2] = -14 + Math.random() * 19;

        const col = i % cols;
        const row = Math.floor(i / cols);
        wave[i3] = (col / (cols - 1) - 0.5) * 38;
        wave[i3 + 1] = -3.1;
        wave[i3 + 2] = -18 + (row / (rows - 1)) * 24;

        random[i * 4] = Math.random();
        random[i * 4 + 1] = Math.random();
        random[i * 4 + 2] = Math.random();
        random[i * 4 + 3] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    // `position` only exists to satisfy three; the shader reads the targets below
    geometry.setAttribute("position", new THREE.BufferAttribute(sphere, 3));
    geometry.setAttribute("aSphere", new THREE.BufferAttribute(sphere, 3));
    geometry.setAttribute("aDust", new THREE.BufferAttribute(dust, 3));
    geometry.setAttribute("aWave", new THREE.BufferAttribute(wave, 3));
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(random, 4));
    return geometry;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

// How far an element's top edge has travelled up from `start` to `end` (in viewport heights)
function enter(el: HTMLElement | null, start: number, end: number) {
    if (!el) return 0;
    const vh = window.innerHeight;
    const top = el.getBoundingClientRect().top / vh;
    return clamp01((start - top) / (start - end));
}

export default function ParticleField() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let renderer: THREE.WebGLRenderer;
        try {
            renderer = new THREE.WebGLRenderer({
                antialias: false,
                alpha: true,
                powerPreference: "high-performance",
            });
        } catch {
            return;
        }

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const isSmall = window.innerWidth < 768;
        const pixelRatio = Math.min(window.devicePixelRatio, 2);

        renderer.setPixelRatio(pixelRatio);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.set(0, 0, CAMERA_Z);

        const geometry = buildGeometry(isSmall ? 32000 : 90000);
        const uniforms = {
            uTime: { value: 0 },
            uPixelRatio: { value: pixelRatio },
            uSize: { value: 15 },
            uIntro: { value: reducedMotion ? 1 : 0 },
            uToDust: { value: 0 },
            uToWave: { value: 0 },
            uToSphere: { value: 0 },
            uScale: { value: 1 },
            uOpacity: { value: 1 },
            uMouse: { value: new THREE.Vector2(99, 99) },
            uColor: { value: new THREE.Color("#ecebe6") },
        };
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: THREE.NormalBlending,
        });
        const points = new THREE.Points(geometry, material);
        points.frustumCulled = false;
        scene.add(points);

        const pointer = new THREE.Vector2(0, 0);
        const mouseTarget = new THREE.Vector2(99, 99);
        let viewHeight = 1;
        let viewWidth = 1;

        const resize = () => {
            const { clientWidth: w, clientHeight: h } = container;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            viewHeight =
                2 * CAMERA_Z * Math.tan(THREE.MathUtils.degToRad(22.5));
            viewWidth = viewHeight * camera.aspect;
            // Keep the globe inside narrow viewports
            uniforms.uScale.value = Math.min(
                1,
                viewWidth / (SPHERE_RADIUS * 2.5),
            );
        };

        const onPointerMove = (e: PointerEvent) => {
            if (e.pointerType === "touch") return;
            pointer.set(
                (e.clientX / window.innerWidth) * 2 - 1,
                -((e.clientY / window.innerHeight) * 2 - 1),
            );
            mouseTarget.set(
                (pointer.x * viewWidth) / 2,
                (pointer.y * viewHeight) / 2,
            );
        };

        const sections = {
            story: document.getElementById("story"),
            projects: document.getElementById("projects"),
            contact: document.getElementById("contact"),
        };

        const clock = new THREE.Clock();
        let frame = 0;
        let elapsed = 0;

        const tick = () => {
            frame = requestAnimationFrame(tick);
            const delta = Math.min(clock.getDelta(), 0.05);
            if (!reducedMotion) elapsed += delta;

            const vh = window.innerHeight;
            const leaveHero = clamp01((window.scrollY - vh * 0.1) / (vh * 0.8));
            const intoStory = enter(sections.story, 0.9, 0.1);
            const intoProjects = enter(sections.projects, 0.9, 0.2);
            const intoContact = enter(sections.contact, 1, 0.15);

            const ease = 1 - Math.exp(-delta * 3.2);
            const u = uniforms;
            u.uTime.value = elapsed;
            u.uIntro.value = Math.min(1, u.uIntro.value + delta / 3.2);
            u.uToDust.value += (leaveHero - u.uToDust.value) * ease;
            u.uToWave.value +=
                (intoStory * (1 - intoProjects) - u.uToWave.value) * ease;
            u.uToSphere.value += (intoContact - u.uToSphere.value) * ease;

            // Nearly gone behind long-form content, with the terrain allowed
            // through; the closing globe stays behind the form, so it is softer
            const dim =
                1 -
                0.8 * leaveHero * (1 - intoContact) -
                0.5 * intoContact +
                0.3 * u.uToWave.value;
            u.uOpacity.value += (dim - u.uOpacity.value) * ease;

            u.uMouse.value.lerp(mouseTarget, 1 - Math.exp(-delta * 6));
            camera.position.x += (pointer.x * 0.6 - camera.position.x) * ease;
            camera.position.y += (pointer.y * 0.35 - camera.position.y) * ease;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };

        const onVisibility = () => {
            cancelAnimationFrame(frame);
            if (!document.hidden) {
                clock.getDelta();
                tick();
            }
        };

        resize();
        tick();
        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", onPointerMove);
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("visibilitychange", onVisibility);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            aria-hidden
            className="fixed inset-0 z-0 pointer-events-none [&>canvas]:h-full [&>canvas]:w-full"
        />
    );
}
