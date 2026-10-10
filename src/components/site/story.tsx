"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Chapter, chapters } from "@/content/site";
import { EASE, FadeUp, Rule, SectionLabel, SplitReveal } from "./motion";

/** Only the digits that change roll; the rest stay put. */
function RollingYear({ value }: { value: string }) {
    return (
        <span className="flex overflow-hidden tabular-nums" aria-label={value}>
            {value.split("").map((digit, i) => (
                <span key={i} className="relative block" aria-hidden>
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                            key={digit}
                            className="block"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{
                                duration: 0.9,
                                ease: EASE,
                                delay: i * 0.04,
                            }}
                        >
                            {digit}
                        </motion.span>
                    </AnimatePresence>
                </span>
            ))}
        </span>
    );
}

function ChapterBlock({
    chapter,
    index,
    onActive,
}: {
    chapter: Chapter;
    index: number;
    onActive: (index: number) => void;
}) {
    const t = useTranslations("story");
    const ref = useRef<HTMLElement>(null);
    const active = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (active) onActive(index);
    }, [active, index, onActive]);

    return (
        <article ref={ref} className="py-16 md:py-28">
            <Rule />
            <FadeUp className="flex items-baseline justify-between pt-5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span>
                    {t("chapter")} {String(index + 1).padStart(2, "0")}
                </span>
                <span>{t(`${chapter.key}.period`)}</span>
            </FadeUp>

            <div className="mt-6 text-7xl font-medium leading-none tracking-[-0.05em] text-faint lg:hidden">
                {chapter.year}
            </div>

            <h3 className="mt-8 max-w-2xl text-3xl font-medium leading-[1.08] tracking-[-0.035em] md:mt-14 md:text-5xl">
                <SplitReveal text={t(`${chapter.key}.title`)} />
            </h3>

            <FadeUp delay={0.15}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                    {t(`${chapter.key}.text`)}
                </p>
            </FadeUp>

            <ul className="mt-12 max-w-xl">
                {chapter.items.map((item, i) => (
                    <li key={item.name}>
                        <FadeUp
                            delay={0.2 + i * 0.08}
                            className="flex flex-col justify-between gap-1 border-t border-line py-4 sm:flex-row sm:items-baseline sm:gap-8"
                        >
                            <span className="text-sm font-medium md:text-base">
                                {item.name}
                            </span>
                            <span className="font-mono text-xs text-muted sm:text-right">
                                {item.detail}
                            </span>
                        </FadeUp>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default function Story() {
    const t = useTranslations("story");
    const [active, setActive] = useState(0);
    const total = String(chapters.length).padStart(2, "0");

    return (
        <section id="story" className="relative px-6 md:px-12">
            <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-3">
                    <SectionLabel index="02">{t("label")}</SectionLabel>
                </div>
                <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.05em] md:col-span-9">
                    <SplitReveal text={t("title")} />
                </h2>
            </div>

            <div className="mt-16 grid gap-x-10 md:mt-24 lg:grid-cols-12">
                <div className="hidden lg:col-span-5 lg:block">
                    <div className="sticky top-0 flex h-screen flex-col justify-center">
                        <div className="text-[clamp(8rem,15vw,17rem)] font-medium leading-[0.85] tracking-[-0.06em]">
                            <RollingYear value={chapters[active].year} />
                        </div>
                        <div className="mt-10 flex max-w-xs items-center gap-5 font-mono text-xs text-muted">
                            <span className="tabular-nums text-fg">
                                {String(active + 1).padStart(2, "0")}
                            </span>
                            <span className="relative h-px flex-1 bg-line">
                                <motion.span
                                    className="absolute inset-0 origin-left bg-fg"
                                    animate={{
                                        scaleX: (active + 1) / chapters.length,
                                    }}
                                    transition={{ duration: 0.9, ease: EASE }}
                                />
                            </span>
                            <span className="tabular-nums">{total}</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    {chapters.map((chapter, i) => (
                        <ChapterBlock
                            key={chapter.key}
                            chapter={chapter}
                            index={i}
                            onActive={setActive}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
