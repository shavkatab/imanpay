import { useState, useEffect } from "react";
import cls from "./MainBanner.module.scss";
import useTranslation from "next-translate/useTranslation";
import { Button, Container, Dialog } from "@mui/material";
import Image from "next/image";
import { PlayMarketIcon, RegistrIcon, BuyIcon, UzbIcon } from "../Icons";
import { CloseIcon } from "../Icons";
import InputMask from "../InputMask";
import { useForm } from "react-hook-form";
import { Fade } from "react-reveal";
import { useWindowWidth } from "hooks/useWindowWith";
import { useRouter } from "next/router";

const LinkAppStore = "https://apps.apple.com/uz/app/iman-pay/id1625307273";
const LinkGooglePlay =
  "https://play.google.com/store/apps/details?id=uz.iman.iman_installments";

export default function MainBanner() {
  const { t } = useTranslation("common");
  const [device, setDevice] = useState("");
  const [open, setOpen] = useState(false);
  const width = useWindowWidth();
  const router = useRouter();
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
  });
  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      setDevice("android");
    }
    if (/iPad|iPhone|iPod/i.test(userAgent)) {
      console.log("userAgent");
      setDevice("ios");
    }
  }, []);

  // console.log("data", merchants);

  return (
    <>
      <Fade>
        <div className={cls.root}>
          <Container className={cls.container}>
            <div className={cls.title}>
              <h2>{t("new_payment_type")}</h2>
            </div>
            <div className={cls.banner}>
              <div className={cls.banner_imgs}>
                <div className={cls.first_img}>
                  <Image
                    src={
                      width > 768
                        ? `/images/home/mobile1${router.locale}.png`
                        : `/images/home/tel1${router.locale}.png`
                    }
                    width={width > 768 ? 280 : 140}
                    height={width > 768 ? 360 : 210}
                    alt="mobile"
                  />
                </div>

                <div className={cls.second_img}>
                  <Image
                    src={
                      width > 768
                        ? `/images/home/mobile2${router.locale}.png`
                        : `/images/home/tel2${router.locale}.png`
                    }
                    width={width > 768 ? 280 : 140}
                    height={width > 768 ? 260 : 169}
                    alt="mobile"
                  />
                </div>
              </div>
              <div className={cls.banner_steps}>
                <div
                  onClick={() => {
                    if (width > 768) {
                      setOpen(true);
                    } else {
                      window.open(
                        device === "ios"
                          ? LinkAppStore
                          : device === "android"
                          ? LinkGooglePlay
                          : "#"
                      );
                    }
                  }}
                  className={cls.step}
                >
                  <div className={cls.step_img}>
                    <PlayMarketIcon />
                  </div>
                  <div>
                    <p className={cls.step_title}>{t("download_app")}</p>

                    <p className={cls.step_text}>{t("download_descr")}</p>
                  </div>
                </div>
                <div className={cls.step}>
                  <div className={cls.step_img}>
                    <RegistrIcon />
                  </div>
                  <div>
                    <p className={cls.step_title}>{t("register")}</p>
                    <p className={cls.step_text}>{t("registr_descr")}</p>
                  </div>
                </div>
                <div className={cls.step}>
                  <div className={cls.step_img}>
                    <BuyIcon />
                  </div>
                  <div>
                    <p className={cls.step_title}>{t("purchase")}</p>
                    <p className={cls.step_text}>{t("purchase_descr")}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Fade>
      {width > 768 && (
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className={cls.dialog}>
            <span onClick={() => setOpen(false)} className={cls.close}>
              <CloseIcon />
            </span>
            <div className={cls.body}>
              <p>{t("dialog_number_title")}</p>
              <div className={cls.input}>
                <div className={cls.select}>
                  <UzbIcon />
                  <p>+998</p>
                </div>
                <InputMask
                  mask={`99 999 99 99`}
                  placeholder="99 999 99 99"
                  control={control}
                  name="phone"
                  errors={errors}
                  required
                />
              </div>
              <Button className={cls.button}>{t("get_link")}</Button>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
