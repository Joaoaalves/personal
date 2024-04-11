import { Source_Code_Pro } from "next/font/google";
import TopBar from "@/components/TopBar";
import SidePanel from "@/components/SidePanel";
const font = Source_Code_Pro({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster";
export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen h-scren max-w-screen grid grid-cols-1 grid-rows-[5rem_1fr] lg:grid-cols-[30vw_1fr] xl:grid-cols-[min(20vw,320px)_1fr] lg:grid-rows-[46px_1fr] bg-white overflow-x-hidden dark:bg-black ${font.className}`}
    >
      <SidePanel />
      <TopBar />
      <section className="flex flex-col items-center justify-start text-black dark:text-white row-start-2 lg:row-start-1 lg:col-start-2 lg:row-span-2 overflow-x-hidden pb-4 lg:px-6 lg:pt-24">
        {children}
      </section>
      <Toaster />
    </main>
  );
}
