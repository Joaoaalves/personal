"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
    hidden: {},
    show: (delay: number) => ({
        transition: { staggerChildren: 0.045, delayChildren: delay },
    }),
};

const word = {
    hidden: { y: "115%" },
    show: { y: 0, transition: { duration: 1, ease: EASE } },
};

/**
 * Words rise from behind a mask. The viewport check lives on the wrapper
 * because the words start clipped and would never intersect on their own.
 */
export function SplitReveal({
    text,
    className,
    delay = 0,
    onMount = false,
}: {
    text: string;
    className?: string;
    delay?: number;
    onMount?: boolean;
}) {
    return (
        <motion.span
            className={cn("block", className)}
            variants={container}
            custom={delay}
            initial="hidden"
            {...(onMount
                ? { animate: "show" }
                : {
                      whileInView: "show",
                      viewport: { once: true, margin: "0px 0px -12% 0px" },
                  })}
            aria-label={text}
        >
            {text.split(" ").map((w, i) => (
                <span
                    key={i}
                    aria-hidden
                    className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]"
                >
                    <motion.span className="inline-block" variants={word}>
                        {w}
                        {" "}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}

export function FadeUp({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

/** Hairline that draws itself from the left. */
export function Rule({ className }: { className?: string }) {
    return (
        <motion.div
            className={cn("h-px w-full origin-left bg-line", className)}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1.4, ease: EASE }}
        />
    );
}

export function SectionLabel({
    index,
    children,
}: {
    index: string;
    children: ReactNode;
}) {
    return (
        <FadeUp className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="text-faint">{index}</span>
            <span>{children}</span>
        </FadeUp>
    );
}
