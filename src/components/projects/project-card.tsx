import Link from "next/link";
import ResizableImage from "../ui/custom/resizable-image";

interface ProjectCardProps {
    src: string;
    title: string;
    description: string;
    buttonText: string;
    repo: string;
    imageClassName?: string;
}

export default function ProjectCard({
    src,
    title,
    description,
    repo,
    buttonText,
    imageClassName,
}: ProjectCardProps) {
    return (
        <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 gap-x-8 bg-neutral-900 rounded-xl p-3">
            <ResizableImage
                src={src}
                title={`Logo of ${title}`}
                delay={0.2}
                className={imageClassName}
            />
            <div className="flex flex-col items-start gap-y-4">
                <h4 className="text-neutral-200 font-bold text-xl mt-4">
                    {title}
                </h4>
                <p className="text-neutral-300 text-sm">{description}</p>

                <Link
                    href={repo}
                    target="_blank"
                    className="mt-auto bg-black text-white xl:text-lg rounded-xl w-40 py-2 text-center shadow-lg shadow-transparent hover:text-black hover:bg-primary hover:-translate-y-2 hover:translate-x-2 hover:shadow-primary/50 transition-all duration-400"
                >
                    {buttonText}
                </Link>
            </div>
        </div>
    );
}
