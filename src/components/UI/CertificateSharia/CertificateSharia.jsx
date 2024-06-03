import { Container } from "@mui/material";
import ReactSlick from "react-slick";
import cls from "./CertificateSharia.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { responsive } from "./data";
import { SamplePrevArrow, SampleNextArrow } from "../Arrows/Arrows";

export default function CertificateSharia() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const data = [
    {
      img: `/images/sharia/fatwa-${router.locale}.png`,
    },
    {
      img: `/images/sharia/fatwa2-${router.locale}.png`,
    },
  ];

  return (
    <div className={cls.root} id="history">
      <Container className={cls.container}>
        <div>
          <div className={cls.content}>
            <h2>{t("certificate_title")}</h2>
            <p>{t("certificate_descr")} </p>
          </div>

          <div className={cls.row}>
            <ReactSlick
              {...{
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                responsive,
                swipeToSlide: true,
                lazyLoad: true,
                nextArrow: <SampleNextArrow styles={cls.styleNext} />,
                prevArrow: <SamplePrevArrow styles={cls.stylePrev} />,
              }}
            >
              {data.map((item, index) => (
                <div key={index}>
                  <div key={index} className={cls.col}>
                    <div className={cls.card}>
                      <img src={item.img} alt="certificate" />
                    </div>
                  </div>
                </div>
              ))}
            </ReactSlick>
          </div>
        </div>
      </Container>
    </div>
  );
}
