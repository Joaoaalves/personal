import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";

const languages = [
    {
        label: "Português",
        value: "pt-BR",
    },
    {
        label: "English",
        value: "en",
    },
];
export default function MobileLanguageSelector() {
    const [open, setOpen] = useState(false);
    const t = useTranslations("nav");
    const router = useRouter();
    const locale = useLocale();

    const handleLanguageChange = async (lang: string) => {
        router.push(`${lang}`);
        router.refresh();
    };

    return (
        <div className={"fixed lg:hidden top-4 left-8 z-[100]"}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="fixed top-20 left-8 flex flex-col gap-4"
                    >
                        {languages.map((lang, index) => (
                            <motion.div
                                key={`language-${index}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: index * 0.05,
                                    },
                                }}
                                transition={{
                                    delay:
                                        (languages.length - 1 - index) * 0.05,
                                }}
                            >
                                <button
                                    className="grid grid-cols-2 gap-x-4 langs-center"
                                    onClick={() =>
                                        handleLanguageChange(lang.value)
                                    }
                                >
                                    <span
                                        className="text-center bg-neutral-900 text-neutral-200 w-full rounded-full px-3 py-1 font-bold shadow shadow-white/10 data-[active=true]:bg-neutral-300 data-[active=true]:text-neutral-900 data-[active=true]:shadow-secondary data-[active=true]:shadow-md"
                                        data-active={locale === lang.value}
                                    >
                                        {lang.label}
                                    </span>
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                aria-label={t("languageBtnAlt")}
                className="rounded-full z-[100] bg-neutral-800 h-10 w-10 flex items-center justify-center drop-shadow-[0px_0px_2px_#ffffff40]"
            >
                <CiGlobe className="h-7 w-7 text-white" />
            </button>
        </div>
    );
}
