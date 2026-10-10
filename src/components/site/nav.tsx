"use client";

import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
} from "motion/react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { EASE } from "./motion";

const links = ["story", "projects", "stack", "contact"] as const;
const locales = [
    { code: "pt-BR", label: "PT" },
    { code: "en", label: "EN" },
] as const;

export default function Nav() {
    const t = useTranslations("nav");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const { scrollY, scrollYProgress } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 80));
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
    });

    return (
        <motion.header
            data-scrolled={scrolled}
            className="fixed inset-x-0 top-0 z-50 transition-colors duration-500 data-[scrolled=true]:bg-bg/70 data-[scrolled=true]:backdrop-blur-md"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 1.6 }}
        >
            <div className="flex items-center justify-between px-6 py-5 md:px-12">
                <a href="#home" className="text-sm font-medium tracking-tight">
                    João Alves
                </a>

                <nav className="hidden items-center gap-9 md:flex">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            className="link-underline text-sm text-muted transition-colors duration-300 hover:text-fg"
                        >
                            {t(link)}
                        </a>
                    ))}
                </nav>

                <div
                    className="flex items-center gap-2 font-mono text-xs"
                    role="group"
                    aria-label={t("language")}
                >
                    {locales.map(({ code, label }, i) => (
                        <span key={code} className="flex items-center gap-2">
                            {i > 0 && <span className="text-faint">/</span>}
                            <button
                                onClick={() =>
                                    router.replace(pathname, { locale: code })
                                }
                                aria-current={locale === code}
                                className="text-faint transition-colors duration-300 hover:text-fg aria-[current=true]:text-fg"
                            >
                                {label}
                            </button>
                        </span>
                    ))}
                </div>
            </div>
            <motion.div
                className="h-px origin-left bg-fg/60"
                style={{ scaleX: progress }}
            />
        </motion.header>
    );
}
