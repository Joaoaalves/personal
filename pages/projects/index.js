"use client";
import { useState, useEffect } from "react";
import Layout from "@/layouts/main";
import Projects from "@/components/Project";

const formatText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const projects = [
  {
    title: "Advocacia Teste",
    description:
      "Site para escritório de advocacia, com features de blog e contato. Desenvolvido com Next.js e TailwindCSS.",
    link: "https://google.com",
    image: "https://avatars.githubusercontent.com/u/48325411?v=4",
    tecnologies: ["nextjs", "react", "tailwindcss"],
    tags: ["Frontend"],
  },
  {
    title: "Advocacia Teste",
    description:
      "Site para escritório de advocacia, com features de blog e contato. Desenvolvido com Next.js e TailwindCSS.",
    link: "https://google.com",
    image: "https://avatars.githubusercontent.com/u/48325411?v=4",
    tecnologies: ["nextjs", "tailwindcss", "openai"],
    tags: ["Frontend", "AI"],
  },
  {
    title: "Advocacia Teste",
    description:
      "Site para escritório de advocacia, com features de blog e contato. Desenvolvido com Next.js e TailwindCSS.",
    link: "https://google.com",
    image: "https://avatars.githubusercontent.com/u/48325411?v=4",
    tecnologies: ["nextjs", "tailwindcss", "mongodb"],
    tags: ["Frontend", "Backend"],
  },
  {
    title: "Advocacia Teste",
    description:
      "Site para escritório de advocacia, com features de blog e contato. Desenvolvido com Next.js e TailwindCSS.",
    link: "https://google.com",
    image: "https://avatars.githubusercontent.com/u/48325411?v=4",
    tecnologies: ["nextjs", "radix", "mongodb", "stitches"],
  },
];

export default function Home() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [tecnologies, setTecnologies] = useState([
    "javascript",
    "tailwindcss",
    "nextjs",
    "openai",
    "python",
    "github",
    "react",
    "css",
    "html",
    "aws",
    "mongodb",
    "postgresql",
    "mysql",
    "radix",
    "stitches",
  ]);
  const [selectedTecnologies, setSelectedTecnologies] = useState([]);

  const handleFilter = () => {
    const filtered = projects.filter((project) => {
      return project.tecnologies.some((tecnologie) =>
        selectedTecnologies.includes(tecnologie),
      );
    });
    setFilteredProjects(filtered);
  };

  useEffect(() => {
    if (selectedTecnologies.length === 0) {
      setFilteredProjects(projects);
    } else {
      handleFilter();
    }
  }, [selectedTecnologies]);

  return (
    <Layout>
      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between self-start w-full h-full px-8">
        <Projects.Root>
          {filteredProjects.map((project) => (
            <Projects.Item>
              <Projects.Image image={project.image} />
              <Projects.Content>
                <Projects.Title>{project.title}</Projects.Title>
                <Projects.Description>
                  {project.description}
                </Projects.Description>
                {project.tecnologies && (
                  <Projects.Tecnologies>
                    {project.tecnologies.map((tecnologie) => (
                      <Projects.Tecnologie tecnologie={tecnologie} />
                    ))}
                  </Projects.Tecnologies>
                )}
                <Projects.Details>
                  <Projects.Tags>
                    {project.tags &&
                      project.tags.map((tag) => (
                        <Projects.Tag>{tag}</Projects.Tag>
                      ))}
                  </Projects.Tags>
                  <Projects.Link href={project.link}>Ver projeto</Projects.Link>
                </Projects.Details>
              </Projects.Content>
            </Projects.Item>
          ))}
        </Projects.Root>
        <div className="hidden max-w-[320px] min-w-72 w-80 h-[90vh] rounded-md xl:flex flex-col items-center justify-start p-6 bg-white dark:bg-neutral-900 shadow-[0px_0px_8px_2px_rgba(0,0,0,0.4)] dark:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.1)]">
          <h1 className="text-2xl font-medium">Filtro</h1>

          <div className="flex flex-col items-start justify-start gap-y-4 w-full mt-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tecnologies.map((tecnologie) => (
                <button
                  onClick={() => {
                    if (selectedTecnologies.includes(tecnologie)) {
                      setSelectedTecnologies(
                        selectedTecnologies.filter(
                          (item) => item !== tecnologie,
                        ),
                      );
                    } else {
                      setSelectedTecnologies([
                        ...selectedTecnologies,
                        tecnologie,
                      ]);
                    }
                  }}
                  className={`px-4 py-2 transition duration-300 ease-in-out dark:bg-black dark:text-white bg-neutral-600 text-white rounded text-center ${selectedTecnologies.includes(tecnologie) ? "!bg-purple-500" : ""}`}
                >
                  {formatText(tecnologie)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
