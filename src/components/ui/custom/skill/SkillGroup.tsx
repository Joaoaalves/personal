import { motion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

interface SkillGroupProps {
    title: string;
    paragraph: string;
    tabs: React.ReactNode;
    src: string;
    direction: "left" | "right";
    shadowColor: string;
}

export default function SkillGroup({
    title,
    paragraph,
    tabs,
    src,
    direction,
    shadowColor,
}: SkillGroupProps) {
    const containerRef = useRef(null);

    const titleInitial = {
        fontSize: "300px",
        left: "50%",
        top: "50%",
        WebkitTextStrokeColor: "#ffffff",
        WebkitTextStrokeWidth: "3px",
        WebkitTextFillColor: "#ffffff00",
        transform: "translate(-50%, -50%)",
    };

    const titleWhileInView =
        direction === "right"
            ? {
                  fontSize: "72px",
                  left: "48px",
                  top: "3%",
                  WebkitTextStrokeColor: "#ffffff00",
                  WebkitTextStrokeWidth: "0px",
                  WebkitTextFillColor: "#ffffff",
                  transform: "translate(0, 0)",
              }
            : {
                  fontSize: "72px",
                  left: "calc(100% - 48px)",
                  top: "3%",
                  WebkitTextStrokeColor: "#ffffff00",
                  WebkitTextStrokeWidth: "0px",
                  WebkitTextFillColor: "#ffffff",
                  transform: "translate(-100%, 0%)",
              };

    return (
        <motion.div
            ref={containerRef}
            initial={{
                scale: 1,
                borderRadius: 0,
                boxShadow: `0px 0px 0px 0px ${shadowColor}`,
            }}
            whileInView={{
                scale: 0.8,
                borderRadius: 48,
                boxShadow: `0px 0px 200px 20px ${shadowColor}`,
            }}
            viewport={{
                amount: 0.7,
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            id="skill-2"
            className="w-full h-[900px] overflow-hidden relative lg:grid grid-cols-2 grid-rows-1 place-items-center bg-grid-[#111] z-[10] hidden"
        >
            <motion.h2
                initial={titleInitial}
                whileInView={titleWhileInView}
                viewport={{
                    root: containerRef,
                    amount: 0.99,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    WebKitTextFillColor: { delay: 1, duration: 1 },
                }}
                className="font-bold absolute z-[100]"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.4,
                }}
                viewport={{
                    amount: 0.5,
                }}
                className="bg-neutral-950 bg-opacity-[0.95] w-full h-full p-12 z-10 data-[direction=left]:col-start-2"
                data-direction={direction}
            >
                <p
                    className="mt-20 data-[direction=left]:text-end text-neutral-400"
                    data-direction={direction}
                >
                    {paragraph}
                </p>
                {tabs}
            </motion.div>

            <BackgroundImage src={src} />
        </motion.div>
    );
}

function BackgroundImage({ src }: { src: string }) {
    return (
        <Image
            className="w-full h-auto absolute right-1/2 translate-x-1/2 antialiased"
            src={src}
            alt="Background image of colorfull glares."
            width={2816}
            height={1536}
        />
    );
}
