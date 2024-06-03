import { useState, useEffect, useRef } from "react";
import { Container, Pagination, PaginationItem, Dialog } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./CatalogDesktop.module.scss";
import { categories, markups, formats } from "./data";
import { MapIcon } from "../Icons";
import { merchants } from "utils/data";
// import { RightArrowIcon } from "../Icons";
import { useStyles, useStylesPagination } from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import YandexMap from "./YandexMap";
import { useRouter } from "next/router";
import Router from "next/router";
import { CloseIcon } from "../Icons";

export default function CatalogDesktop({ state, setState = () => {} }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const rootRef = useRef(null);
  const [category, setCategory] = useState("");
  const [markup, setMarkup] = useState(null);
  const [format, setFormat] = useState("");
  const [pageSize, setPageSize] = useState(9);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [merchant, setMerchant] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const classPagination = useStylesPagination();

  useEffect(() => {
    setData(state.slice(0, pageSize));
  }, [state]);

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

  const handleChange = (_, value) => {
    setPage(value);
    setData(state.slice(0 + pageSize * (value - 1), pageSize * value));
  };

  const handleClose = () => {
    setOpen(false);
    setMerchant([]);
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

  useEffect(() => {
    filterData();
  }, [category, markup, format]);

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

  return (
    <>
      <div className={cls.root}>
        <Container className={cls.container}>
          <div className={cls.row}>
            {/* SIDEBAR */}
            <div className={cls.left}>
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
                      console.log("value", value);
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
            {/* RIGHT CONTENT */}
            <div ref={rootRef} className={cls.right}>
              <div className={cls.rightTitle}>
                <div onClick={() => setOpen(true)} className={cls.mapTitle}>
                  <p>{t("see_map")}</p>
                  <MapIcon />
                </div>
              </div>
              <div className={cls.body}>
                {data && data.length > 0 ? (
                  data.map((item, i) => (
                    <div key={i} className={cls.card}>
                      <div
                        onClick={() => {
                          setMerchant([item]);
                          setOpen(true);
                        }}
                        className={cls.card_body}
                      >
                        {item.logo ? (
                          <img
                            src={`https://cdn.iman.uz/iman/${item.logo}`}
                            alt="catalog"
                          />
                        ) : (
                          <h3>{item.name}</h3>
                        )}
                      </div>
                      <div className={cls.card_content}>
                        <p>{item.name}</p>
                        <p>
                          {router.locale === "en"
                            ? t(item.category) + " store"
                            : router.locale === "ru"
                            ? "Магазин " + t(item.category)
                            : t(item.category) + " do'koni"}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={cls.notAvailable}>
                    <h3>{t("information is not available")}</h3>
                  </div>
                )}
              </div>
              <Pagination
                size="large"
                hidePrevButton
                className={`${cls.pagination} ${classPagination.root}`}
                count={Math.ceil(state.length / pageSize)}
                page={page}
                onChange={handleChange}
                renderItem={(item) => (
                  <PaginationItem
                    components={{ next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </div>
          </div>
        </Container>
        <div className={cls.greenRow}></div>
      </div>
      <Dialog
        className={classes.root}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cls.dialog}>
          <span onClick={handleClose} className={cls.close}>
            <CloseIcon />
          </span>
          <YandexMap data={merchant.length > 0 ? merchant : state} />
        </div>
      </Dialog>
    </>
  );
}
