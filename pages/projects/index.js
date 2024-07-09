"use client";
import { useState, useEffect } from "react";
import Layout from "@/layouts/main";
import Projects from "@/components/Project";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoArrowRedoOutline } from "react-icons/io5";
import { Trans } from "next-i18next";
const formatText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const projects = [
  {
    title: "projects.ip-tracker.title",
    description: "projects.ip-tracker.description",
    link: "https://ip.joaoalves.me",
    code: "https://github.com/Joaoaalves/ip-address-tracker",
    image: "/images/angular.png",
    tecnologies: ["angular", "rxjs"],
    tags: ["Frontend", "Web"]
  },
  {
    title: "projects.kanban.title",
    description: "projects.kanban.description",
    link: "https://kanban.joaoalves.me",
    code: "https://github.com/Joaoaalves/kanban",
    image: "/images/logo-kanban.svg",
    tecnologies: ["nextjs", "react", "tailwindcss", "mongodb"],
    tags: ["Frontend", "Web", "Backend", "Database"]
  },
  {
    title: "projects.devlinks.title",
    description: "projects.devlinks.description",
    link: "https://dev-links-next-js-shadcn.vercel.app/",
    code: "https://github.com/Joaoaalves/Dev-Links-NextJS-Shadcn",
    image: "/images/logo-devlinks-large.svg",
    tecnologies: ["nextjs", "react", "tailwindcss", "mongodb"],
    tags: ["Frontend", "Web", "Backend", "Database"]
  },
  {
    title: "projects.maryna-carvalho.title",
    description: "projects.maryna-carvalho.description",
    code: "https://github.com/Joaoaalves/maryna-adv",
    link: "https://marynacarvalhoadvocacia.com.br/",
    image:
      "https://marynacarvalhoadvocacia.com.br/_next/image?url=%2Flogo.png&w=640&q=75",
    tecnologies: ["nextjs", "react", "tailwindcss", "resend"],
    tags: ["Frontend", "Web", "Backend"],
  },
  {
    title: "projects.corpo-e-mente.title",
    description: "projects.corpo-e-mente.description",
    link: "https://www.clinicacorpoemente.com/",
    code: "https://github.com/CorpoeMente/site",
    image: "https://www.clinicacorpoemente.com/logo-secondary.svg",
    tecnologies: ["nextjs", "react", "tailwindcss", "mongodb"],
    tags: ["Frontend", "Web", "Backend", "Database"],
  },
  {
    title: "projects.hit-the-dot.title",
    description: "projects.hit-the-dot.description",
    link: "https://github.com/Joaoaalves/hit-the-dot",
    code: "https://github.com/Joaoaalves/hit-the-dot",
    image:
      "https://raw.githubusercontent.com/Joaoaalves/hit-the-dot/main/app/static/images/logo-high-qualit y.svg?token=GHSAT0AAAAAACO56MCIOAUNUURRANP3RI5GZP2EPQQ",
    tecnologies: ["python", "flask", "mysql", "html", "css", "redis"],
    tags: ["Backend", "Web", "Database", "Frontend"],
  },
  {
    title: "projects.spotify-clone.title",
    description: "projects.spotify-clone.description",
    link: "",
    code: "https://github.com/Joaoaalves/spotify-clone",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
    tecnologies: ["nextjs", "react", "tailwindcss"],
    tags: ["Frontend", "Web"],
  },
];

const tags = projects.reduce((acc, project) => {
  project.tags?.forEach((tag) => {
    if (!acc.includes(tag)) acc.push(tag);
  });
  return acc;
}, []);

const tecnologies = projects.reduce((acc, project) => {
  project.tecnologies?.forEach((tecnologie) => {
    if (!acc.includes(tecnologie)) acc.push(tecnologie);
  });
  return acc;
}, []);

