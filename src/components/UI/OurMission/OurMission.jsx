import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./OurMission.module.scss";
import { RightArrowIcon } from "../Icons";
import Link from "next/link";

export default function OurMission() {
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

          <p>{t("about_us")}</p>
        </div>
        <div className={cls.row}>
          <div className={cls.colFirst}>
            <h2>{t("our_mission_title")}</h2>
            <p>{t("our_mission_descr")}</p>
          </div>
          <div className={cls.colSecond}>
            <img src="/images/about/imanMobile.svg" alt="iman" />
          </div>
          <div className={cls.image}>
            <img src="/images/about/iman.svg" alt="iman" />
          </div>
        </div>
      </Container>
    </div>
  );
}
