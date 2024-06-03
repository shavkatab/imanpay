import React, { useState } from "react";
import router from "next/router";
import Link from "next/link";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import cls from "./FaqHome.module.scss";
import useTranslation from "next-translate/useTranslation";
import { VectorIcon } from "../Icons";
import { accordianData } from "./faqData";
import { useStyles } from "./muiStyles";

export default function FaqHome() {
  const { t } = useTranslation("faq");
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.row}>
          <h2>{t("you_can_ask")}</h2>
          <div className={cls.accordian}>
            <div className={classes.root}>
              {accordianData?.map((elm, index) => (
                <Accordion
                  expanded={expanded === elm.title}
                  key={index}
                  onChange={handleChange(elm.title)}
                >
                  <AccordionSummary
                    expandIcon={<VectorIcon />}
                    aria-controls={elm.controls}
                    id={elm.id}
                  >
                    <Typography className={cls.title}>
                      {t(elm?.title)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className={cls.content}
                      dangerouslySetInnerHTML={{
                        __html: t(elm?.content),
                      }}
                    ></Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
          <Link href="/faq">
            <a>
              <Button className={cls.button}>{t("more_view")}</Button>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
}
