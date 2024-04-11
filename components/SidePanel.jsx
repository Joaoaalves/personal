import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "next-i18next";
import { IoCodeSlashOutline, IoDocumentOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

export default function SidePanel() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleNavigate = (url) => {
    router.push(url);
  };

  return (
    <aside className="hidden lg:flex fixed z-10 lg:w-[30vw] xl:w-[20vw] xl:max-w-80 bg-neutral-100 dark:bg-neutral-900 lg:flex-col items-center justify-center lg:py-8 h-20 lg:min-h-scren lg:h-screen  left-0 top-0 border-r-2 dark:border-none">
      <div
        className="group lg:flex flex-col items-center justify-center gap-y-8 cursor-pointer"
        onClick={() => handleNavigate("/")}
      >
        <Avatar className="w-24 h-24 lg:inline-block transition duration-500 group-hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.2)] group-hover:dark:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.2)]">
          <AvatarImage src="https://avatars.githubusercontent.com/u/48325411?v=4" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
        <p className="text-xl">
          <b className="text-[#ffffff00] group-hover:dark:text-violet-500 transition duration-500 group-hover:text-violet-800 text-sm me-1">
            &lt;name&gt;
          </b>
          <underline className="font-bold text-2xl">João Alves</underline>
          <b className="text-[#ffffff00] group-hover:dark:text-violet-500 transition duration-500 group-hover:text-violet-800 text-sm ms-1">
            &lt;/name&gt;
          </b>
        </p>
      </div>

      <ul className="flex lg:flex-col items-start justify-center text-black dark:text-white lg:mt-12 lg:px-8">
        <li
          onClick={() => handleNavigate("/projects")}
          className="group transition duration-300 ease-in-out cursor-pointer p-4 w-full"
        >
          <div className="inline-block font-semibold text-lg">
            <IoCodeSlashOutline className="inline-block text-2xl me-4 mb-1" />
            {t("sidepanel.projects")}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-500"></span>
          </div>
        </li>
        <li
          onClick={() => handleNavigate("/cv")}
          className="group transition duration-300 ease-in-out cursor-pointer p-4 w-full"
        >
          <div className="inline-block font-semibold text-lg">
            <IoDocumentOutline className="inline-block text-2xl me-4 mb-1" />
            Curriculum Vitae
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-500"></span>
          </div>
        </li>
        <li
          onClick={() => handleNavigate("/contact")}
          className="group transition duration-300 ease-in-out cursor-pointer p-4 w-full"
        >
          <div className="inline-block font-semibold text-lg">
            <CiMail className="inline-block text-2xl me-4 mb-1" />
            {t("sidepanel.contact")}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-500"></span>
          </div>
        </li>
      </ul>

      <div className="lg:flex items-center justify-center gap-x-8 w-full mt-auto border-t-[1px] pt-8 border-neutral-300 dark:border-neutral-800">
        <Link
          className="text-2xl hover:text-violet-600 dark:hover:text-violet-500 transition duration-300 ease-in-out text-black dark:text-white"
          href="https://github.com/Joaoaalves"
          target="_blank"
        >
          <IoLogoGithub />
        </Link>
        <Link
          className="text-2xl hover:text-violet-600 dark:hover:text-violet-500 transition duration-300 ease-in-out text-black dark:text-white"
          href="/contact"
        >
          <IoIosMail />
        </Link>
        <Link
          className="text-2xl hover:text-violet-600 dark:hover:text-violet-500 transition duration-300 ease-in-out text-black dark:text-white"
          href="https://www.linkedin.com/in/jo%C3%A3o-vitor-alves-de-araujo-0b7b771b4/"
          target="_blank"
        >
          <IoLogoLinkedin />
        </Link>
      </div>
    </aside>
  );
}
