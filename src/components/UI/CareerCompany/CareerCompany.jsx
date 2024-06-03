import { Container } from "@mui/material";
import cls from "./CareerCompany.module.scss";
import useTranslation from "next-translate/useTranslation";
import Fade from "react-reveal/Fade";
import { RightArrowIcon } from "../Icons";

export default function CareerCompany() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Fade center>
          <div className={cls.row}>
            <h2>{t("career title")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t("career text") }}></p>
          </div>
        </Fade>
      </Container>
      <div className={cls.greenRow}>
        {/* <div className={cls.content}>
          <p>{t("motivational_letter")}</p>
          <RightArrowIcon />
        </div> */}
      </div>
    </div>
  );
}
