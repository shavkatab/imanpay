import cls from "./Footer.module.scss";
import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { InstagramLogo, FacebookLogo, TelegramLogo } from "../Icons";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className={cls.footer}>
      <Container className={cls.container}>
        <div className={cls.row}>
          <div className={cls.box}>
            <div className={cls.social}>
              <div>
                <a
                  href={"https://www.instagram.com/imanpay.uz/"}
                  target="_blank"
                >
                  <InstagramLogo />
                </a>
              </div>
              <div>
                <a href={"https://www.facebook.com/imanpayuz"} target="_blank">
                  <FacebookLogo />
                </a>
              </div>
              <div>
                <a href={"https://t.me/IMANUZB"} target="_blank">
                  <TelegramLogo />
                </a>
              </div>
            </div>
            <p>
              <a href="mailto:info@iman.uz" target="_blank">
                info@iman.uz
              </a>
            </p>
            <a href={`tel:+998781130030`}>
              <p>+998 78 113 00 30</p>
            </a>
            <p style={{ textAlign: "center" }}>
              © 2018-2022. IMAN Group Ltd. | {t("all_rights_reserved")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
