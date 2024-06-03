import { useEffect, useState } from "react";
import { Popover } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import cls from "./Header.module.scss";
import { useStyles } from "./styles";
import { useRouter } from "next/router";
import { changeContent } from "utils/changeContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Language() {
  const { t } = useTranslation("common");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const classes = useStyles();
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      handleClose();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <div onClick={handleClick} className={cls.language}>
        <img
          className={cls.image}
          src={changeContent(
            router.locale,
            "/icons/eng.jpg",
            "/icons/rus.jpg",
            "/icons/uzb.png"
          )}
          alt={router.locale}
        />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        classes={classes}
      >
        <div className={cls.languagePopUp}>
          <Link scroll={false} href={router.asPath} locale="ru">
            <a>
              {" "}
              <div className={cls.langTitle}>
                <img className={cls.img} src="/icons/rus.jpg" alt="russian" />
                {t("russian")}
              </div>
            </a>
          </Link>
          <Link scroll={false} href={router.asPath} locale="uz">
            <a>
              {" "}
              <div className={cls.langTitle}>
                <img className={cls.img} src="/icons/uzb.png" alt="uzbek" />
                {t("uzbek")}
              </div>
            </a>
          </Link>
          <Link scroll={false} href={router.asPath} locale="en">
            <a>
              <div className={cls.langTitle}>
                <img className={cls.img} src="/icons/eng.jpg" alt="english" />
                {t("english")}
              </div>
            </a>
          </Link>
        </div>
      </Popover>
    </>
  );
}
