import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

interface SkillGroupMobileProps {
    title: string;
    paragraph: string;
    tabs: React.ReactNode;
    icon: IconType;
    shadowColor: string;
}

export default function SkillGroupMobile({
    title,
    paragraph,
    tabs,
    icon: Icon,
    shadowColor,
}: SkillGroupMobileProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-[90%] bg-neutral-900 text-white p-6 rounded-xl shadow-lg flex lg:hidden flex-col items-center text-start relative overflow-hidden"
            style={{ boxShadow: `0px 0px 20px 5px ${shadowColor}` }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center w-16 h-16 bg-neutral-800 rounded-full mb-4"
            >
                <Icon className="text-4xl text-white" />
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-neutral-400 mt-2"
            >
                {paragraph}
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full mt-4"
            >
                {tabs}
            </motion.div>
        </motion.div>
    );
}
