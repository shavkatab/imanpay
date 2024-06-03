import React, { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import cls from "./RightMenu.module.scss";
import { ImanLogo } from "../Icons";
import CloseIcon from "@mui/icons-material/Close";
import useTranslation from "next-translate/useTranslation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useStyles,
} from "./muStyles";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RightMenu({ isOpen, setIsOpen = () => {} }) {
  const classes = useStyles();
  const router = useRouter();
  const [expanded, setExpanded] = useState("");
  const { t } = useTranslation("common");

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setExpanded(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const toggleDrawer = () => (event) => {
    if (
      event?.type === "keydown" &&
      (event?.key === "Tab" || event?.key === "Shift")
    ) {
      return;
    }
    setIsOpen(false);
    setExpanded(false);
  };

  const scrollTo = () => {
    window?.scrollTo({ top: 5000 });
  };

  return (
    <Drawer
      className={classes.root}
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer()}
    >
      <div className={classes.list} role="presentation">
        <div className={cls.menu}>
          <div className={cls.topData}>
            <Link href={"/"}>
              <a>
                {" "}
                <ImanLogo />
              </a>
            </Link>
            <CloseIcon className={cls.clearIcon} onClick={toggleDrawer()} />
          </div>
          <div className={cls.item}>
            <span className={cls.title}>
              {" "}
              <Link locale={router.locale} href="/catalog">
                <a className={cls.listItem}>{t("shops")}</a>
              </Link>
            </span>
          </div>

          <div className={cls.item}>
            <span className={cls.title}>
              {" "}
              <Link locale={router.locale} href="/for-business">
                <a className={cls.listItem}>{t("for_business")}</a>
              </Link>
            </span>
          </div>

          <div className={cls.item}>
            <Accordion
              square
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                className={cls.acardion}
              >
                <span className={cls.title}>
                  <a className={cls.listItem}>{t("more")}</a>
                </span>
                <ExpandMoreIcon />
              </AccordionSummary>
              <AccordionDetails>
                <Link locale={router.locale} href="/about-us">
                  <a>{t("about_us")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link locale={router.locale} href="/sharia">
                  <a onClick={toggleDrawer()}>{t("sharia_compliance")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link locale={router.locale} href="/public-offer">
                  <a onClick={toggleDrawer()}>{t("public_offer")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                {" "}
                <Link locale={router.locale} href="/payment">
                  <a onClick={toggleDrawer()}>{t("payment_types")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <a
                  href="https://imaninvest.com"
                  onClick={toggleDrawer()}
                  target="_blank"
                >
                  {t("become_investor")}
                </a>
              </AccordionDetails>
              <AccordionDetails>
                <a
                  onClick={() => {
                    toggleDrawer()();
                    scrollTo();
                  }}
                >
                  {t("contacts")}
                </a>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
