import cls from "./PublicOffer.module.scss";
import useTranslation from "next-translate/useTranslation";
import { SamplePrevArrow, SampleNextArrow } from "../Arrows/Arrows";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { RightArrowIcon } from "../Icons";
import { responsive } from "./data";
import Link from "next/link";
import { titles, descriptions } from "./data";

export default function PublicOffer() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root} id="public-offer">
      <Container className={cls.container}>
        <div className={cls.row}>
          <div className={cls.breadCrumb}>
            <Link href="/">
              <a>
                <p>Iman Pay</p>
              </a>
            </Link>
            <RightArrowIcon />
            <p>{t("more")}</p>
            <RightArrowIcon />
            <p>{t("public_offer")}</p>
          </div>
          <h2>{t("public_offer")}</h2>
          {descriptions.map((item) => (
            <p
              className={cls.description}
              key={item}
              dangerouslySetInnerHTML={{
                __html: t(item),
              }}
            />
          ))}
          <div className={cls.slider}>
            <Slider
              {...{
                dots: false,
                arrows: false,
                infinite: true,
                speed: 500,
                lazyLoad: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow styles={cls.styleNext} />,
                prevArrow: <SamplePrevArrow styles={cls.stylePrev} />,
                responsive,
              }}
            >
              {titles.map((item, i) => (
                <div key={"offer" + i} className={cls.item}>
                  <div className={cls.card}>
                    <h3>{t(item.title)}</h3>
                    <div className={cls.redirect}>
                      <a
                        target="_blank"
                        href={`${
                          item.url
                            ? `https://cdn.iman.uz/iman/${item.url}`
                            : "#"
                        }`}
                      >
                        <span>{t("familiarize")}</span>
                      </a>
                      <RightArrowIcon />
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
