import { Button, Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./NewWaySell.module.scss";
import Image from "next/image";
import { useWindowWidth } from "hooks/useWindowWith";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NewWaySell() {
  const { t } = useTranslation("common");
  const width = useWindowWidth();
  const router = useRouter();

  const scrollTo = () => {
    window?.scrollTo({ top: 3150 });
  };

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.row}>
          <div className={cls.colFirst}>
            <h1>{t("new_way_sell")}</h1>
            <p>{t("iman_merchant_descr")}</p>
            <div className={cls.buttons}>
              <Link href="/">
                <a>
                  <Button>{t("how_its_work")}</Button>
                </a>
              </Link>
              {/* <Link href="/for-business/#become-partner">
                <a> */}
              <Button onClick={scrollTo}>{t("become_partner_1")}</Button>
              {/* </a>
              </Link> */}
            </div>
          </div>
          <div className={cls.colSecond}>
            <div className={cls.img}>
              <Image
                src={`/images/business/sell${router.locale}.png`}
                alt="banner"
                width={width > 768 ? 302 : 238}
                height={width > 768 ? 653 : 515}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
