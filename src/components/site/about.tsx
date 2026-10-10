"use client";

import {
    animate,
    motion,
    MotionValue,
    useInView,
    useScroll,
    useTransform,
} from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/content/site";
import { EASE, FadeUp, Rule, SectionLabel } from "./motion";

function Word({
    children,
    progress,
    range,
}: {
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.14, 1]);
    return (
        <motion.span style={{ opacity }} className="inline-block">
            {children}
            {" "}
        </motion.span>
    );
}

function CountUp({ from, to }: { from: number; to: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
    const [value, setValue] = useState(from);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(from, to, {
            duration: 1.8,
            ease: EASE,
            onUpdate: (v) => setValue(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, from, to]);

    return (
        <span ref={ref} className="tabular-nums">
            {value}
        </span>
    );
}

export default function About() {
    const t = useTranslations("about");
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.85", "end 0.5"],
    });
    const words = t("text").split(" ");

    const facts = [
        { from: 2000, to: 2020, label: t("facts.since") },
        { from: 0, to: projects.length, label: t("facts.projects") },
        { from: 0, to: 3, label: t("facts.certs") },
    ];

    return (
        <section
            id="about"
            className="relative px-6 pb-32 pt-40 md:px-12 md:pb-48 md:pt-64"
        >
            <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-3">
                    <SectionLabel index="01">{t("label")}</SectionLabel>
                </div>
                <p
                    ref={ref}
                    aria-label={t("text")}
                    className="text-[clamp(1.75rem,3.6vw,3.75rem)] font-medium leading-[1.12] tracking-[-0.035em] md:col-span-9"
                >
                    {words.map((w, i) => (
                        <Word
                            key={i}
                            progress={scrollYProgress}
                            range={[i / words.length, (i + 1) / words.length]}
                        >
                            {w}
                        </Word>
                    ))}
                </p>
            </div>

            <div className="mt-24 md:mt-40">
                <Rule />
                <div className="grid md:grid-cols-12">
                    <div className="hidden md:col-span-3 md:block" />
                    <div className="grid gap-10 pt-8 sm:grid-cols-3 md:col-span-9">
                        {facts.map((fact, i) => (
                            <FadeUp key={fact.label} delay={i * 0.1}>
                                <div className="text-5xl font-medium tracking-[-0.04em] md:text-6xl">
                                    <CountUp from={fact.from} to={fact.to} />
                                </div>
                                <p className="mt-3 max-w-[14rem] text-sm leading-snug text-muted">
                                    {fact.label}
                                </p>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
