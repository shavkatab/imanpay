import cls from "./CategoriesSlider.module.scss";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { SamplePrevArrow, SampleNextArrow } from "../Arrows/Arrows";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { categories } from "./data";
import { RightArrowIcon } from "../Icons";
import { responsive } from "./data";
import Link from "next/link";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

export default function CategoriesSlider() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root} id="categoriesSlider">
      <Container className={cls.container}>
        <div className={cls.row}>
          <h2>{t("categories")}</h2>
          <div className={cls.slider}>
            <Slider
              {...{
                dots: false,
                infinite: true,
                speed: 500,
                lazyLoad: true,
                slidesToShow: 6,
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
              {categories.map(({ name, url }, i) => (
                <div key={"category" + i} className={cls.item}>
                  <Link href={`/catalog?category=${name}`}>
                    <a>
                      <div className={cls.card}>
                        <div className={cls.body}>
                          <p>{t(name)}</p>
                        </div>
                        <div className={cls.img}>
                          <Image
                            src={`/images/home/${url}`}
                            objectFit="contain"
                            layout="fill"
                          />
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
      <div className={cls.greenRow}>
        <Link href="/catalog">
          <a>
            <div className={cls.content}>
              <p>{t("catalog_magazines")}</p>
              <RightArrowIcon />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
