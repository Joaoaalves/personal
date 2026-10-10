"use client";

import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
} from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Project, projects } from "@/content/site";
import { cn } from "@/lib/utils";
import { EASE, FadeUp, Rule, SectionLabel, SplitReveal } from "./motion";

function Logo({ project, title }: { project: Project; title: string }) {
    return (
        <Image
            src={project.image}
            alt={title}
            fill
            sizes="360px"
            className={cn(
                "grayscale",
                project.fit === "contain"
                    ? "object-contain p-12"
                    : "object-cover",
                project.invert && "invert",
            )}
        />
    );
}

function Row({
    project,
    index,
    open,
    onToggle,
    onHover,
}: {
    project: Project;
    index: number;
    open: boolean;
    onToggle: () => void;
    onHover: (index: number | null) => void;
}) {
    const t = useTranslations("projects");
    const ui = useTranslations("work");
    const title = t(`${project.key}.title`);

    return (
        <li
            className="group/row transition-opacity duration-500 group-hover/list:opacity-40 hover:!opacity-100"
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
        >
            <FadeUp delay={Math.min(index, 4) * 0.05}>
                <button
                    onClick={onToggle}
                    aria-expanded={open}
                    className="grid w-full grid-cols-12 items-baseline gap-x-4 py-6 text-left md:py-8"
                >
                    <span className="col-span-2 font-mono text-xs text-faint md:col-span-1">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 text-2xl font-medium tracking-[-0.035em] transition-transform duration-700 ease-out group-hover/row:translate-x-3 md:col-span-5 md:text-5xl">
                        {title}
                    </span>
                    <span className="col-span-4 hidden font-mono text-xs leading-relaxed text-muted md:block">
                        {project.stack.slice(0, 4).join(" · ")}
                    </span>
                    <span className="col-span-1 hidden text-right font-mono text-xs tabular-nums text-muted md:block">
                        {project.year}
                    </span>
                    <span className="col-span-1 hidden justify-self-end md:block">
                        <span
                            className={cn(
                                "relative block h-3 w-3 transition-transform duration-500",
                                open && "rotate-45",
                            )}
                        >
                            <span className="absolute left-0 top-1/2 h-px w-full bg-fg" />
                            <span className="absolute left-1/2 top-0 h-full w-px bg-fg" />
                        </span>
                    </span>
                </button>
            </FadeUp>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: EASE }}
                    >
                        <div className="grid grid-cols-12 gap-x-4 gap-y-8 pb-12 pt-2">
                            <div className="relative col-span-12 aspect-[16/10] overflow-hidden bg-surface md:hidden">
                                <Logo project={project} title={title} />
                            </div>
                            <div className="col-span-12 md:col-span-5 md:col-start-2">
                                <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                                    {ui("about")}
                                </h4>
                                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                                    {t(`${project.key}.shortDescription`)}
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-5 md:col-start-7">
                                <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                                    {ui("challenges")}
                                </h4>
                                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                                    {t(`${project.key}.description`)}
                                </p>
                                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link-underline"
                                        >
                                            {ui("live")} ↗
                                        </a>
                                    )}
                                    {project.repo && (
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link-underline"
                                        >
                                            {ui("code")} ↗
                                        </a>
                                    )}
                                    {project.inProgress && (
                                        <span className="font-mono text-xs text-faint">
                                            {ui("inProgress")}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="h-px w-full bg-line" />
        </li>
    );
}

export default function Projects() {
    const t = useTranslations("projects");
    const ui = useTranslations("work");
    const [open, setOpen] = useState<number | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const spring = { stiffness: 140, damping: 20, mass: 0.6 };
    const sx = useSpring(x, spring);
    const sy = useSpring(y, spring);

    const preview = hovered !== null && hovered !== open ? hovered : null;

    return (
        <section
            id="projects"
            className="relative px-6 pt-32 md:px-12 md:pt-56"
        >
            <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-3">
                    <SectionLabel index="03">{ui("label")}</SectionLabel>
                </div>
                <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.05em] md:col-span-9">
                    <SplitReveal text={ui("title")} />
                </h2>
            </div>

            <div className="mt-16 md:mt-24">
                <Rule />
                <ul
                    className="group/list"
                    onMouseMove={(e) => {
                        x.set(e.clientX);
                        y.set(e.clientY);
                    }}
                >
                    {projects.map((project, i) => (
                        <Row
                            key={project.key}
                            project={project}
                            index={i}
                            open={open === i}
                            onToggle={() => setOpen(open === i ? null : i)}
                            onHover={setHovered}
                        />
                    ))}
                </ul>
            </div>

            {/* Cursor-following preview, pointer devices only */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
                style={{ x: sx, y: sy }}
            >
                <AnimatePresence>
                    {preview !== null && (
                        <motion.div
                            key="preview"
                            className="relative -mt-28 ml-8 h-56 w-[22rem] overflow-hidden bg-surface"
                            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
                            transition={{ duration: 0.6, ease: EASE }}
                        >
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={preview}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.08 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: EASE }}
                                >
                                    <Logo
                                        project={projects[preview]}
                                        title={t(
                                            `${projects[preview].key}.title`,
                                        )}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
