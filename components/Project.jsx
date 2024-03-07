import { FaReact, FaCSS3Alt, FaHtml5, FaAws } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRadixui,
} from "react-icons/si";
import { RxStitchesLogo } from "react-icons/rx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Icon({ children, text }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-default">{children}</TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const tecnologies = {
  javascript: (
    <Icon text="Javascript">
      <IoLogoJavascript className="text-2xl text-yellow-400" />
    </Icon>
  ),
  tailwindcss: (
    <Icon text="TailwindCSS">
      <SiTailwindcss className="text-2xl text-blue-400" />
    </Icon>
  ),
  nextjs: (
    <Icon text="Next.js">
      <TbBrandNextjs className="text-2xl text-black dark:text-white" />
    </Icon>
  ),
  openai: (
    <Icon text="OpenAI">
      <RiOpenaiFill className="text-2xl text-green-400" />
    </Icon>
  ),
  python: (
    <Icon text="Python">
      <FaPython className="text-2xl text-yellow-400" />
    </Icon>
  ),
  github: (
    <Icon text="Github">
      <VscGithub className="text-2xl text-black dark:text-white" />
    </Icon>
  ),
  react: (
    <Icon text="React">
      <FaReact className="text-2xl text-blue-400" />
    </Icon>
  ),
  css: (
    <Icon text="CSS">
      <FaCSS3Alt className="text-2xl text-blue-400" />
    </Icon>
  ),
  html: (
    <Icon text="HTML">
      <FaHtml5 className="text-2xl text-orange-400" />
    </Icon>
  ),
  aws: (
    <Icon text="AWS">
      <FaAws className="text-2xl text-yellow-400" />
    </Icon>
  ),
  mongodb: (
    <Icon text="MongoDB">
      <SiMongodb className="text-2xl text-green-400" />
    </Icon>
  ),
  postgresql: (
    <Icon text="PostgreSQL">
      <SiPostgresql className="text-2xl text-blue-400" />
    </Icon>
  ),
  mysql: (
    <Icon text="MySQL">
      <SiMysql className="text-2xl text-blue-400" />
    </Icon>
  ),
  radix: (
    <Icon text="Radix">
      <SiRadixui className="text-2xl text-green-400" />
    </Icon>
  ),
  stitches: (
    <Icon text="Stitches">
      <RxStitchesLogo className="text-2xl text-black dark:text-white" />
    </Icon>
  ),
};

function Root({ children }) {
  return (
    <ul className="flex flex-col items-start justify-start w-full xl:w-3/4 lg:max-w-[45vw] gap-y-8 transition duration-300 ease-in-out">
      {children}
    </ul>
  );
}

function Item({ children }) {
  return (
    <li className="flex flex-col sm:flex-row items-start justify-center gap-y-4 xl:gap-y-0 gap-x-4 w-full p-6 bg-neutral-100 dark:bg-neutral-900 rounded-md shadow-[0px_0px_8px_2px_rgba(0,0,0,0.4)] dark:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.03)]">
      {children}
    </li>
  );
}

function Image({ image }) {
  return (
    <div className="w-full xl:max-w-64 h-64 bg-cover bg-bottom rounded bg-clip-content" style={{
      backgroundImage: `url(${image})`,
    }}>
    </div>
  );
}

function Content({ children }) {
  return (
    <div className="flex flex-col items-center text-center xl:text-start xl:items-start justify-start gap-y-2">
      {children}
    </div>
  );
}

function Title({ children }) {
  return (
    <h3 className="text-neutral-800 dark:text-neutral-50 text-2xl font-bold">
      {children}
    </h3>
  );
}

function Description({ children }) {
  return <p className="text-neutral-900 dark:text-white text-md">{children}</p>;
}

function Tecnologies({ children }) {
  return (
    <div className="flex flex-wrap items-center justify-start gap-x-2 mt-auto">
      {children}
    </div>
  );
}

function Tecnologie({ tecnologie }) {
  return (
    <span className="px-2 py-1 text-xs rounded-md">
      {tecnologies[tecnologie]}
    </span>
  );
}

function Details({ children }) {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-y-6 justify-between w-full">
      {children}
    </div>
  );
}

function Tags({ children }) {
  return (
    <div className="flex flex-wrap items-center justify-start gap-x-2 mt-auto">
      {children}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="p-2 text-sm rounded-md bg-neutral-50 dark:border-[1px] dark:border-white dark:bg-neutral-900 text-black dark:text-white shadow">
      {children}
    </span>
  );
}

function Link({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      className="px-4 py-2 dark:bg-black dark:text-white bg-gray-800 text-white rounded min-w-32 text-center xl:self-end"
    >
      {children}
    </a>
  );
}

export default {
  Root,
  Item,
  Image,
  Content,
  Title,
  Description,
  Tecnologies,
  Tecnologie,
  Tags,
  Tag,
  Details,
  Link,
};
