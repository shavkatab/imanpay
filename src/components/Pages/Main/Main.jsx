import cls from "./Main.module.scss";
import MainBanner from "components/UI/MainBanner/MainBanner";
import BannerSlick from "components/UI/BannerSlick/BannerSlick";
import CategoriesSlider from "components/UI/CategoriesSlider/CategoriesSlider";
import FaqHome from "components/UI/FaqHome/FaqHome";

export function Main() {
  return (
    <main className={cls.main}>
      <MainBanner />
      <BannerSlick />
      <CategoriesSlider />
      <FaqHome />
    </main>
  );
}
