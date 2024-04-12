import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaAws,
  FaChevronRight,
} from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import Button from "./Button";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRadixui,
  SiFlask,
  SiRedis,
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
      <FaCss3 className="text-2xl text-blue-400" />
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
  flask: (
    <Icon text="Flask">
      <SiFlask className="text-2xl text-black dark:text-white" />
    </Icon>
  ),
  redis: (
    <Icon text="Redis">
      <SiRedis className="text-2xl text-red-400" />
    </Icon>
  ),
};

function Root({ children }) {
  return (
    <ul className="flex flex-col items-start justify-start w-full gap-y-8 transition duration-300 ease-in-out 2xl:w-3/4 lg:max-w-[45vw]">
      {children}
    </ul>
  );
}

function Item({ children }) {
  return (
    <li className="flex flex-col items-center justify-center xl:grid xl:grid-cols-[14rem_1fr] xl:grid-rows-1 gap-y-4 xl:gap-y-0 xl:gap-x-8 w-full pt-6 xl:p-6 bg-slate-50 dark:bg-neutral-900 rounded-md shadow-[0px_0px_8px_2px_rgba(0,0,0,0.4)] dark:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.03)]">
      {children}
    </li>
  );
}

function Image({ image }) {
  return (
    <div
      className="w-3/4 xl:w-full h-64 bg-contain bg-no-repeat bg-bottom lg:bg-center rounded bg-clip-content drop-shadow-[0px_0px_6px_rgba(0,0,0,0.4)] dark:drop-shadow-[0px_0px_4px_rgba(255,255,255,0.15)]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
}

function Content({ children }) {
  return (
    <div className="flex flex-col items-center text-center xl:text-start xl:items-start justify-start gap-y-2 h-full">
      {children}
    </div>
  );
}

function Title({ children }) {
  return (
    <h3 className="text-neutral-800 dark:text-neutral-50 text-2xl font-bold max-w-[90%]">
      {children}
    </h3>
  );
}

function Description({ children }) {
  return (
    <p className="text-neutral-900 dark:text-white text-md mt-8 max-w-[90%]">
      {children}
    </p>
  );
}

function Tecnologies({ children }) {
  return (
    <div className="flex flex-wrap items-center justify-center xl:justify-start gap-2 mt-8 xl:mt-auto">
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
    <div className="flex flex-wrap items-center justify-center xl:justify-start gap-2 max-w-[90%] mt-8">
      {children}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="p-2 text-sm rounded-md border-[1px] border-neutral-400 font-medium dark:border-neutral-600 dark:bg-neutral-900 text-black dark:text-white">
      {children}
    </span>
  );
}

function Buttons({ children }) {
  return (
    <div className="flex flex-col xl:flex-row xl:flex-wrap gap-y-4 items-center justify-between w-full gap-x-4 mt-auto xl:mt-4 mb-4 xl:mb-0 last:ms-auto">
      {children}
    </div>
  );
}

function View({ href, children, className }) {
  return <Button href={href} className={className}>{children}</Button>;
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
  Buttons,
  View,
};
