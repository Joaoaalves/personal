import { Inter } from "next/font/google";
import TopBar from "@/components/TopBar";
import SidePanel from "@/components/SidePanel";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen h-scren w-screen grid grid-cols-[320px_1fr] grid-rows-[46px_1fr] gap-x-2 bg-white overflow-x-hidden dark:bg-neutral-900 ${inter.className}`}
    >
      <SidePanel />
      <TopBar />
      <section className="flex flex-col items-center justify-start text-black dark:text-white col-start-2 row-start-2 overflow-x-hidden">
        {children}
      </section>
    </main>
  );
}