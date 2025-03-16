"use client";
import { cn } from "@/lib/utils";
import Square from "./Square";
import RNG from "@/lib/seedrandom";

export default function SquaresBackground({
    className,
}: {
    className?: string;
}) {
    const rng = new RNG(200);

    return (
        <div
            className={cn(
                "min-h-screen w-screen  bg-transparent absolute top-0 left-0",
                className,
            )}
        >
            <div className="absolute left-[-50%] -top-1/2 h-[200%] w-[200%]">
                <div className="grid h-full w-full grid-flow-row-dense grid-cols-[repeat(10,_minmax(24rem,_1fr))] -rotate-45">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center"
                        >
                            <Square delay={((rng.nextFloat() * 10) % 2) + 3} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
