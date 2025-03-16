"use client";
import { motion } from "framer-motion";
import ShimmerButton from "./shimmer-button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ContactButton() {
    const t = useTranslations("contact");
    const router = useRouter();

    const handleClick = () => {
        router.push("#contact");
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                filter: ["blur(10px)", "blur(0px)"],
            }}
            transition={{
                delay: 2,
                duration: 1,
            }}
            className="w-full relative z-40"
        >
            <ShimmerButton text={t("button")} onClick={handleClick} />
        </motion.div>
    );
}
