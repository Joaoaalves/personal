import Layout from "@/layouts/main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";
export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full px-6 lg:px-8">
        <div className="w-full mb-16">
          <h1 className="font-bold text-xl lg:text-3xl xl:text-4xl">
            João Alves
          </h1>
          <h2 className="font-bold text-xl mb-2 text-cyan-500 dark:text-cyan-500">
            FullStack Web Developer
          </h2>
          <hr className="mb-0 dark:border-neutral-800" />
        </div>
        <Introduction t={t} />
        <hr className="my-16 w-full dark:border-neutral-800" />
        <Skills t={t} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
