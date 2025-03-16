import ProjectCard from "@/components/projects/project-card";
import ResizableImage from "@/components/ui/custom/resizable-image";

export function getTimelineData(t: (key: string) => string) {
    return [
        {
            title: t("item-1.title"),
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        {t("item-1.paragraph")}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <ProjectCard
                            src="/images/projects/DoctorS.png"
                            title={t("item-1.doctorS.title")}
                            description={t("item-1.doctorS.description")}
                            repo={
                                "https://github.com/fga-eps-mds/2020.1-DoctorS-Bot"
                            }
                            buttonText={t("viewCode")}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: t("item-2.title"),
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-lg font-normal mb-4">
                        {t("item-2.paragraph")}
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-lg">
                            {t("item-2.certifications.network-specialist")}
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-lg">
                            {t(
                                "item-2.certifications.cybersecurity-essentials",
                            )}
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-lg">
                            {t("item-2.certifications.bootcamp")}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <ResizableImage
                            src={"/images/certifications/cnss.jpg"}
                            title="Image from project 1"
                            delay={0.2}
                        />
                        <ResizableImage
                            src={"/images/certifications/cybersecurity.jpg"}
                            title="Image from project 1"
                            delay={0.2}
                        />
                        <ResizableImage
                            src={
                                "/images/certifications/Fundamento-Cybersecurity.jpg"
                            }
                            title="Image from project 1"
                            delay={0.2}
                        />
                        <ResizableImage
                            src={
                                "/images/certifications/bootcamp-cybersecurity.jpg"
                            }
                            title="Image from project 1"
                            delay={0.2}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: t("item-3.title"),
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        {t("item-3.paragraph")}
                    </p>
                    <div className="grid grid-cols-1">
                        <ProjectCard
                            src="/images/projects/htd.jpg"
                            title={t("item-3.htd.title")}
                            description={t("item-3.htd.description")}
                            repo={"https://github.com/Joaoaalves/hit-the-dot"}
                            buttonText={t("viewCode")}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: t("item-4.title"),
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        {t("item-4.paragraph")}
                    </p>
                </div>
            ),
        },
        {
            title: t("item-5.title"),
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        {t("item-5.paragraph")}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <ProjectCard
                            src="/images/projects/instituto-panapana.svg"
                            title={t("item-5.instituto.title")}
                            description={t("item-5.instituto.description")}
                            repo="http://cursos.institutopanapana.org.br/"
                            buttonText={t("viewCode")}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: t("item-6.title"),
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        {t("item-6.paragraph")}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <ProjectCard
                            src="/images/projects/AILIB.jpg"
                            title={t("item-6.ailib.title")}
                            description={t("item-6.ailib.description")}
                            repo="https://github.com/Joaoaalves/ailib"
                            buttonText={t("viewCode")}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: t("item-7.title"),
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        {t("item-7.paragraph")}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <ProjectCard
                            src="/images/projects/kairos.svg"
                            title={t("item-7.kairos.title")}
                            description={t("item-7.kairos.description")}
                            repo={"https://github.com/Joaoaalves/hit-the-dot"}
                            buttonText={t("viewCode")}
                            imageClassName="object-contain bg-white invert px-8"
                        />
                    </div>
                </div>
            ),
        },
    ];
}
