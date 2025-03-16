import React, { useContext, createContext, useState } from "react";
import { getSkills } from "@/data/skills";

type SkillGroup = {
    title: string;
    value: string;
    content: React.JSX.Element;
    colors: string[];
};

interface SkillsGroupPropsContextProps {
    activeSkillGroup: SkillGroup;
    skillsGroups: SkillGroup[];
    setActiveSkillGroup: (skillGroup: SkillGroup) => void;
}

const SkillsGroupContext = createContext<
    SkillsGroupPropsContextProps | undefined
>(undefined);

export const useSkillGroupsContext = () => {
    const context = useContext(SkillsGroupContext);

    if (context === undefined) {
        throw new Error(
            "useSkillGroupsContext must be used within a SkillsGroupsProvider",
        );
    }
    return context;
};

export const SkillsGroupProvider = ({
    skills,
    children,
}: {
    skills: SkillGroup[];
    children: React.JSX.Element;
}) => {
    const skillsGroups = skills;
    const [activeSkillGroup, setActiveSkillGroup] = useState<SkillGroup>(
        skillsGroups[0],
    );

    return (
        <SkillsGroupContext
            value={{ activeSkillGroup, skillsGroups, setActiveSkillGroup }}
        >
            {children}
        </SkillsGroupContext>
    );
};
