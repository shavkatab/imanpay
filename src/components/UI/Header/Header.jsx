import cls from "./Header.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import Headroom from "react-headroom";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { changeContent } from "utils/changeContent";
import Language from "./Language";

import { ImanLogo, FacebookLogo, InstagramLogo, TelegramLogo } from "../Icons";
import RightMenu from "../RightMenu/RightMenu";

export function Header() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = () => {
    window?.scrollTo({ top: 5000 });
  };

  return (
    <Headroom>
      <header className={cls.header}>
        <Container className={cls.container}>
          <div className={cls.row}>
            <Link href={"/"}>
              <a>
                <ImanLogo />
              </a>
            </Link>

            <div className={cls.center}>
              <ul className={cls.list}>
                <li className={cls.item}>
                  <Link href={"/catalog"}>
                    <a className={cls.listItem}>{t("shops")}</a>
                  </Link>
                </li>

                <li className={cls.item}>
                  <Link href={"/for-business"}>
                    <a className={cls.listItem}>{t("for_business")}</a>
                  </Link>
                </li>

                <li className={cls.item}>
                  <Link href="/">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={cls.listItem}
                    >
                      {t("more")}{" "}
                      <ExpandMoreIcon style={{ marginLeft: "6px" }} />
                    </a>
                  </Link>
                  <div className={cls.childList}>
                    <ul>
                      <li className={cls.childItems}>
                        <Link href="/about-us">
                          <a>{t("about_us")}</a>
                        </Link>
                      </li>
                      <li className={cls.childItems}>
                        <Link href="/sharia">
                          <a>{t("sharia_compliance")}</a>
                        </Link>
                      </li>
                      <li className={cls.childItems}>
                        <Link href="/public-offer">
                          <a>{t("public_offer")}</a>
                        </Link>
                      </li>
                      <li className={cls.childItems}>
                        <Link href="/payment">
                          <a>{t("payment_types")}</a>
                        </Link>
                      </li>
                      <li className={cls.childItems}>
                        <a
                          href={`https://imaninvest.com/${router.locale}`}
                          target="_blank"
                        >
                          {t("become_investor")}
                        </a>
                      </li>
                      <li className={cls.childItems}>
                        <a
                          onClick={() => {
                            scrollTo();
                          }}
                        >
                          {t("contacts")}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className={cls.right}>
              <ul className={cls.list}>
                <li className={`${cls.item} ${cls.lastItem}`}>
                  <a
                    onClick={(e) => e.preventDefault()}
                    className={cls.listItem}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {/* <div className={cls.lang}>
                      {router.locale && (
                        <img
                          src={changeContent(
                            router.locale,
                            "/icons/eng.jpg",
                            "/icons/rus.jpg",
                            "/icons/uzb.png"
                          )}
                          alt="language"
                        />
                      )}
                    </div> */}
                    <span className={cls.langName}>
                      {changeContent(
                        router.locale,
                        t("english"),
                        t("russian"),
                        t("uzbek")
                      )}
                    </span>
                  </a>

                  <div className={cls.childList}>
                    <ul>
                      <li className={cls.childItems}>
                        <Link
                          scroll={false}
                          href={router.pathname}
                          locale={"en"}
                        >
                          <a> {t("english")}</a>
                        </Link>
                      </li>
                      <li className={cls.childItems}>
                        <Link
                          scroll={false}
                          href={router.pathname}
                          locale={"ru"}
                        >
                          <a> {t("russian")}</a>
                        </Link>
                      </li>
                      <li className={cls.childItems}>
                        <Link
                          scroll={false}
                          href={router.pathname}
                          locale={"uz"}
                        >
                          <a> {t("uzbek")}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
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
                  <a
                    href={"https://www.facebook.com/imanpayuz"}
                    target="_blank"
                  >
                    <FacebookLogo />
                  </a>
                </div>
                <div>
                  <a href={"https://t.me/IMANUZB"} target="_blank">
                    <TelegramLogo />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.mobile}>
            <div className={cls.brand}>
              <Link href={"/"}>
                <a>
                  <ImanLogo />
                </a>
              </Link>
            </div>

            <Language />

            <img
              className={cls.hamburger}
              onClick={() => setIsOpen(true)}
              src="/icons/hamburger.svg"
              alt="hamburger"
            />
          </div>
        </Container>
        <RightMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </Headroom>
  );
}
