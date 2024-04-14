import { Html, Head, Main, NextScript } from "next/document";
import Analytics from "@/components/Analytics";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>

      </Head>
      <body className="scrool-smooth">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
