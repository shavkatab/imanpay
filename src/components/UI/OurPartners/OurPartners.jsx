import cls from "./OurPartners.module.scss";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { SamplePrevArrow, SampleNextArrow } from "../Arrows/Arrows";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { categories, responsive } from "./data";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

export default function OurPartners() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root} id="partners">
      <Container className={cls.container}>
        <div className={cls.row}>
          <h2>{t("our_partners")}</h2>
          <div className={cls.slider}>
            <Slider
              {...{
                dots: false,
                infinite: true,
                speed: 500,
                lazyLoad: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow styles={cls.styleNext} />,
                prevArrow: <SamplePrevArrow styles={cls.stylePrev} />,
                responsive,
                appendDots: (dots) => {
                  return (
                    <MagicSliderDots
                      dots={dots}
                      numDotsToShow={4}
                      dotWidth={30}
                    />
                  );
                },
              }}
            >
              {categories.map(({ name, url, isCover }, i) => (
                <div key={"partners" + i} className={cls.item}>
                  <div className={cls.card}>
                    <div className={cls.img}>
                      <Image
                        layout="fill"
                        objectFit={isCover ? "cover" : "contain"}
                        src={url}
                        alt={name}
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}
