import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./JointPromotion.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function JointPromotion() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.row}>
          <div className={cls.colFirst}>
            <div className={cls.img}>
              <Image
                src={`/images/business/promotion${router.locale}.png`}
                layout="fill"
                alt="sale"
              />
            </div>
          </div>
          <div className={cls.colSecond}>
            <h1>{t("join_promotion")}</h1>

            <p>{t("join_promotion_description")}</p>
            <div className={cls.mobileBanner}>
              <div className={cls.img}>
                <Image
                  src={`/images/business/promo${router.locale}.png`}
                  layout="fill"
                  alt="sale"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
