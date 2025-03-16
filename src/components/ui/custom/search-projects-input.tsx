import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "../vanish-input";
import { useProjects } from "@/contexts/ProjectsProvider";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const placeholders = [
    "Python",
    "Database",
    "Typescript",
    "React",
    "Angular",
    "Web App",
];

export default function SearchProjectsInput() {
    const t = useTranslations("projects");

    const [yValues, setYValues] = useState<[number, number]>([10, -30]);
    const [inputValue, setInputValue] = useState("");
    const { queries, addQuery, removeQuery } = useProjects();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addQuery(inputValue);
            setInputValue("");
        }
    };

    useEffect(() => {
        const updateYValue = () => {
            setYValues(window.innerWidth < 768 ? [0, -50] : [20, -30]);
        };

        updateYValue();
        window.addEventListener("resize", updateYValue);
        return () => window.removeEventListener("resize", updateYValue);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: yValues[0] }}
            animate={{ opacity: 1, y: yValues[1] }}
            transition={{
                delay: 0.6,
                duration: 1,
                ease: "easeInOut",
            }}
            className="grid grid-cols-1 grid-rows-[120px_50px_60px] place-self-start  xl:grid-rows-[120px_35px_120px_60px] justify-center items-center place-items-center px-4 w-screen"
        >
            <h2 className="xl:pb-8 text-5xl text-center lg:text-6xl xl:text-7xl bg-gradient-to-b lg:bg-gradient-to-b from-slate-100 from-50% lg:from-30% to-slate-700 lg:to-slate-950 bg-clip-text text-transparent  tracking-tight font-bold">
                {t("title").toUpperCase()}
            </h2>

            <p className="text-neutral-100 max-w-2xl text-center text-sm z-[100] hidden 2xl:block">
                {t("description")}
            </p>

            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={(e) => setInputValue(e.target.value)}
                onSubmit={handleSubmit}
            />

            <div className="flex items-center justify-center mt-4 gap-2 w-full lg:w-1/3 overflow-x-auto h-full">
                {queries.map((query, index) => (
                    <div
                        key={index}
                        onClick={() => removeQuery(query)}
                        className="group flex items-center justify-center gap-x-2 hover:bg-secondary cursor-pointer hover:text-white border-2 border-secondary px-2 py-1 rounded-lg text-sm font-bold text-secondary transition-all duration-300"
                    >
                        {query}
                        <span className="text-secondary !text-xs group-hover:text-white transition-all duration-300">
                            ✕
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
