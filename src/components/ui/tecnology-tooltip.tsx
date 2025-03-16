import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface TecnologyTooltipProps {
    Icon: IconType;
    content: string;
}

export default function TecnologyTooltip({
    Icon,
    content,
}: TecnologyTooltipProps) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger>
                    <div className="transition-all duration-500 hover:bg-secondary w-8 h-8 rounded flex items-center justify-center">
                        <Icon className="text-white text-3xl" />
                    </div>
                </TooltipTrigger>
                <TooltipContent className="bg-black shadow-secondary/20 shadow-lg text-white font-bold">
                    <span>{content}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export type TecnologyTooltipType = ({
    Icon,
    content,
}: TecnologyTooltipProps) => ReactNode;
