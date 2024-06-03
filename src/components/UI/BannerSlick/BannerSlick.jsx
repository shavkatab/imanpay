import cls from "./BannerSlick.module.scss";
import Image from "next/image";
import { SamplePrevArrow, SampleNextArrow } from "../Arrows/Arrows";
import Slider from "react-slick";

export default function BannerSlick() {
  const settings = {
    dots: true,
    lazyLoad: true,
    nextArrow: <SampleNextArrow styles={cls.styleNext} />,
    prevArrow: <SamplePrevArrow styles={cls.stylePrev} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={cls.root} id="bannerSlick">
      <Slider {...settings}>
        <div className={cls.slideItem}>
          <div className={cls.img}>
            <Image
              src="/images/airplain.jpg"
              alt="banner"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={cls.slideItem}>
          <div className={cls.img}>
            <Image
              src="/images/airplain.jpg"
              alt="banner"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
