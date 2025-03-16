"use client";

const Square = ({ delay = 0.1 }: { delay?: number }) => {
    return (
        <div className="relative h-full w-full">
            <div className="absolute inset-0 hover:shadow-[inset_0px_0px_20px_#0ea5e950] transition-all duration-300">
                <div
                    className="h-full w-full bg-transparent animate-inner-glow"
                    style={{
                        animationDelay: `${delay}s`,
                    }}
                />
            </div>
        </div>
    );
};

export default Square;
