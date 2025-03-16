import { socialNetworks } from "@/data/social-networks";
import { BackgroundGradient } from "../ui/card-background-gradient";
import { Input } from "../ui/input";
import ShimmerButton from "../ui/shimmer-button";
import { TextArea } from "../ui/textarea";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

export default function Contact() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [statusMessage, setStatusMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const t = useTranslations("contact");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatusMessage("");
        setIsLoading(true);
        setIsSuccess(false);

        if (!nameRef.current || !emailRef.current || !messageRef.current) {
            setStatusMessage(t("form.error"));
            setIsLoading(false);
            return;
        }

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        if (name === "" || email === "" || message === "") {
            setStatusMessage(t("form.fillAllFields"));
            setIsLoading(false);
            return;
        }

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });

        if (res.ok) {
            setIsSuccess(true);
            setStatusMessage(t("form.messageSent"));
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        } else {
            setStatusMessage(t("form.error"));
        }

        setIsLoading(false);
    };

    return (
        <section
            id="contact"
            className="min-h-screen w-screen bg-footer-gradient-purple !z-0"
        >
            <div className="min-h-screen w-screen bg-footer-gradient-pink h-full">
                <div className="min-h-screen w-screen h-full bg-grid-neutral-100/[0.02m] relative grid grid-cols-1 grid-rows-2 xl:grid-rows-[1fr_28px] xl:grid-cols-2 gap-12 items-center justify-center xl:px-48">
                    <div className="w-full">
                        <h2 className="mt-8 xl:mt-0 font-bold text-neutral-200 text-5xl lg:text-6xl mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center">
                            {t("title")}
                        </h2>
                        <div className="mx-4">
                            <BackgroundGradient className="!min-w-[min(400px,90vw)] p-6 bg-background rounded-[22px] z-[1]">
                                <h1 className="text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
                                    {t("form.title")}
                                </h1>

                                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative">
                                    {t("form.description")}
                                </p>
                                <form
                                    className="space-y-4 mt-8"
                                    onSubmit={handleSubmit}
                                >
                                    <p
                                        className="data-[success=true]:text-primary data-[success=false]:text-red-500 text-sm text-center"
                                        data-success={isSuccess}
                                    >
                                        {statusMessage}
                                    </p>
                                    <Input
                                        type="text"
                                        placeholder={t("form.name")}
                                        ref={nameRef}
                                        required
                                    />
                                    <Input
                                        type="email"
                                        placeholder={t("form.email")}
                                        ref={emailRef}
                                        required
                                    />
                                    <TextArea
                                        placeholder={t("form.message")}
                                        ref={messageRef}
                                        required
                                    />
                                    <ShimmerButton
                                        text={
                                            isLoading
                                                ? t("form.sendingMessage")
                                                : t("form.button")
                                        }
                                    />
                                </form>
                            </BackgroundGradient>
                        </div>
                    </div>
                    <div className="h-full px-8 xl:px-0 flex flex-col items-center justify-start">
                        <h2 className="z-10 font-bold text-neutral-200 text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 text-center mt-40">
                            {t("social.title")}
                        </h2>
                        <p className="z-10 font-medium text-neutral-400 mt-4 text-center mb-12">
                            {t("social.description")}
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {socialNetworks.map((network, index) => (
                                <Link
                                    key={index}
                                    href={network.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className=""
                                >
                                    <BackgroundGradient
                                        className="p-2 bg-background rounded-lg flex items-center gap-x-4 z-[1] -m-0.5 cursor-pointer"
                                        variant="small"
                                    >
                                        <network.Icon className="h-8 w-8 text-neutral-200" />
                                        <span className="2xl:text-xl text-neutral-200 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 text-center">
                                            {network.title}
                                        </span>
                                    </BackgroundGradient>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-white text-xs md:text-base px-3 text-center absolute bottom-0 py-4 font-name border-t-4 border-t-black/50 w-full">
                    Developed by João Alves with NextJS, TailwindCSS & Framer
                    Motion
                </p>
            </div>
        </section>
    );
}
