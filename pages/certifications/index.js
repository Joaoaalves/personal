import Layout from "@/layouts/main";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Certification from "@/components/Certification";
import { certifications } from "@/lib/certifications";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 w-full px-6 lg:px-8">
        {certifications.map((certification, index) => {
              return (
                <Certification.Root key={`cert-${index}`}>
                  <Certification.Logo src={certification.instituionLogo} />
                  <Certification.Info>
                    <Certification.Title>{t(certification.title)}</Certification.Title>
                    <Certification.Institution>{t(certification.institution)}</Certification.Institution>
                    <Certification.Description text={t(certification.description)}/>
                    <Certification.Modal title={t(certification.title)} src={certification.certificate} text={t('certifications.viewCertificate')}/>
                  </Certification.Info>
                </Certification.Root>
              )
            })}
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


