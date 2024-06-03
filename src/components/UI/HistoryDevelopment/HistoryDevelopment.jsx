import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./HistoryDevelopment.module.scss";
import { CheckIcon } from "../Icons";

export default function HistoryDevelopment() {
  const { t } = useTranslation("common");

  const titles = [
    "history_step_1",
    "history_step_2",
    "history_step_3",
    "history_step_4",
    "history_step_5",
  ];

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.titles}>
          <h3>{t("few_words_about_us")}</h3>
          <h2>{t("history_title")}</h2>
          <p>{t("history_descr")} </p>
        </div>

        <div className={cls.row}>
          <div className={cls.colFirst}>
            <p>2022</p>
          </div>
          <div className={cls.colSecond}>
            {titles.map((item) => (
              <div key={item} className={cls.content}>
                <CheckIcon />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t(item),
                  }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
