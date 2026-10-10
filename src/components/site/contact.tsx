"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { email, social } from "@/content/site";
import { FadeUp, Rule, SectionLabel, SplitReveal } from "./motion";

type Status = { kind: "idle" | "sending" | "success" | "error"; text: string };

const field =
    "w-full border-b border-line bg-transparent py-4 text-base text-fg placeholder:text-muted transition-colors duration-300 focus:border-fg focus:outline-none";

export default function Contact() {
    const t = useTranslations("contact");
    const footer = useTranslations("footer");
    const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        if (!data.name || !data.email || !data.message) {
            setStatus({ kind: "error", text: t("form.fillAllFields") });
            return;
        }

        setStatus({ kind: "sending", text: "" });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            form.reset();
            setStatus({ kind: "success", text: t("form.messageSent") });
        } catch {
            setStatus({ kind: "error", text: t("form.error") });
        }
    };

    return (
        <section
            id="contact"
            className="relative flex min-h-[100svh] flex-col justify-between px-6 pt-40 md:px-12 md:pt-64"
        >
            <div>
                <SectionLabel index="05">{t("label")}</SectionLabel>
                <h2 className="-ml-[0.04em] mt-8 text-[clamp(3.5rem,12.5vw,14rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                    <SplitReveal text={t("title")} />
                </h2>

                <div className="mt-16 grid gap-x-10 gap-y-16 md:mt-24 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <FadeUp>
                            <p className="max-w-sm text-lg leading-snug text-muted">
                                {t("text")}
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.1} className="mt-12">
                            <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                                {t("emailLabel")}
                            </div>
                            <a
                                href={`mailto:${email}`}
                                className="link-underline mt-3 inline-block text-xl font-medium tracking-[-0.02em] md:text-2xl"
                            >
                                {email}
                            </a>
                        </FadeUp>

                        <FadeUp delay={0.2} className="mt-10">
                            <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                                {t("socialLabel")}
                            </div>
                            <ul className="mt-3 flex flex-wrap gap-x-7 gap-y-2 text-base">
                                {social.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link-underline"
                                        >
                                            {item.name} ↗
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </FadeUp>
                    </div>

                    <FadeUp delay={0.15} className="md:col-span-6 md:col-start-7">
                        <form onSubmit={handleSubmit} noValidate>
                            <input
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder={t("form.name")}
                                aria-label={t("form.name")}
                                className={field}
                            />
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder={t("form.email")}
                                aria-label={t("form.email")}
                                className={field}
                            />
                            <textarea
                                name="message"
                                rows={4}
                                placeholder={t("form.message")}
                                aria-label={t("form.message")}
                                className={`${field} resize-none`}
                            />
                            <div className="mt-8 flex flex-wrap items-center gap-6">
                                <button
                                    type="submit"
                                    disabled={status.kind === "sending"}
                                    className="group relative overflow-hidden border border-fg px-7 py-4 text-sm font-medium transition-colors duration-500 hover:text-bg disabled:opacity-50"
                                >
                                    <span className="absolute inset-0 origin-bottom scale-y-0 bg-fg transition-transform duration-500 ease-out group-hover:scale-y-100" />
                                    <span className="relative">
                                        {status.kind === "sending"
                                            ? t("form.sendingMessage")
                                            : t("form.button")}
                                    </span>
                                </button>
                                <p
                                    role="status"
                                    className="text-sm text-muted"
                                >
                                    {status.text}
                                </p>
                            </div>
                        </form>
                    </FadeUp>
                </div>
            </div>

            <footer className="mt-32 pb-8">
                <Rule />
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 font-mono text-xs text-muted">
                    <span>© {new Date().getFullYear()} João Alves</span>
                    <span className="hidden sm:block">{footer("built")}</span>
                    <a href="#home" className="link-underline">
                        {footer("top")} ↑
                    </a>
                </div>
            </footer>
        </section>
    );
}
