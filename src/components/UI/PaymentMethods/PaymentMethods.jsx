import cls from "./PaymentMethods.module.scss";
import useTranslation from "next-translate/useTranslation";
import { SamplePrevArrow, SampleNextArrow } from "../Arrows/Arrows";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { RightArrowIcon } from "../Icons";
import { responsive, titles } from "./data";
import Link from "next/link";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useRouter } from "next/router";

export default function PaymentMethods() {
  const { t } = useTranslation("common");
  const router = useRouter();

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
            <p>{t("payment_types")}</p>
          </div>
          <h2>{t("payment_types")}</h2>
          <p className={cls.description}>{t("payment_descr")}</p>
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
                    <VideoPlayer
                      source={`https://www.youtube.com/embed/${
                        item.url[router.locale]
                      }`}
                    />
                    <h3>{item.title}</h3>
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
