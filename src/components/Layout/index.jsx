import { useEffect } from "react";
import { Footer } from "components/UI/Footer/Footer";
import { Header } from "components/UI/Header/Header";
import { loadYandexMap } from "utils/yandexMapUtils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Layout({ children }) {
  useEffect(() => {
    loadYandexMap("ru");
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
