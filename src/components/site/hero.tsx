"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { EASE, SplitReveal } from "./motion";

const NAME = ["João", "Alves"];

function LocalTime() {
    const locale = useLocale();
    const [time, setTime] = useState("");

    useEffect(() => {
        const format = new Intl.DateTimeFormat(locale, {
            timeZone: "America/Sao_Paulo",
            hour: "2-digit",
            minute: "2-digit",
        });
        const update = () => setTime(format.format(new Date()));
        update();
        const id = setInterval(update, 30_000);
        return () => clearInterval(id);
    }, [locale]);

    return <span className="tabular-nums">{time || "--:--"} BRT</span>;
}

export default function Hero() {
    const t = useTranslations("hero");
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    let letter = 0;

    return (
        <section
            id="home"
            ref={ref}
            className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-8 md:px-12 md:pb-10"
        >
            <motion.div style={{ y, opacity }}>
                <motion.div
                    className="mb-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:mb-6 md:text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.6, delay: 1.5 }}
                >
                    <span>{t("role")}</span>
                    <span className="hidden sm:block">
                        15°47′S 47°52′W — {t("location")}
                    </span>
                </motion.div>

                <h1
                    aria-label={NAME.join(" ")}
                    className="-ml-[0.05em] flex flex-wrap gap-x-[0.22em] text-[clamp(4.25rem,15.2vw,17.5rem)] font-medium leading-[0.86] tracking-[-0.055em]"
                >
                    {NAME.map((part) => (
                        <span key={part} aria-hidden className="flex">
                            {part.split("").map((char) => (
                                <span
                                    key={letter}
                                    className="overflow-hidden pt-[0.14em] pb-[0.06em]"
                                >
                                    <motion.span
                                        className="block"
                                        initial={{ y: "112%" }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 1.3,
                                            ease: EASE,
                                            delay: 0.55 + letter++ * 0.055,
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>

                <motion.div
                    className="mt-6 h-px origin-left bg-line md:mt-8"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.8, ease: EASE, delay: 1.2 }}
                />

                <div className="mt-5 flex items-end justify-between gap-8 md:mt-6">
                    <p className="max-w-sm text-base leading-snug text-muted md:text-lg">
                        <SplitReveal text={t("intro")} delay={1.5} onMount />
                    </p>

                    <motion.div
                        className="flex shrink-0 items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:text-xs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.6, delay: 1.9 }}
                    >
                        <span className="hidden md:block">
                            <LocalTime />
                        </span>
                        <a href="#about" className="flex items-center gap-3">
                            {t("scroll")}
                            <span className="relative block h-8 w-px overflow-hidden bg-line">
                                <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-fg" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
