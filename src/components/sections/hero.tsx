import ContactButton from "../ui/contact-button";
import { Spotlight } from "../ui/spotlight";
import SpotlightLine from "../ui/spotlight-line";
import { TextGenerateEffect } from "../ui/text-generate-effect";

import {
    BiLogoPython,
    BiLogoPhp,
    BiLogoTailwindCss,
    BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { GiBrazilFlag } from "react-icons/gi";
import SquaresBackground from "../ui/custom/squares/SquaresBackground";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

const skills = [
    TbBrandNextjs,
    TbBrandTypescript,
    BiLogoTailwindCss,
    BiLogoPython,
    BiLogoPhp,
    SiMysql,
    BiLogoMongodb,
];

export default function Hero() {
    const t = useTranslations("hero");
    return (
        <section
            id="home"
            className="min-h-[100svh] w-screen grid grid-cols-1 xl:grid-rows-[0.8fr_1fr_1fr] grid-rows-3 relative z-0 items-center justify-center px-2 md:px-12 xl:px-48 bg-background inset-0 bg-opacity-0 mx-8"
        >
            <Spotlight />
            <SquaresBackground />
            <div className="row-start-2 w-full h-full flex flex-col items-center justify-center">
                <TextGenerateEffect words={t("title")} />
                <SpotlightLine />
                <TextGenerateEffect
                    className="!text-xs lg:!text-base text-neutral-400 max-w-[90vw] xl:max-w-4xl text-center mx-auto"
                    variant="small"
                    words={t("subtitle")}
                />
            </div>
            <div className="w-full grid grid-cols-1  xl:grid-cols-3 row-start-3 grid-rows-3 place-items-center xl:grid-rows-1 gap-x-24 gap-y-8 items-center justify-center max-w-[90vw] mx-auto">
                <div className="flex items-center justify-center gap-x-4 w-full">
                    {skills.map((Skill, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.5 + index * 0.1,
                                duration: 0.5,
                            }}
                            key={`skill-${index}`}
                        >
                            <Skill className="text-3xl text-white/80 drop-shadow-[0px_0px_8px_#00ADFC]" />
                        </motion.div>
                    ))}
                </div>
                <ContactButton />
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="text-neutral-300 text-lg flex items-center gap-x-4"
                >
                    Based on Brasília - Brazil
                    <div className="px-1 bg-green-600 rounded drop-shadow-[0px_0px_8px_#16a34a]">
                        <GiBrazilFlag className="text-white text-3xl" />
                    </div>
                </motion.span>
            </div>
        </section>
    );
}
