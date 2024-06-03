import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./CatalogBanner.module.scss";
import Input from "../Input";
import { SearchIcon } from "../Icons";
import { merchants } from "utils/data";

export default function CatalogBanner({ setState = () => {} }) {
  const { t } = useTranslation("common");
  const handleSearch = (e) => {
    const filteredData = merchants.filter((elm) =>
      elm.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setState(filteredData);
  };

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <div className={cls.desktop}>
          <div className={cls.colFirst}>
            <h1>{t("catalog_title")}</h1>
            <p>{t("catlog_descr")}</p>
            <div className={cls.input}>
              <Input
                onChange={handleSearch}
                placeholder={t("search_magazine")}
                startAdornment={<SearchIcon />}
                className={cls.search}
              />
            </div>
          </div>
          <div className={cls.colSecond}>
            <div className={cls.images}>
              <img
                className={cls.firtsImg}
                src="/images/catalog/first.svg"
                alt="first"
              />
              <img
                className={cls.secondImg}
                src="/images/catalog/second.svg"
                alt=""
              />
              <img
                className={cls.thirdImg}
                src="/images/catalog/third.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Responsive */}
        <div className={cls.mobile}>
          <h3>{t("catalog_title")}</h3>
          <p>{t("catlog_descr")}</p>
          <div className={cls.body}>
            <div className={cls.images}>
              <img
                className={cls.first}
                src="/images/catalog/first.svg"
                alt="first"
              />
              <img
                className={cls.second}
                src="/images/catalog/second.svg"
                alt=""
              />
              <img
                className={cls.third}
                src="/images/catalog/third.svg"
                alt=""
              />
            </div>
          </div>
          <div className={cls.input}>
            <Input
              onChange={handleSearch}
              placeholder={t("search_magazine")}
              startAdornment={<SearchIcon />}
              className={cls.search}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
