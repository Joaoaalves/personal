"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import TecnologyTooltip from "../tecnology-tooltip";
import { useProjects } from "@/contexts/ProjectsProvider";
import { IoIosCode } from "react-icons/io";

export function ProjectsGrid() {
    const { filteredProjects } = useProjects();

    const [active, setActive] = useState<
        (typeof filteredProjects)[number] | boolean | null
    >(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    // @ts-expect-error ref is correctly typed
    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center !z-[100] backdrop-blur-md h-auto overflow-auto">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full !z-[999] max-w-[min(800px,90vw)] md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden rounded-xl"
                        >
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                            >
                                {React.cloneElement(
                                    active.header as React.ReactElement,
                                    //@ts-expect-error isActive is valid here
                                    { isActive: true },
                                )}
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-100 text-2xl mb-2"
                                        >
                                            {active.title}
                                        </motion.h3>

                                        <div className="flex items-center justify-start gap-x-1 lg:gap-x-2 mb-8">
                                            {active.tecnologies.map(
                                                ({ Icon, content }, index) => (
                                                    <TecnologyTooltip
                                                        Icon={Icon}
                                                        content={content}
                                                        key={`tecnologie-${index}`}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-xs md:text-sm lg:text-base h-auto md:h-fit pb-10 [mask:linear-gradient(to_bottom,white,white,#ffffffa0)] flex flex-col items-start gap-4 overflow-auto text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                                <div className="flex items-center justify-center gap-x-2 mb-8">
                                    {active.url && (
                                        <motion.a
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            target="_blank"
                                            href={active.url}
                                            className="px-3 py-2 min-w-40 flex items-center justify-center gap-x-2 text-center text-sm cursor-pointer rounded-full font-bold bg-black hover:bg-primary hover:!-translate-y-1 hover:!-translate-x-1 hover:!shadow-lg hover:!shadow-primary/50 hover:text-black text-white transition-all duration-400"
                                        >
                                            <IoIosCode className="text-2xl" />
                                            {active.viewProject}
                                        </motion.a>
                                    )}
                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        target="_blank"
                                        href={active.repo}
                                        className="px-3 py-2 min-w-40 flex items-center justify-center gap-x-2 text-center text-sm cursor-pointer rounded-full font-bold bg-black hover:bg-primary hover:!-translate-y-1 hover:!-translate-x-1 hover:!shadow-lg hover:!shadow-primary/50 hover:text-black text-white transition-all duration-400"
                                    >
                                        <IoIosCode className="text-2xl" />
                                        {active.viewCode}
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:max-w-5xl items-start gap-4 px-3">
                {filteredProjects.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col bg-neutral-900 lg:!bg-black/10 hover:bg-black/100 rounded-xl cursor-pointer shadow-[inner_0px_0px_30px] shadow-cyan-100/10 hover:shadow-secondary hover:shadow-[inner_0px_0px_12px] h-full transition-all duration-500"
                    >
                        <div className="flex gap-4 flex-col  w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                {card.header}
                            </motion.div>
                            <div className="flex justify-center items-start flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-bold text-neutral-200 text-center text-lg font-primary"
                                >
                                    {card.title}
                                </motion.h3>
                                <div className="flex items-start justify-start gap-x-3 w-full mt-4 ">
                                    {card?.tecnologies?.length > 0 &&
                                        card.tecnologies.map((tec, index) => (
                                            <TecnologyTooltip
                                                Icon={tec.Icon}
                                                content={tec.content}
                                                key={`tec-${index}-${card.title}`}
                                            />
                                        ))}
                                </div>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-400 text-start md:text-left text-sm mt-3"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
