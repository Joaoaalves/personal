import { Html, Head, Main, NextScript } from "next/document";

export const siteTitle = "João Alves - Desenvolvedor Web";
export const siteDescription = "Desenvolvedor Web Full Stack com experiência em React, Next.js, Node.js, Express, MongoDB, MySQL, entre outras tecnologias.";
export const metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
  image: "https://joaoalves.me/favicon.ico",
  url: "https://joaoalves.me",
  type: "website",
  locale: "pt_BR",}
};

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content="João Alves" />
      </Head>
      <body className="scrool-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
