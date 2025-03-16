"use client";

import Contact from "@/components/sections/contact";

import { TimeLine } from "@/components/sections/timeline";
import Hero from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { ScrollProvider } from "@/contexts/ScrollProvider";
import Nav from "@/components/ui/custom/nav/Nav";
import { FloatingDock } from "@/components/ui/floating-dock";
import Projects from "@/components/sections/projects";
import { ProjectsProvider } from "@/contexts/ProjectsProvider";
import { useTranslations } from "next-intl";
import { getProjects } from "@/data/projects";
import MobileLanguageSelector from "@/components/ui/custom/nav/MobileLanguageSelector";

export default function HomeContent() {
    const tProjects = useTranslations("projects");
    const projects = getProjects(tProjects);

    return (
        <div className="!min-w-screen !max-w-full !p-0 flex flex-col items-center relative overflow-x-hidden">
            <ScrollProvider>
                <Nav />
                <Hero />
                <TimeLine />
                <Skills />
                <ProjectsProvider projects={projects}>
                    <Projects />
                </ProjectsProvider>
                <Contact />
                <MobileLanguageSelector />
                <FloatingDock />
            </ScrollProvider>
        </div>
    );
}
