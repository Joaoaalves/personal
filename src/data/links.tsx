import { IoTerminalOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { TbMail } from "react-icons/tb";
import { MdOutlineTimeline } from "react-icons/md";

export const links = [
    {
        id: "home",
        title: "links.home",
        icon: <GoHome className="h-full w-full" />,
        href: "/#home",
    },
    {
        id: "timeline",
        title: "links.timeline",
        icon: <MdOutlineTimeline className="h-full w-full" />,
        href: "/#timeline",
    },
    {
        id: "skills",
        title: "links.skills",
        icon: <IoTerminalOutline className="h-full w-full" />,
        href: "/#skills",
    },
    {
        id: "projects",
        title: "links.projects",
        icon: <IoTerminalOutline className="h-full w-full" />,
        href: "#projects",
    },
    {
        id: "contact",
        title: "links.contact",
        icon: <TbMail className="h-full w-full" />,
        href: "/#contact",
    },
];
