import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
    variant = "large",
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
    variant?: "small" | "large";
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <div className={cn("relative p-[4px] group", containerClassName)}>
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 data-[variant=small]:inset-5 data-[variant=small]:hover:!inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform data-[variant=small]:rounded-xl",
                    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
                )}
                data-variant={variant}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 data-[variant=small]:rounded-xl rounded-3xl z-[1] will-change-transform",
                    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
                )}
                data-variant={variant}
            />

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
