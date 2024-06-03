import cls from "./Culture.module.scss";
import useTranslation from "next-translate/useTranslation";

function ContentCulture({ data }) {
  const { t } = useTranslation("common");
  const { text1 = "culture about text 1", text2 = "culture about text 2" } =
    data;

  return (
    <>
      <div className={cls.contentBody}>
        <img
          src="/images/about/cultureTeam.svg"
          className={cls.cultureImage}
          alt="culture"
        />
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: t(text1),
            }}
            className={cls.text1}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t(text2),
            }}
            className={cls.text2}
          ></p>
        </div>
      </div>
    </>
  );
}

export default ContentCulture;
