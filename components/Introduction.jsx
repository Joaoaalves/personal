import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import Timeline from "./Timeline";
const timeline = [
  {
    date: "tl.item1.date",
    title: "tl.item1.title",
    text: "tl.item1.text",
  },
  {
    date: "tl.item2.date",
    title: "tl.item2.title",
    text: "tl.item2.text",
  },
  {
    date: "tl.item3.date",
    title: "tl.item3.title",
    text: "tl.item3.text",
  },
  {
    date: "tl.item4.date",
    title: "tl.item4.title",
    text: "tl.item4.text",
  },
  {
    date: "tl.item5.date",
    title: "tl.item5.title",
    text: "tl.item5.text",
  },
  {
    date: "tl.item6.date",
    title: "tl.item6.title",
    text: "tl.item6.text",
  },
];

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <section
      className="w-full flex flex-col xl:flex-row items-start justify-between xl:pe-16"
      id="introduction"
    >
      <div className=" xl:w-1/2">
        <h4 className="font-bold text-3xl mb-4">
          {t("home.introduction.title")}
        </h4>
        <p className="mb-6">
          &emsp;&emsp;<Trans i18nKey="home.introduction.paragraph1" />
        </p>
        <p className="mb-6">
          &emsp;&emsp;<Trans i18nKey="home.introduction.paragraph2" />
        </p>
        <p className="mb-6">&emsp;&emsp;
          <Trans i18nKey="home.introduction.paragraph3" />
        </p>
        <p className="mb-6">&emsp;&emsp;
          <Trans i18nKey="home.introduction.paragraph4" />
        </p>
      </div>

      <Timeline.Root>
        {timeline.map((item, index) => (
          <Timeline.Item key={index}>
            <Timeline.Content>
              <Timeline.Date>{t(item.date)}</Timeline.Date>
              <Timeline.Title>{t(item.title)}</Timeline.Title>
              <Timeline.Text>{t(item.text)}</Timeline.Text>
            </Timeline.Content>
            <Timeline.Point />
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </section>
  );
}
