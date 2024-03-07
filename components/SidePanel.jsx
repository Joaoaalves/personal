import { useRouter } from "next/router";
import { IoIosMail, IoLogoGithub } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SidePanel() {
  const router = useRouter();

  const handleNavigate = (url) => {
    router.push(url);
  };

  return (
    <aside className="w-screen z-10  md:w-[30vw] lg:w-[20vw] xl:max-w-80 bg-neutral-100 dark:bg-neutral-900 flex md:flex-col items-center justify-center md:py-8 h-20 md:min-h-scren md:h-screen fixed left-0 top-0">
      <div className="hidden md:flex flex-col items-center justify-center gap-y-8">
        <Avatar className="w-24 h-24 hidden md:inline-block">
          <AvatarImage src="https://avatars.githubusercontent.com/u/48325411?v=4" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
        <span className="text-lg">
          <b className="dark:text-purple-400 text-purple-800 text-sm me-1">
            &lt;name&gt;
          </b>
          João Alves
          <b className="dark:text-purple-400 text-purple-800 text-sm ms-1">
            &lt;/name&gt;
          </b>
        </span>
      </div>

      <ul className="flex md:flex-col items-start justify-center text-black dark:text-white md:mt-12 md:px-8">
        <li
          onClick={() => handleNavigate("/timeline")}
          className="group transition duration-300 ease-in-out cursor-pointer p-4 w-full"
        >
          <div className="inline-block">
            Experiências
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
          </div>
        </li>
        <li
          onClick={() => handleNavigate("/projects")}
          className="group transition duration-300 ease-in-out cursor-pointer p-4 w-full"
        >
          <div className="inline-block">
            Projetos
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
          </div>
        </li>
        <li
          onClick={() => handleNavigate("/cv")}
          className="group transition duration-300 ease-in-out cursor-pointer p-4 w-full"
        >
          <div className="inline-block">
            CV
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
          </div>
        </li>
        <li
          onClick={() => handleNavigate("/contact")}
          className="group transition duration-300 ease-in-out cursor-pointer p-4 w-full"
        >
          <div className="inline-block">
            Contato
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500"></span>
          </div>
        </li>
      </ul>

      <div className="hidden md:flex items-center justify-center gap-x-8 w-full mt-auto border-t-[1px] pt-8 border-neutral-300 dark:border-neutral-800">
        <a
          className="text-2md hover:text-purple-600 dark:hover:text-purple-600 transition duration-300 ease-in-out text-black dark:text-white"
          href="https://github.com/Joaoaalves"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
        <a
          className="text-2md hover:text-purple-600 dark:hover:text-purple-600 transition duration-300 ease-in-out text-black dark:text-white"
          href="/contact"
        >
          <IoIosMail />
        </a>
      </div>
    </aside>
  );
}
