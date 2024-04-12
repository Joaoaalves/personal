import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  IoCodeSlashOutline,
  IoDocumentOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const MenuLink = ({ children, href}) => {
  const router = useRouter();
  return (
    <NavigationMenuLink
      className={`flex items-center justify-center ${router.pathname === href ? "text-violet-600" : ""}`}
      href={href}
    >
      {children}
    </NavigationMenuLink>
  );
}

export default function FloatingNav() {
  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="lg:hidden !bg-white dark:!bg-black border-[1px] !border-neutral-400 dark:!border-neutral-800 dark:!text-white !text-black !z-50 !px-3 h-[46px]">
            <RxHamburgerMenu className="text-2xl" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col items-start gap-y-4 p-6 w-[90vw] sm:w-[95vw]">

              <MenuLink href="/">
                <IoHomeOutline className="inline-block text-lg me-2" />
                {t("sidepanel.home")}
              </MenuLink>
              <MenuLink href="/projects">
                <IoCodeSlashOutline className="inline-block text-lg me-2" />
                {t("sidepanel.projects")}
              </MenuLink>
              <MenuLink href="/cv">
                <IoDocumentOutline className="inline-block text-lg me-2" />
                {t("sidepanel.CV")}
              </MenuLink>
              <MenuLink href="/contact">
                <CiMail className="inline-block text-lg me-2" />
                {t("sidepanel.contact")}
              </MenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
