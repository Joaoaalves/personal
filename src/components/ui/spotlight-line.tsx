import { motion } from "motion/react";

export default function SpotlightLine() {
    return (
        <motion.div
            animate={{
                width: [0, "min(40rem, 80vw)"],
            }}
            transition={{
                duration: 1,
                delay: 0.5,
            }}
            className="relative h-1"
        >
            <div className="absolute inset-x-10 xl:inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-10 xl:inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-[120px] xl:inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[7px] w-1/4 blur-sm" />
            <div className="absolute inset-x-[120px] xl:inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-1/4" />
        </motion.div>
    );
}
