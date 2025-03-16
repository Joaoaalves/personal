"use client";
import { LampContainer } from "@/components/ui/lamp";
import { ProjectsGrid } from "../ui/custom/projects-grid";

export default function Projects() {
    return (
        <section className="!bg-zinc-950" id="projects">
            <LampContainer>
                <ProjectsGrid />
            </LampContainer>
        </section>
    );
}
