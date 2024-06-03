import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./Collobration.module.scss";
import Image from "next/image";

export default function Collobration() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.row}>
          <div className={cls.col}>
            <h1>{t("collobration_brands")}</h1>
            <p>{t("brands_description")}</p>
          </div>
          <div className={cls.col}>
            <div className={cls.img}>
              <Image
                src="/images/business/brands.png"
                width={548}
                height={258}
                alt="brands"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
