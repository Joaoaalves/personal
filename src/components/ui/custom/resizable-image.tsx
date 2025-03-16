import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ResizableImage({
    src,
    title,
    delay = 0,
    className,
}: {
    src: string;
    title: string;
    delay?: number;
    className?: string;
}) {
    return (
        <Dialog>
            <DialogTrigger>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                    whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                    }}
                    transition={{
                        delay,
                        duration: 0.6,
                    }}
                    className="w-full relative z-40 h-72 overflow-hidden"
                >
                    <Image
                        src={src}
                        alt={title}
                        width={1920}
                        height={1080}
                        className={cn(
                            "rounded-lg object-cover min-h-72 w-auto absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2",
                            className,
                        )}
                    />
                </motion.div>
            </DialogTrigger>
            <DialogContent className="p-0 border-none w-auto bg-transparent">
                <DialogHeader>
                    <DialogTitle className="hidden"></DialogTitle>
                </DialogHeader>
                <Image
                    src={src}
                    alt={title}
                    width={1920}
                    height={1080}
                    className="rounded-lg object-cover h-auto w-full shadow-lg"
                />
            </DialogContent>
        </Dialog>
    );
}
