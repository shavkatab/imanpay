import { Container, Dialog, Button } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./CatalogMobile.module.scss";
import ReactSlick from "react-slick";
import { useEffect, useState, useRef } from "react";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import useDebounce from "utils/useDebounce";
import { useStyles } from "./styles";
import { merchants } from "utils/data";
import { categories, markups, formats } from "../CatalogDesktop/data";
import { CloseIcon, FilterIcon, MapIcon } from "../Icons";
import YandexMapMobile from "./YandexMapMobile";
import Router from "next/router";
import { useRouter } from "next/router";

export default function CatalogMobile({ state, setState = () => {} }) {
  const { t } = useTranslation("common");
  const rootRef = useRef(null);
  const [newState, setNewState] = useState([]);
  const [category, setCategory] = useState("");
  const [markup, setMarkup] = useState(null);
  const [format, setFormat] = useState("");
  const [open, setOpen] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const [merchant, setMerchant] = useState([]);
  const data = useDebounce(newState, 500);
  const router = useRouter();
  const classes = useStyles();

  const dividerFunc = (arr = [], n = 6) => {
    const res = [];
    let newArray = [];
    for (let i = 0; i < arr.length; i += n) {
      newArray = arr.slice(i, i + n);
      res.push(newArray);
    }
    setNewState(res);
  };

  const filterData = () => {
    const arr = merchants.filter((item) => {
      if (category && markup === 0 && format) {
        return (
          item.category === category &&
          item.markup === markup &&
          item.format === format
        );
      } else if (category && markup === 0) {
        return item.category === category && item.markup === markup;
      } else if (category && format) {
        return item.category === category && item.format === format;
      } else if (category) {
        return item.category === category;
      } else if (markup === 0) {
        return item.markup === markup;
      } else if (format) {
        return item.format === format;
      } else return item;
    });

    const withLogos = arr.filter((item) => item.logo);
    const withoutLogos = arr.filter((item) => !item.logo);
    const response = withLogos.concat(withoutLogos);
    setState(response);
  };

  const handleRoute = (name) => {
    Router.push(
      {
        pathname: "/catalog",
        query: { category: name },
      },
      undefined,
      { scroll: false }
    );
  };

  useEffect(() => {
    const hasCategory = router?.query?.category;
    if (hasCategory) {
      rootRef?.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      setCategory(hasCategory);
    }
  }, [router.query]);

  useEffect(() => {
    filterData();
  }, [category, markup, format]);

  useEffect(() => {
    dividerFunc(state, 6);
  }, [state]);

  return (
    <>
      <div ref={rootRef} className={cls.root}>
        <Container className={cls.container}>
          <h3>{t("categories")}</h3>
          <div className={cls.subtitles}>
            <div onClick={() => setOpen(true)} className={cls.title}>
              <FilterIcon />
              <p>{t("filter")}</p>
            </div>
            <div onClick={() => setOpenMap(true)} className={cls.title}>
              <MapIcon />
              <p>{t("map")}</p>
            </div>
          </div>
          <div className={cls.body}>
            <ReactSlick
              {...{
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                swipeToSlide: true,
                lazyLoad: true,
                appendDots: (dots) => {
                  return (
                    <MagicSliderDots
                      key={dots}
                      dots={dots}
                      numDotsToShow={4}
                      dotWidth={30}
                    />
                  );
                },
              }}
            >
              {data.length > 0 &&
                data.map((item, index) => (
                  <div key={index}>
                    <div className={cls.col}>
                      {item.map((el, i) => (
                        <div key={el.name} className={cls.card}>
                          <div
                            onClick={() => {
                              setOpenMap(true);
                              setMerchant([el]);
                            }}
                            className={cls.card_body}
                          >
                            {el.logo ? (
                              <img
                                src={`https://cdn.iman.uz/iman/${el.logo}`}
                                alt="catalog"
                              />
                            ) : (
                              <p>{el.name}</p>
                            )}
                          </div>
                          <div className={cls.card_content}>
                            <p>{el.name}</p>
                            <p>
                              {router.locale === "en"
                                ? t(el.category) + " store"
                                : router.locale === "ru"
                                ? "Магазин " + t(el.category)
                                : t(el.category) + " do'koni"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </ReactSlick>
          </div>
        </Container>
      </div>
      <Dialog
        className={classes.root}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cls.dialog}>
          <div className={cls.header}>
            <span onClick={() => setOpen(false)} className={cls.close}>
              <CloseIcon />
            </span>
            <p>{t("filter")}</p>
          </div>
          <div className={cls.body}>
            <div className={cls.filter}>
              {/* categories */}
              <p className={cls.name}>{t("categories")}</p>
              <div className={cls.titles}>
                {categories.map(({ name, value }) => (
                  <p
                    key={name + value}
                    onClick={() => {
                      setCategory(value);
                      handleRoute(value);
                    }}
                    className={`${cls.title} ${
                      category === value ? cls.activeTitle : ""
                    }`}
                  >
                    {t(name)}
                  </p>
                ))}
              </div>
              {/* format */}
              <p className={cls.name}>{t("format")}</p>
              <div className={cls.titles}>
                {formats.map(({ name, value }) => (
                  <div
                    key={name + value}
                    onClick={() => {
                      setFormat(value);
                    }}
                    className={cls.check}
                  >
                    <div
                      className={`${cls.checkBox} ${
                        format === value ? cls.activeCheck : ""
                      }`}
                    />
                    <p
                      className={`${cls.title} ${
                        format === value ? cls.activeTitle : ""
                      }`}
                    >
                      {t(name)}
                    </p>
                  </div>
                ))}
              </div>
              {/* markup */}
              <p className={cls.name}>{t("markup")}</p>
              <div className={cls.titles}>
                {markups.map(({ name, value }) => (
                  <div
                    key={name + value}
                    onClick={() => {
                      setMarkup(value);
                    }}
                    className={cls.check}
                  >
                    <div
                      className={`${cls.checkBox} ${
                        markup === value ? cls.activeCheck : ""
                      }`}
                    />
                    <p
                      className={`${cls.title} ${
                        markup === value ? cls.activeTitle : ""
                      }`}
                    >
                      {t(name)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Button onClick={() => setOpen(false)} className={cls.btn}>
              {t("primenit")}
            </Button>
          </div>
        </div>
      </Dialog>
      {openMap && (
        <YandexMapMobile
          data={merchant.length > 0 ? merchant : state}
          open={openMap}
          setMerchant={setMerchant}
          setOpen={setOpenMap}
        />
      )}
    </>
  );
}
