import Skill from "./Skill";
import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
const skills = [
  { tec: "Python", percentage: 90, color: "#31a742" },
  { tec: "React", percentage: 80, color: "#00a8ff" },
  { tec: "Flask", percentage: 75, color: "#00a8ff" },
  { tec: "MySQL", percentage: 70, color: "#00a8ff" },
  { tec: "Node.js", percentage: 70, color: "#00a8ff" },
  { tec: "MongoDB", percentage: 70, color: "#00a8ff" },
  { tec: "Express", percentage: 65, color: "#00a8ff" },
  { tec: "PHP", percentage: 60, color: "#ffde57" },
  { tec: "PostgreSQL", percentage: 60, color: "#ffde57" },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section
      className="w-full flex flex-col xl:flex-row items-start justify-between xl:pe-16"
      id="skills"
    >
      <div className="w-full xl:w-1/2">
        <h4 className="font-bold text-3xl mb-4">Skills</h4>
        <p className="mb-12">{t("skills.text")}</p>

        <h5 className="text-xl font-bold mb-4">{t("skills.frontend.title")}</h5>
        <p className="text-neutral-800 dark:text-neutral-400 mb-12">
          &emsp;&emsp;
          <Trans i18nKey="skills.frontend.text" />
        </p>

        <h5 className="text-xl font-bold mb-4">{t("skills.backend.title")}</h5>
        <p className="text-neutral-800 dark:text-neutral-400 mb-12">
          &emsp;&emsp;
          <Trans i18nKey="skills.backend.text" />
        </p>

        <h5 className="text-xl font-bold mb-4">{t("skills.devops.title")}</h5>
        <p className="text-neutral-800 dark:text-neutral-400 mb-12">
          &emsp;&emsp;
          <Trans i18nKey="skills.devops.text" />
        </p>

        <h5 className="text-xl font-bold mb-4">{t("skills.others.title")}</h5>
        <p className="text-neutral-800 dark:text-neutral-400 mb-12">
          &emsp;&emsp;
          <Trans i18nKey="skills.others.text" />
        </p>
      </div>
      <div className="flex flex-col items-center xl:items-end justify-center gap-y-6 w-full xl:w-1/3">
        <h4 className="text-2xl">{t("skills.proficiency")}</h4>
        {skills.map((skill, index) => (
          <Skill
            key={index}
            tec={skill.tec}
            percentage={skill.percentage}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
}
