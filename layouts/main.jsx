import { Inter } from "next/font/google";
import TopBar from "@/components/TopBar";
import SidePanel from "@/components/SidePanel";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen h-scren w-screen grid grid-cols-1 grid-rows-[5rem_1fr] md:grid-cols-[30vw_1fr] xl:grid-cols-[min(20vw,320px)_1fr] md:grid-rows-[46px_1fr] gap-x-2 bg-white overflow-x-hidden dark:bg-black ${inter.className}`}
    >
      <SidePanel />
      <TopBar />
      <section className="flex flex-col items-center justify-start text-black dark:text-white row-start-2 md:row-start-1 md:col-start-2 md:row-span-2 overflow-x-hidden xl:px-6 py-12">
        {children}
      </section>
    </main>
  );
}
