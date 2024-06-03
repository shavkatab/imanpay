import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { mapDefaults } from "utils/yandexMapUtils";
import { useRef, useState, createRef, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import cls from "./YandexMapMobile.module.scss";
import { Dialog } from "@mui/material";
import { useStyles } from "./styles";
import { CloseIcon } from "../Icons";
import PhoneIcon from "@mui/icons-material/Phone";

export default function YandexMapMobile({
  data,
  open,
  setOpen = () => {},
  setMerchant = () => {},
}) {
  const [yMaps, setYmaps] = useState(null);
  const { t } = useTranslation("common");
  let itemsRef = useRef([]);
  const listRef = useRef(null);
  const mapRef = useRef(null);
  const [active, setActive] = useState(false);
  const classes = useStyles();
  const merchants =
    data && data.length > 0
      ? data
          .map((item) =>
            item.addresses.map((el) => ({ ...el, number: item.number }))
          )
          .flat()
      : [];
  const [isMerchant, setIsMerchant] = useState(merchants[0]?.name);
  const [mapPosition, setMapPosition] = useState({
    center: [merchants[0]?.lat, merchants[0]?.long],
    zoom: 13,
  });

  const widthMap = mapRef && mapRef?.current?.container?.getSize()[0];
  const heightMap = mapRef && mapRef?.current?.container?.getSize()[1];

  itemsRef.current = merchants?.map((_) => createRef());

  // const itemsRef = Array.from({ length: merchants.length }, () => useRef());

  const handleShow = (i) => {
    itemsRef?.current[i]?.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const handlePlacemark = (item) => {
    setIsMerchant(item.name);
    setMapPosition((prev) => ({
      ...prev,
      center: [item.lat, item.long],
      zoom: 16,
    }));
  };

  const handleClose = () => {
    setOpen(false);
    setMerchant([]);
    setActive(false);
  };

  return (
    <Dialog
      className={classes.root}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={cls.dialog}>
        <div className={cls.header}>
          <span onClick={handleClose} className={cls.close}>
            <CloseIcon />
          </span>
          <p>{t("map_magazines")}</p>
        </div>
        <div className={cls.map} style={{ width: widthMap, height: heightMap }}>
          <YMaps>
            <Map
              onClick={(e) => (!e.current ? setActive(false) : "")}
              onLoad={(ymaps) => {
                setYmaps(ymaps);
              }}
              modules={[
                "multiRouter.MultiRoute",
                "coordSystem.geo",
                "geocode",
                "util.bounds",
              ]}
              instanceRef={mapRef}
              defaultState={mapDefaults}
              state={mapPosition}
              width="100%"
              height="100%"
            >
              <ZoomControl />
              {merchants.map((item, i) => (
                <Placemark
                  key={i}
                  onClick={() => {
                    handleShow(i);
                    handlePlacemark(item);
                    setActive(true);
                  }}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/icons/map.svg",
                    iconImageSize: [36, 36],
                    iconImageOffset: [0, 0],
                  }}
                  geometry={[item?.lat, item?.long]}
                />
              ))}
            </Map>
          </YMaps>
        </div>
        <div
          ref={listRef}
          className={`${cls.list} ${active ? cls.closedList : ""}`}
        >
          <div className={cls.head}>
            <div className={cls.green}>
              <span></span>
            </div>
          </div>

          <div className={cls.menu}>
            {merchants.map((item, i) => (
              <div
                key={item?.name + i}
                onClick={() => {
                  handlePlacemark(item);
                }}
                className={cls.merchant}
              >
                <p
                  ref={itemsRef.current[i]}
                  className={`${
                    isMerchant === item?.name ? cls.activeTitle : ""
                  }`}
                >
                  {item?.name} <br />
                  <span>
                    <PhoneIcon />
                    <a href={`tel:${item?.number}`}>{item?.number}</a>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
