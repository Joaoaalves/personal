import { IconType } from "react-icons/lib";

import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { PiVectorThreeLight } from "react-icons/pi";
import { TbBrandTypescript } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";

import {
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiFlask,
    SiAngular,
    SiResend,
    SiRabbitmq,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

import { JSX } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    title: string;
    src: string;
    isActive?: boolean;
}

const Logo = ({ title, src, isActive, className }: LogoProps) => (
    <div
        className="flex flex-col items-center justify-center w-full h-40 overflow-hidden rounded-xl bg-gradient-to-br from-black to-neutral-900 data-[active=true]:max-h-60"
        data-active={isActive}
    >
        <Image
            src={src}
            width={1920}
            height={1080}
            className={cn(className, "w-full h-auto")}
            alt={`Logo of ${title}`}
            data-active={isActive}
        />
    </div>
);

export type Tecnology = {
    Icon: IconType;
    content: string;
};

export interface IProject {
    title: string;
    description: string;
    viewCode: string;
    viewProject: string;
    repo: string;
    url?: string;
    content: () => JSX.Element;
    header: JSX.Element;
    tecnologies: Tecnology[];
}
export const getProjects = (t: (key: string) => string): IProject[] => {
    return [
        {
            title: t("AILib.title"),
            description: t("AILib.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "https://github.com/Joaoaalves/ailib",
            content: () => <p>{t("AILib.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/AILIB.jpg"
                    title={t("kairos.title")}
                />
            ),
            tecnologies: [
                {
                    Icon: FaReact,
                    content: "React",
                },
                {
                    Icon: IoLogoElectron,
                    content: "ElectronJS",
                },
                {
                    Icon: RiOpenaiFill,
                    content: "OpenAI",
                },
                {
                    Icon: PiVectorThreeLight,
                    content: "QDrant",
                },
                {
                    Icon: TbBrandTypescript,
                    content: "TypeScript",
                },
            ],
        },
        {
            title: t("kairos.title"),
            description: t("kairos.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "https://github.com/dbs-web/kairos",
            url: "https://kairos.dbsweb.com.br/",
            content: () => <p>{t("kairos.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/kairos.svg"
                    className="invert max-w-[80%]"
                    title={t("kairos.title")}
                />
            ),
            tecnologies: [
                {
                    Icon: TbBrandNextjs,
                    content: "NextJS",
                },
                {
                    Icon: SiTailwindcss,
                    content: "TailwindCSS",
                },
                {
                    Icon: SiMysql,
                    content: "MySQL",
                },
                {
                    Icon: DiRedis,
                    content: "Redis",
                },
                {
                    Icon: FaPython,
                    content: "Python (FastAPI)",
                },
                {
                    Icon: SiRabbitmq,
                    content: "RabbitMQ",
                },
            ],
        },
        {
            title: t("ipTracker.title"),
            description: t("ipTracker.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "http://github.com/joaoaalves/ip-address-tracker",
            url: "https://ip.joao-alves.com/",
            content: () => <p>{t("ipTracker.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/IP Tracker.jpg"
                    title={t("ipTracker.title")}
                />
            ),
            tecnologies: [
                {
                    Icon: SiAngular,
                    content: "Angular",
                },
            ],
        },
        {
            title: t("kanban.title"),
            description: t("kanban.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "https://github.com/Joaoaalves/kanban",
            url: "https://kanban.joao-alves.com/",
            content: () => <p>{t("kanban.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/kanban.svg"
                    className="max-w-[80%]"
                    title={t("kanban.title")}
                />
            ),
            tecnologies: [
                {
                    Icon: TbBrandNextjs,
                    content: "NextJS",
                },
                {
                    Icon: FaReact,
                    content: "React",
                },
                {
                    Icon: SiTailwindcss,
                    content: "TailwindCSS",
                },
                {
                    Icon: SiMongodb,
                    content: "MongoDB",
                },
            ],
        },
        {
            title: t("devlinks.title"),
            description: t("devlinks.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "https://github.com/Joaoaalves/Dev-Links-NextJS-Shadcn",
            url: "https://devlinks.joao-alves.com/",
            content: () => <p>{t("devlinks.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/devlinks.svg"
                    className="max-w-[80%]"
                    title={t("devlinks.title")}
                />
            ),
            tecnologies: [
                {
                    Icon: TbBrandNextjs,
                    content: "NextJS",
                },
                {
                    Icon: FaReact,
                    content: "React",
                },
                {
                    Icon: SiTailwindcss,
                    content: "TailwindCSS",
                },
                {
                    Icon: SiMongodb,
                    content: "MongoDB",
                },
            ],
        },
        {
            title: t("marynaCarvalho.title"),
            description: t("marynaCarvalho.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "https://github.com/Joaoaalves/maryna-adv",
            url: "https://marynacarvalhoadvocacia.com.br/",
            content: () => <p>{t("marynaCarvalho.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/maryna.png"
                    title={t("marynaCarvalho.title")}
                    className="scale-[.7] data-[active=true]:scale-[.3]"
                />
            ),
            tecnologies: [
                {
                    Icon: TbBrandNextjs,
                    content: "NextJS",
                },
                {
                    Icon: FaReact,
                    content: "React",
                },
                {
                    Icon: SiTailwindcss,
                    content: "TailwindCSS",
                },
                {
                    Icon: SiResend,
                    content: "Resend",
                },
            ],
        },
        {
            title: t("corpoEMente.title"),
            description: t("corpoEMente.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "https://github.com/CorpoeMente/site",
            url: "https://clinicacorpoemente.com/",
            content: () => <p>{t("corpoEMente.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/corpo-e-mente.png"
                    title={t("corpoEMente.title")}
                    className="invert scale-[.7] data-[active=true]:scale-[.3]"
                />
            ),
            tecnologies: [
                {
                    Icon: TbBrandNextjs,
                    content: "NextJS",
                },
                {
                    Icon: FaReact,
                    content: "React",
                },
                {
                    Icon: SiTailwindcss,
                    content: "TailwindCSS",
                },
                {
                    Icon: SiMongodb,
                    content: "MongoDB",
                },
            ],
        },
        {
            title: t("hitTheDot.title"),
            description: t("hitTheDot.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "https://github.com/Joaoaalves/hit-the-dot",
            content: () => <p>{t("hitTheDot.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/htd.jpg"
                    title={t("hitTheDot.title")}
                />
            ),
            tecnologies: [
                {
                    Icon: FaPython,
                    content: "Python",
                },
                {
                    Icon: SiFlask,
                    content: "Flask",
                },
                {
                    Icon: SiMysql,
                    content: "MySQL",
                },
                {
                    Icon: RiFirebaseFill,
                    content: "Firebase",
                },
                {
                    Icon: FaHtml5,
                    content: "HTML",
                },
                {
                    Icon: FaCss3,
                    content: "CSS",
                },
                {
                    Icon: DiRedis,
                    content: "Redis",
                },
            ],
        },
        {
            title: t("doctorS.title"),
            description: t("doctorS.shortDescription"),
            viewCode: t("codeButton"),
            viewProject: t("projectButton"),
            repo: "https://github.com/fga-eps-mds/2020.1-DoctorS-Bot",
            content: () => <p>{t("doctorS.description")}</p>,
            header: (
                <Logo
                    src="/images/projects/DoctorS.png"
                    title={t("doctorS.title")}
                />
            ),
            tecnologies: [
                {
                    Icon: FaPython,
                    content: "Python",
                },
                {
                    Icon: SiFlask,
                    content: "Flask",
                },
                {
                    Icon: RiFirebaseFill,
                    content: "Firebase",
                },
            ],
        },
    ];
};
