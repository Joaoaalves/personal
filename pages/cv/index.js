import Layout from "@/layouts/main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const pdfURL = '/curriculo.pdf';
export default function CV() {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1 className="text-3xl text-center">{t("cv.title")}</h1>
      <div className="flex justify-center mt-4 lg:mt-12">
        <iframe src={`${pdfURL}#toolbar=0`} width="800" height="1000" className="hidden lg:block"></iframe>
        <iframe src={`${pdfURL}#toolbar=0`} width="300" height="600" className="flex lg:hidden bg-red-500"></iframe>
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
