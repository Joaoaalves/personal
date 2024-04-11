import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCodeSlashOutline, IoDocumentOutline,IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
export default function FloatingNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="lg:hidden !bg-white dark:!bg-black border-[1px] !border-neutral-400 dark:!border-neutral-800 dark:!text-white !text-black !z-50 !px-3 h-[46px]">
            <RxHamburgerMenu className="text-2xl" />
          </NavigationMenuTrigger>
          <NavigationMenuContent >
            <div className="flex flex-col items-start gap-y-4 p-6 px-16 sm:px-24">
            <NavigationMenuLink className="flex items-center justify-center" href="/">
                <IoHomeOutline className="inline-block text-lg me-2" />
                Home
              </NavigationMenuLink>
              <NavigationMenuLink className="flex items-center justify-center" href="/projects">
                <IoCodeSlashOutline className="inline-block text-lg me-2" />
                Projects
              </NavigationMenuLink>
              <NavigationMenuLink className="flex items-center justify-center" href="/cv">
                <IoDocumentOutline className="inline-block text-lg me-2" />
                CV
              </NavigationMenuLink>
              <NavigationMenuLink className="flex items-center justify-center" href="/contact">
                <CiMail className="inline-block text-lg me-2" />
                Contact
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  )
}