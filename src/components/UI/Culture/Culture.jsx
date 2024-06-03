import { Box, Container } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import ReactSlick from "react-slick";
import cls from "./Culture.module.scss";
import CultureItem from "./CultureItem";
import ContentCulture from "./ContentCulture";
import useTranslation from "next-translate/useTranslation";
import Fade from "react-reveal/Fade";
import { SamplePrevArrow, SampleNextArrow } from "../Arrows/Arrows";
import { responsive, cultures } from "./data";

export default function Culture() {
  const { t } = useTranslation("common");
  const [getData, setGetData] = useState("");
  const [activeCard, setActiveCard] = useState("team");
  const slider = useRef(null);

  function scroll() {
    if (slider === null) return 0;
    slider.current.slickNext();
  }

  useEffect(() => {
    scroll();
  }, [getData]);

  return (
    <div className={cls.root} id="culture">
      <Container className={cls.container}>
        <Fade center>
          <h2>{t("culture")}</h2>
          <Box className={cls.row}>
            <ReactSlick
              {...{
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive,
                swipeToSlide: true,
                variableWidth: true,
                nextArrow: <SampleNextArrow styles={cls.styleNext} />,
                prevArrow: <SamplePrevArrow styles={cls.stylePrev} />,
              }}
              ref={slider}
            >
              {cultures.map((data, index) => (
                <div key={index}>
                  <CultureItem
                    setActiveCard={setActiveCard}
                    activeCard={activeCard}
                    setGetData={setGetData}
                    data={data}
                    index={index}
                  />
                </div>
              ))}
            </ReactSlick>
          </Box>
        </Fade>
      </Container>
      <Box className={cls.container2}>
        <Container className={cls.content}>
          <ContentCulture data={getData} />
        </Container>
      </Box>
    </div>
  );
}
