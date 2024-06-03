import cls from "./Culture.module.scss";
import useTranslation from "next-translate/useTranslation";

function Culture({ data, setGetData, index, setActiveCard, activeCard }) {
  const { t } = useTranslation("common");
  return (
    <div
      onClick={() => {
        setGetData(data);
        setActiveCard(data.title);
      }}
      className={cls.card}
    >
      <div
        className={`${cls.cardBody} ${index % 2 == 0 && cls.changeColor} ${
          activeCard === data.title && cls.activeCard
        }`}
      >
        <p className={cls.cardTitle}>{t(data.title)}</p>
        <img
          className={cls.cardIcon}
          src={`/icons/about/${data.url}`}
          alt={data.title}
        />
      </div>
    </div>
  );
}

export default Culture;
