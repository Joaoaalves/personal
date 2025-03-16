"use client";
import React, { Fragment } from "react";
import { useTranslations } from "next-intl";
import { getSkills } from "@/data/skills";
import SkillGroup from "../ui/custom/skill/SkillGroup";
import SkillGroupMobile from "../ui/custom/skill/SkillGroupMobile";

export function Skills() {
    const t = useTranslations("skills");
    const skills = getSkills(t);

    return (
        <section
            id="skills"
            className="w-screen flex flex-col items-center gap-y-12"
        >
            <div className="w-full flex flex-col items-start lg:items-end px-8 md:px-12 xl:px-48">
                <h2 className="text-white text-6xl font-bold mt-12">
                    {t("title")}
                </h2>
                <p className="text-neutral-300 text-sm md:text-lg max-w-4xl text-start lg:text-end mt-2">
                    {t("subtitle")}
                </p>
            </div>

            {skills.map((skill, index) => (
                <Fragment key={`skill-${index}`}>
                    <SkillGroup
                        title={skill.title}
                        paragraph={skill.paragraph}
                        tabs={skill.content}
                        direction={index % 2 === 0 ? "left" : "right"}
                        shadowColor="#AD003000"
                        src={`/images/skills/skill-${index + 1}.png`}
                    />
                    <SkillGroupMobile
                        key={`skill-mobile-${index}`}
                        title={skill.title}
                        paragraph={skill.paragraph}
                        tabs={skill.content}
                        shadowColor="#AD003000"
                        icon={skill.Icon}
                    />
                </Fragment>
            ))}
        </section>
    );
}
