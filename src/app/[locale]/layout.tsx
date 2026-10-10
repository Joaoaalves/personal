import type { Metadata, Viewport } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
    title: "João Alves — Fullstack Developer",
    description:
        "Fullstack developer based in Brasília, Brazil. End-to-end software with TypeScript, .NET and Python, and systems built on AI.",
    authors: [{ name: "João Alves" }],
    manifest: "/manifest.json",
    openGraph: {
        url: "https://joao-alves.com/",
        type: "website",
    },
};

export const viewport: Viewport = {
    themeColor: "#0a0a0a",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    if (!routing.locales.includes(locale as (typeof routing.locales)[number]))
        notFound();

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body
                className={`${GeistSans.variable} ${GeistMono.variable} bg-bg font-sans text-fg antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
