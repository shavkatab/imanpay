import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { mapDefaults } from "utils/yandexMapUtils";
import { useRef, useState, createRef } from "react";
import cls from "./CatalogDesktop.module.scss";
import PhoneIcon from "@mui/icons-material/Phone";

export default function YandexMap({ data }) {
  const [yMaps, setYmaps] = useState(null);
  let itemsRef = useRef([]);
  const mapRef = useRef(null);
  const merchants =
    data && data.length > 0
      ? data
          .map((item) =>
            item.addresses.map((el) => ({ ...el, number: item.number }))
          )
          .flat()
      : [];
  const [isMerchant, setIsMerchant] = useState(merchants[0].name);
  const [mapPosition, setMapPosition] = useState({
    center: [merchants[0]?.lat, merchants[0]?.long],
    zoom: 12,
  });

  itemsRef.current = merchants?.map((_) => createRef());

  // const itemsRef = Array.from({ length: merchants.length }, () => useRef());

  const handleShow = (i) => {
    itemsRef?.current[i]?.current?.scrollIntoView({
      block: "start",
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

  return (
    <div className={cls.map}>
      <div className={cls.left}>
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
              className={`${isMerchant === item.name ? cls.activeTitle : ""}`}
            >
              {item.name}
              <br />
              <span>
                <PhoneIcon />
                <a href={`tel:${item?.number}`}>{item?.number}</a>
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className={cls.right}>
        <YMaps>
          <Map
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
                }}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/icons/map.svg",
                  iconImageSize: [36, 36],
                  iconImageOffset: [0, 0],
                }}
                properties={{
                  balloonContentBody: item.name,
                }}
                geometry={[item.lat, item.long]}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
