import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./ShariahCompliance.module.scss";
import { RightArrowIcon } from "../Icons";
import Link from "next/link";

export default function ShariahCompliance() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.breadCrumb}>
          <Link href="/">
            <a>
              <p>Iman Pay</p>
            </a>
          </Link>
          <RightArrowIcon />
          <p>{t("more")}</p>
          <RightArrowIcon />

          <p>{t("sharia_compliance")}</p>
        </div>
        <div className={cls.row}>
          <div className={cls.colFirst}>
            <h2>{t("sharia_banner_title")}</h2>
            <p>{t("sharia_banner_descr_1")}</p>
            <p>{t("sharia_banner_descr_2")}</p>
          </div>
          <div className={cls.colSecond}>
            <img
              src="/images/sharia/sharia-background-mobile.svg"
              alt="sharia"
            />
          </div>
          <div className={cls.image}>
            <img src="/images/sharia/sharia-background.svg" alt="sharia" />
          </div>
        </div>
      </Container>
    </div>
  );
}
