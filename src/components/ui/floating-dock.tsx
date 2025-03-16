import { useScrollContext } from "@/contexts/ScrollProvider";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { links } from "@/data/links";
import { useTranslations } from "next-intl";

export const FloatingDock = ({ className }: { className?: string }) => {
    const [open, setOpen] = useState(false);
    const { activeSection } = useScrollContext();
    const t = useTranslations("nav");
    return (
        <div className={cn("fixed lg:hidden top-4 right-8 z-[100]", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="fixed top-20 -right-8 flex flex-col gap-2"
                    >
                        {links.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{
                                    delay: (links.length - 1 - idx) * 0.05,
                                }}
                            >
                                <Link
                                    href={item.href}
                                    key={item.title}
                                    className="grid grid-cols-2 gap-x-4 items-center"
                                    onClick={() => setOpen(false)}
                                >
                                    <span
                                        className="text-center bg-neutral-900 text-neutral-200 w-full rounded-full px-3 py-1 font-bold shadow shadow-white/10 data-[active=true]:bg-neutral-300 data-[active=true]:text-neutral-900 data-[active=true]:shadow-secondary data-[active=true]:shadow-md"
                                        data-active={activeSection === item.id}
                                    >
                                        {t(item.title)}
                                    </span>
                                    <div
                                        className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-300 data-[active=true]:bg-neutral-300 data-[active=true]:text-neutral-900 data-[active=true]:shadow-secondary data-[active=true]:shadow-md"
                                        data-active={
                                            activeSection ===
                                            item.title.toLowerCase()
                                        }
                                    >
                                        <div className="w-5 h-5">
                                            {item.icon}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center drop-shadow-[0px_0px_2px_#ffffff40]"
            >
                <RxHamburgerMenu className="h-6 w-6 text-white" />
            </button>
        </div>
    );
};
