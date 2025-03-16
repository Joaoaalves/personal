"use client";

import { IProject, Tecnology } from "@/data/projects";
import { createContext, useContext, useState, ReactNode, JSX } from "react";

interface ProjectsContextProps {
    queries: string[];
    addQuery: (query: string) => void;
    removeQuery: (query: string) => void;
    filteredProjects: IProject[];
    selectedProject: IProject | null;
    setSelectedProject: (project: IProject) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ProjectsContext = createContext<ProjectsContextProps>({
    queries: [],
    addQuery: () => {},
    removeQuery: () => {},
    filteredProjects: [],
    selectedProject: null,
    setSelectedProject: () => {},
    open: false,
    setOpen: () => {},
});

export const ProjectsProvider = ({
    children,
    projects,
}: {
    children: ReactNode;
    projects: IProject[];
}) => {
    const [queries, setQueries] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedProject, setSelectedProject] = useState<IProject | null>(
        null,
    );
    const [open, setOpen] = useState(false);

    const handleSearch = (newQueries: string[]) => {
        if (newQueries.length === 0) {
            setFilteredProjects(projects);
            return;
        }

        setFilteredProjects(
            projects.filter((p) =>
                newQueries.some(
                    (q) =>
                        p.title.toLowerCase().includes(q.toLowerCase()) ||
                        p.description.toLowerCase().includes(q.toLowerCase()) ||
                        p.tecnologies.some((t) =>
                            t.content.toLowerCase().includes(q.toLowerCase()),
                        ),
                ),
            ),
        );
    };

    const addQuery = (query: string) => {
        if (!query.trim() || queries.includes(query)) return;
        const newQueries = [...queries, query];
        setQueries(newQueries);
        handleSearch(newQueries);
    };

    const removeQuery = (query: string) => {
        const newQueries = queries.filter((q) => q !== query);
        setQueries(newQueries);
        handleSearch(newQueries);
    };

    return (
        <ProjectsContext.Provider
            value={{
                queries,
                addQuery,
                removeQuery,
                filteredProjects,
                selectedProject,
                setSelectedProject,
                open,
                setOpen,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjects = () => useContext(ProjectsContext);
