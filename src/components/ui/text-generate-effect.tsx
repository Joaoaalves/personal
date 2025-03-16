"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    variant = "normal",
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    variant?: "normal" | "small";
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: variant === "small" ? stagger(0.04) : stagger(0.3),
            },
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div
                ref={scope}
                animate={{
                    filter:
                        variant === "normal"
                            ? [
                                  "drop-shadow(0px 0px 5px rgba(255,255,255,0))",
                                  "drop-shadow(0px 0px 5px rgba(255,255,255, 0.4))",
                              ]
                            : [],
                }}
                transition={{
                    duration: 2,
                }}
                className="text-center"
            >
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="data-[variant=normal]:text-white opacity-0 data-[variant=normal]:md:text-6xl data-[variant=normal]:text-5xl text-center data-[variant=normal]:lg:text-8xl text-[11px] xl:text-[16px] text-neutral-200 data-[variant=normal]:font-bold font-normal"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                            data-variant={variant}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div
                    className={`${className} text-white text-2xl leading-snug tracking-wide`}
                >
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
