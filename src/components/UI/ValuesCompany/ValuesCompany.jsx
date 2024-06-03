import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./ValuesCompany.module.scss";
import { Fade } from "react-reveal";

export default function ValuesCompany() {
  const { t } = useTranslation("common");

  const titles = [
    {
      title: "value_step_title_1",
      decription: "value_step_descr_1",
      url: "/images/about/value1.svg",
    },
    {
      title: "value_step_title_2",
      decription: "value_step_descr_2",
      url: "/images/about/value2.svg",
    },
    {
      title: "value_step_title_3",
      decription: "value_step_descr_3",
      url: "/images/about/value3.svg",
    },
    {
      title: "value_step_title_4",
      decription: "value_step_descr_4",
      url: "/images/about/value4.svg",
    },
  ];

  return (
    <div className={cls.root}>
      <Fade center>
        <Container className={cls.container}>
          <h2>{t("value_title")}</h2>
          <div className={cls.row}>
            {titles.map((item, i) => (
              <div key={i} className={cls.card}>
                <p>{t(item.title)}</p>
                <p>{t(item.decription)}</p>
                <img className={cls.img} src={item.url} alt={item.title} />
              </div>
            ))}
          </div>
        </Container>
      </Fade>
    </div>
  );
}
