"use client";

import { useLocale, useTranslations } from "next-intl";
import { stack, StackItem } from "@/content/site";
import { FadeUp, Rule, SectionLabel, SplitReveal } from "./motion";

export default function Stack() {
    const t = useTranslations("stack");
    const locale = useLocale();

    const meta = (item: StackItem) => {
        if (item.current) return t("current");
        if (!item.years) return "";
        const years = new Intl.NumberFormat(locale).format(item.years);
        return `${years} ${item.years === 1 ? t("year") : t("years")}`;
    };

    return (
        <section id="stack" className="relative px-6 pt-32 md:px-12 md:pt-56">
            <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-3">
                    <SectionLabel index="04">{t("label")}</SectionLabel>
                </div>
                <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.05em] md:col-span-9">
                    <SplitReveal text={t("title")} />
                </h2>
            </div>

            <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
                {stack.map((group, g) => (
                    <div key={group.key}>
                        <FadeUp
                            delay={g * 0.08}
                            className="pb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted"
                        >
                            {t(`groups.${group.key}`)}
                        </FadeUp>
                        <Rule />
                        <ul>
                            {group.items.map((item, i) => (
                                <li key={item.name}>
                                    <FadeUp
                                        delay={g * 0.08 + i * 0.06}
                                        className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                                    >
                                        <span className="text-base font-medium tracking-[-0.01em] md:text-lg">
                                            {item.name}
                                        </span>
                                        <span
                                            className={
                                                item.current
                                                    ? "shrink-0 font-mono text-xs text-fg"
                                                    : "shrink-0 font-mono text-xs text-faint"
                                            }
                                        >
                                            {meta(item)}
                                        </span>
                                    </FadeUp>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
