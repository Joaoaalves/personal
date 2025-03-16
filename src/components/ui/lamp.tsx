"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SearchProjectsInput from "./custom/search-projects-input";

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative min-h-screen grid grid-cols-1 grid-rows-[250px_230px_1fr] pb-12 items-end justify-center overflow-hidden bg-black w-full rounded-md z-1",
                className,
            )}
        >
            <div className="relative flex w-full flex-1 items-center justify-center z-0">
                <motion.div
                    initial={{ opacity: 0.5, width: "10rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 max-w-[80vw] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute max-w-[80vw] w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute max-w-[80vw] w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "10rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute max-w-[80vw] inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute max-w-[80vw] w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  max-w-[80vw] w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl max-w-[80vw]"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 max-w-[80vw] "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
            </div>
            <SearchProjectsInput />
            {children}
        </div>
    );
};
