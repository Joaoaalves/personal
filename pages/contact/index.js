import Layout from "@/layouts/main";
import ContactForm from "@/components/ContactForm";
import { PiHandWavingThin } from "react-icons/pi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Button from "@/components/Button";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1 className="text-3xl mb-8 flex gap-x-4 font-bold dark:font-thin text-black dark:text-white">
        {t("contact.title")} <PiHandWavingThin />
      </h1>
      <div className="flex flex-col items-center xl:flex-row xl:items-start justify-center w-full gap-x-8 p-8 2xl:px-16">
        <ContactForm />
        <div className="flex flex-col items-center text-center w-2/5 mt-16 xl:mt-0 xl:ms-auto">
          <h2 className="text-2xl dark:text-white font-normal">
            {t("contact.socialnetworks")}
          </h2>

          <div className="flex flex-col items-center mt-8 gap-y-4">
            <Button href="https://github.com/Joaoaalves">
              <IoLogoGithub />
              <span>Github</span>
            </Button>
            <Button href="https://www.linkedin.com/in/jo%C3%A3o-vitor-alves-de-araujo-0b7b771b4/">
              <IoLogoLinkedin />
              <span>Linkedin</span>
            </Button>
            <div>
              <h3 className="text-xl mt-2 mb-4">E-mail</h3>
              <span className="font-bold">contact@joaoalves.me</span>
            </div>
          </div>
        </div>
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