export default function Home() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTecnologies, setSelectedTecnologies] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const { t } = useTranslation();

  const handleFilter = () => {
    var filtered = projects;
    if (selectedTecnologies.length > 0)
      filtered = projects.filter((project) => {
        return project.tecnologies?.some((tecnologie) =>
          selectedTecnologies.includes(tecnologie),
        );
      });

    if (selectedTags.length > 0)
      filtered = filtered.filter((project) => {
        return project.tags?.some((tag) => selectedTags.includes(tag));
      });

    setFilteredProjects(filtered);
  };

  useEffect(() => {
    if (selectedTecnologies.length === 0 && selectedTags.length === 0) {
      setFilteredProjects(projects);
    } else {
      handleFilter();
    }
  }, [selectedTecnologies, selectedTags]);

  return (
    <Layout>
      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between self-start w-full h-full px-8">
        <div className="flex flex-col items-start justify-start w-full">
          <h1 className="text-3xl font-bold">{t("projects.title")}</h1>
          <hr className="bg-black h-[1px] w-full xl:w-3/4  my-4"></hr>
          <p className="font-medium dark:text-neutral-400 w-full lg:max-w-[75%] 3xl:max-w-[850px] mb-8">
            <Trans i18nKey="projects.description" />
          </p>
          <Projects.Root>
            {filteredProjects.map((project, index) => (
              <Projects.Item key={index}>
                <Projects.Image image={project.image} />
                <Projects.Content>
                  <Projects.Title>{t(project.title)}</Projects.Title>
                  <Projects.Description>
                    {t(project.description)}
                  </Projects.Description>
                  {project.tecnologies && (
                    <Projects.Tecnologies>
                      {project.tecnologies.map((tecnologie, index) => (
                        <Projects.Tecnologie
                          key={index}
                          tecnologie={tecnologie}
                        />
                      ))}
                    </Projects.Tecnologies>
                  )}
                  <Projects.Details>
                    <Projects.Tags>
                      {project.tags &&
                        project.tags.map((tag, index) => (
                          <Projects.Tag key={index}>{tag}</Projects.Tag>
                        ))}
                    </Projects.Tags>
                  </Projects.Details>
                  <Projects.Buttons>
                    {project.link && (
                      <Projects.View href={project.link}>
                        {t("projects.view-project")}{" "}
                        <IoArrowRedoOutline className="ms-2" />
                      </Projects.View>
                    )}
                    {project.code && (
                      <Projects.View className="xl:ms-auto" href={project.code}>
                        {t("projects.view-code")}{" "}
                        <IoCodeSlashOutline className="ms-2" />
                      </Projects.View>
                    )}
                  </Projects.Buttons>
                </Projects.Content>
              </Projects.Item>
            ))}
          </Projects.Root>
        </div>

        <div className="hidden max-w-[320px] min-w-72 w-80 h-[90vh] rounded-md xl:flex flex-col items-center justify-start p-6 bg-white dark:bg-neutral-900 shadow-[0px_0px_8px_2px_rgba(0,0,0,0.4)] dark:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.1)]">
          <div className="flex flex-col items-center justify-start gap-y-4 w-full mt-8">
            <p className="text-lg font-bold dark:text-white">
              {t("projects.tecnologies")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tecnologies.map((tecnologie, index) => (
                <button
                  key={index}
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
                  className={`px-4 py-2 transition duration-300 ease-in-out dark:bg-black dark:text-white bg-neutral-600 text-white rounded text-center ${selectedTecnologies.includes(tecnologie) ? "!bg-cyan-500" : ""}`}
                >
                  {formatText(tecnologie)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-y-4 w-full mt-8">
            <p className="text-lg font-bold dark:text-white">Tags</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (selectedTags.includes(tag)) {
                      setSelectedTags(
                        selectedTags.filter((item) => item !== tag),
                      );
                    } else {
                      setSelectedTags([...selectedTags, tag]);
                    }
                  }}
                  className={`px-4 py-2 transition duration-300 ease-in-out dark:bg-black dark:text-white bg-neutral-600 text-white rounded text-center ${selectedTags.includes(tag) ? "!bg-cyan-500" : ""}`}
                >
                  {formatText(tag)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
