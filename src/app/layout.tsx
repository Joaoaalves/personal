import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

// Fonts
import { Poppins } from "next/font/google";
import { Silkscreen } from "next/font/google";
import Head from "next/head";

const font = Poppins({
    variable: "--font-primary",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nameFont = Silkscreen({
    variable: "--font-name",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "João Alves - FullStack Web Developer",
    description:
        "Full Stack Web Developer with experience in React, Next.js, Node.js, Express, MongoDB, MySQL, and other technologies.",
    openGraph: {
        url: "https://joao-alves.com/",
        type: "website",
        locale: "en",
    },
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: "en" | "pt-BR"; [key: string]: string };
}>) {
    const { locale } = params;
    const messages = await getMessages();

    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="João Alves" />
            </Head>
            <body
                className={`${font.variable} ${nameFont.variable} antialiased overflow-x-hidden bg-black scroll-smooth font-primary`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
