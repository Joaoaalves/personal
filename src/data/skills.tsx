import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    BiLogoPython,
    BiLogoPhp,
    BiLogoTailwindCss,
    BiLogoMongodb,
    BiLogoFirebase,
    BiLogoGit,
} from "react-icons/bi";
import {
    TbBrandTypescript,
    TbBrandNextjs,
    TbBrandAngular,
    TbBrandPowershell,
    TbDatabase,
} from "react-icons/tb";
import { PiVectorThreeThin } from "react-icons/pi";
import { CiServer } from "react-icons/ci";

import { GiBoltShield } from "react-icons/gi";
import {
    SiMysql,
    SiDocker,
    SiElectron,
    SiFigma,
    SiCentos,
} from "react-icons/si";
import { IoCodeSlashOutline } from "react-icons/io5";

export function getSkills(t: (key: string) => string) {
    return [
        {
            title: "Backend",
            paragraph: t("backend.paragraph"),
            value: "backend",
            Icon: CiServer,
            content: (
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="item-1"
                        className="border-neutral-600 py-4 text-neutral-200"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <BiLogoPython className="me-2 text-2xl" />
                                    Python - Flask/FastAPI
                                </span>

                                <span className="hidden md:block">
                                    3 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    5 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            <p>{t("backend.python")}</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-2"
                        className="border-neutral-600 py-4 text-neutral-200"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <TbBrandTypescript className="me-2 text-2xl" />
                                    Typescript
                                </span>

                                <span className="hidden md:block">
                                    5 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    2.5 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("backend.typescript")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="border-neutral-600 py-4 text-neutral-200"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <BiLogoPhp className="me-2 text-2xl" />
                                    PHP
                                </span>

                                <span className="hidden md:block">
                                    _ {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    2 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("backend.php")}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ),
        },
        {
            title: "Frontend",
            paragraph: t("frontend.paragraph"),
            value: "frontend",
            Icon: IoCodeSlashOutline,
            colors: ["#00ADFC", "#7F0CF2", "#8B88F2", "#41BF9B", "#04E762"],
            content: (
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="item-1"
                        className="border-neutral-600 py-4 text-neutral-200"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <TbBrandNextjs className="me-2 text-2xl" />
                                    NextJS & React
                                </span>

                                <span className="hidden md:block">
                                    6 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    2.5 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("frontend.nextjs")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-4"
                        className="border-neutral-600 py-4 text-neutral-200"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <SiElectron className="text-3xl" />
                                    ElectronJS
                                </span>

                                <span className="hidden md:block">
                                    1 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    1 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("frontend.electronjs")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-2"
                        className="border-neutral-600 py-4 text-neutral-200"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <TbBrandAngular className="me-2 text-2xl" />
                                    Angular
                                </span>

                                <span className="hidden md:block">
                                    1 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    1 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("frontend.angular")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="border-neutral-600 py-4 text-neutral-200"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <BiLogoTailwindCss className="me-2 text-2xl" />
                                    TailwindCSS
                                </span>

                                <span className="hidden md:block">
                                    6 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    2.5 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("frontend.tailwindcss")}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ),
        },
        {
            title: "Databases",
            paragraph: t("databases.paragraph"),
            value: "databases",
            Icon: TbDatabase,
            colors: [
                "#f72585",
                "#b5179e",
                "#7209b7",
                "#560bad",
                "#3a0ca3",
                "#4361ee",
                "#4cc9f0",
            ],
            content: (
                <Accordion type="single" collapsible>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="item-1"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <SiMysql className="me-2 text-4xl" />
                                    SQL (MySQL, SQLite)
                                </span>

                                <span className="hidden md:block">
                                    3 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    5 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("databases.mysql")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="item-4"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <PiVectorThreeThin className="text-3xl" />
                                    QDrant & Pinecone
                                </span>

                                <span className="hidden md:block">
                                    2 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    1 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("databases.qdrant")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="item-2"
                    >
                        <AccordionTrigger>
                            <div className="grid md:grid-cols-3 w-full">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <BiLogoMongodb className="text-3xl" />
                                    MongoDB
                                </span>

                                <span className="hidden md:block">
                                    3 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    2 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("databases.mongodb")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="item-3"
                    >
                        <AccordionTrigger>
                            <div className="grid grid-cols-3 w-full grid-rows-1">
                                <span className="flex items-center gap-x-4 text-xl font-medium">
                                    <BiLogoFirebase className="text-3xl" />
                                    Firebase
                                </span>

                                <span className="hidden md:block">
                                    2 {t("projects")}
                                </span>

                                <span className="hidden md:block">
                                    3 {t("years")}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("databases.firebase")}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ),
        },
        {
            title: t("others.title"),
            paragraph: t("others.paragraph"),
            value: "others",
            Icon: TbBrandPowershell,
            colors: ["#cc0a54", "#dd477e", "#d62828", "#ff132c", "#D93002"],
            content: (
                <Accordion type="single" collapsible>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="cybersecurity-specialis"
                    >
                        <AccordionTrigger>
                            <span className="flex items-center gap-x-4 text-xl font-medium">
                                <GiBoltShield className="text-3xl" />
                                Certified Cybersecurity Specialist
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("others.cybersecurity")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="git"
                    >
                        <AccordionTrigger>
                            <span className="flex items-center gap-x-4 text-xl font-medium">
                                <BiLogoGit className="me-2 text-4xl" />
                                Git
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("others.git")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="docker"
                    >
                        <AccordionTrigger>
                            <span className="flex items-center gap-x-4 text-xl font-medium">
                                <SiDocker className="text-3xl" />
                                Docker & CI/CD
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("others.docker")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="linux"
                    >
                        <AccordionTrigger>
                            <span className="flex items-center gap-x-4 text-xl font-medium">
                                <SiCentos className="text-3xl" />
                                Linux (Ubuntu & CentOS)
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("others.linux")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        className="border-neutral-600 py-4 text-neutral-200"
                        value="figma"
                    >
                        <AccordionTrigger>
                            <span className="flex items-center gap-x-4 text-xl font-medium">
                                <SiFigma className="text-3xl" />
                                Figma
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg text-start">
                            {t("others.figma")}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ),
        },
    ];
}
