import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { getTimelineData } from "@/data/timeline";
import { useTranslations } from "next-intl";

export function TimeLine() {
    const t = useTranslations("timeline");
    const data = getTimelineData(t);
    return (
        <section id="timeline" className="bg-transparent z-10">
            <Timeline data={data} />
        </section>
    );
}
