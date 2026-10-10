export type Project = {
    // Key under `projects` in the locale files
    key: string;
    year: string;
    stack: string[];
    repo?: string;
    url?: string;
    image: string;
    fit?: "cover" | "contain";
    invert?: boolean;
    inProgress?: boolean;
};

export const projects: Project[] = [
    {
        key: "RAGNET",
        year: "2025",
        stack: ["ASP.NET Core", "Angular", "PostgreSQL", "QDrant", "OpenAI"],
        repo: "https://github.com/Joaoaalves/RAGNET",
        image: "/images/projects/RAGNET.jpg",
        inProgress: true,
    },
    {
        key: "AILib",
        year: "2024",
        stack: ["Electron", "React", "TypeScript", "QDrant", "OpenAI"],
        repo: "https://github.com/Joaoaalves/ailib",
        image: "/images/projects/AILIB.jpg",
        inProgress: true,
    },
    {
        key: "kairos",
        year: "2024",
        stack: ["Next.js", "FastAPI", "MySQL", "Redis", "RabbitMQ"],
        repo: "https://github.com/dbs-web/kairos",
        url: "https://kairos.dbsweb.com.br/",
        image: "/images/projects/kairos.svg",
        fit: "contain",
        invert: true,
    },
    {
        key: "ipTracker",
        year: "2024",
        stack: ["Angular"],
        repo: "http://github.com/joaoaalves/ip-address-tracker",
        url: "https://ip.joao-alves.com/",
        image: "/images/projects/IP Tracker.jpg",
    },
    {
        key: "kanban",
        year: "2024",
        stack: ["Next.js", "React", "TailwindCSS", "MongoDB"],
        repo: "https://github.com/Joaoaalves/kanban",
        url: "https://kanban.joao-alves.com/",
        image: "/images/projects/kanban.svg",
        fit: "contain",
    },
    {
        key: "devlinks",
        year: "2024",
        stack: ["Next.js", "React", "TailwindCSS", "MongoDB"],
        repo: "https://github.com/Joaoaalves/Dev-Links-NextJS-Shadcn",
        url: "https://devlinks.joao-alves.com/",
        image: "/images/projects/devlinks.svg",
        fit: "contain",
    },
    {
        key: "marynaCarvalho",
        year: "2023",
        stack: ["Next.js", "React", "TailwindCSS", "Resend"],
        repo: "https://github.com/Joaoaalves/maryna-adv",
        url: "https://marynacarvalhoadvocacia.com.br/",
        image: "/images/projects/maryna.png",
        fit: "contain",
    },
    {
        key: "corpoEMente",
        year: "2023",
        stack: ["Next.js", "React", "TailwindCSS", "MongoDB"],
        repo: "https://github.com/CorpoeMente/site",
        url: "https://clinicacorpoemente.com/",
        image: "/images/projects/corpo-e-mente.png",
        fit: "contain",
        invert: true,
    },
    {
        key: "hitTheDot",
        year: "2021",
        stack: ["Python", "Flask", "MySQL", "Redis", "Firebase"],
        repo: "https://github.com/Joaoaalves/hit-the-dot",
        image: "/images/projects/htd.jpg",
    },
    {
        key: "doctorS",
        year: "2020",
        stack: ["Python", "Flask", "Firebase"],
        repo: "https://github.com/fga-eps-mds/2020.1-DoctorS-Bot",
        image: "/images/projects/DoctorS.png",
        fit: "contain",
    },
];

export type Chapter = {
    // Key under `story` in the locale files
    key: string;
    year: string;
    // Proper names shown under the chapter; not translated
    items: { name: string; detail: string }[];
};

export const chapters: Chapter[] = [
    {
        key: "c1",
        year: "2018",
        items: [{ name: "DoctorS", detail: "Python · Flask · Firebase" }],
    },
    {
        key: "c2",
        year: "2020",
        items: [
            {
                name: "Certified Network Security Specialist (CNSS)",
                detail: "International Cybersecurity Institute",
            },
            {
                name: "Cybersecurity Essentials",
                detail: "Cisco Networking Academy",
            },
            {
                name: "Bootcamp Analista de Cibersegurança",
                detail: "XP Educação · IGTI",
            },
        ],
    },
    {
        key: "c3",
        year: "2021",
        items: [
            { name: "Hit the Dot", detail: "Python · Flask · MySQL · Redis" },
        ],
    },
    {
        key: "c4",
        year: "2023",
        items: [
            { name: "Instituto Panapaná", detail: "LMS" },
            {
                name: "Maryna Carvalho Advocacia",
                detail: "Next.js · TailwindCSS · Resend",
            },
            {
                name: "Corpo e Mente Clinical Space",
                detail: "Next.js · MongoDB",
            },
        ],
    },
    {
        key: "c5",
        year: "2024",
        items: [
            { name: "AILib", detail: "Electron · React · QDrant" },
            { name: "Kairós", detail: "Next.js · FastAPI · Redis · QDrant" },
        ],
    },
    {
        key: "c6",
        year: "2025",
        items: [
            {
                name: "RAG.NET",
                detail: "ASP.NET Core · Angular · PostgreSQL · QDrant",
            },
        ],
    },
];

// `years` is omitted where the current site doesn't state it
export type StackItem = { name: string; years?: number; current?: boolean };

export const stack: { key: string; items: StackItem[] }[] = [
    {
        key: "backend",
        items: [
            { name: "C# · ASP.NET Core", current: true },
            { name: "Python · Flask, FastAPI", years: 5 },
            { name: "TypeScript", years: 2.5 },
            { name: "PHP", years: 2 },
        ],
    },
    {
        key: "frontend",
        items: [
            { name: "Angular", current: true },
            { name: "Next.js · React", years: 2.5 },
            { name: "TailwindCSS", years: 2.5 },
            { name: "Electron", years: 1 },
        ],
    },
    {
        key: "data",
        items: [
            { name: "SQL · MySQL, PostgreSQL, SQLite", years: 5 },
            { name: "MongoDB", years: 2 },
            { name: "QDrant · Pinecone", years: 1 },
            { name: "Redis" },
            { name: "Firebase" },
        ],
    },
    {
        key: "infra",
        items: [
            { name: "Docker · CI/CD" },
            { name: "Linux" },
            { name: "Git" },
            { name: "Figma" },
        ],
    },
];

export const email = "contato@joao-alves.com";

export const social = [
    { name: "GitHub", url: "https://github.com/joaoaalves" },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jo%C3%A3o-vitor-alves-de-araujo-0b7b771b4/",
    },
    { name: "LeetCode", url: "https://leetcode.com/u/Joaoaalves/" },
    {
        name: "Frontend Mentor",
        url: "https://www.frontendmentor.io/profile/Joaoaalves",
    },
];
