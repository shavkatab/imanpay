import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./SalesIncrease.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SalesIncrease() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.row}>
          <div className={cls.colFirst}>
            <h1>{t("sales_increase")}</h1>
            <div className={cls.mobileBanner}>
              <div className={cls.img}>
                <Image
                  src={`/images/business/saleMobile${router.locale}.png`}
                  layout="fill"
                  alt="sale"
                />
              </div>
            </div>
            <p>{t("sales_increase_descr")}</p>
          </div>
          <div className={cls.colSecond}>
            <div className={cls.img}>
              <Image
                src={`/images/business/sale${router.locale}.png`}
                layout="fill"
                alt="sale"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
