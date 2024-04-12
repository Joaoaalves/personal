import Layout from "@/layouts/main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function CV() {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1 className="text-3xl text-center">{t("cv.title")}</h1>
      <p className="mt-8">{t("cv.description")}</p>
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
