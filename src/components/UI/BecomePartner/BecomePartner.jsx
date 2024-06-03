import { Button, Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import cls from "./BecomePartner.module.scss";
import Image from "next/image";
import { useWindowWidth } from "hooks/useWindowWith";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { RightArrowIcon } from "../Icons";
import Select from "../Select";
import { options1, options2 } from "./data";
import { sendMessage } from "services/tgBot";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function BecomePartner() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { company, sphere, fullname, contact, select, select2 } = data;
    const message =
      "Наименование компании: " +
      company +
      "\nСфера деятельности: " +
      sphere +
      "\nФИО: " +
      fullname +
      "\nКонтакт для связи: " +
      contact +
      "\nСредний чек: " +
      select +
      "\nСреднее количество покупателей/мес: " +
      select2;
    sendMessage(message)
      .then((res) => {
        toast.success("Successfully sent!");
        setTimeout(() => {
          router.reload();
        }, 1000);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log("err", err);
      });
  };

  return (
    <div className={cls.root} id="become-partner">
      <Container className={cls.container}>
        <div className={cls.row}>
          <div className={cls.colFirst}>
            <div className={cls.img}>
              <Image
                src="/images/business/symbol.png"
                width={396}
                height={396}
                alt="symbol"
              />
            </div>
          </div>
          <div className={cls.colSecond}>
            <h2>{t("become_partner")}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={cls.firstRow}>
                <div>
                  <div>
                    <label htmlFor="company">{t("company_name")}*</label>
                    <Input
                      className={cls.input}
                      id="company"
                      name="company"
                      register={register}
                      errors={errors}
                      required
                    />
                  </div>
                  <div className={cls.wrapper}>
                    <label htmlFor="sphere">{t("field_activity")}*</label>
                    <Input
                      className={cls.input}
                      id="sphere"
                      name="sphere"
                      register={register}
                      errors={errors}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className={cls.fullname}>
                    <label htmlFor="fullname">{t("fullName")}*</label>
                    <Input
                      className={cls.input}
                      id="fullname"
                      name="fullname"
                      register={register}
                      errors={errors}
                      required
                    />
                  </div>
                  <div className={cls.wrapper}>
                    <label htmlFor="contact">{t("contact_connect")}*</label>
                    <Input
                      className={cls.input}
                      id="contact"
                      name="contact"
                      register={register}
                      errors={errors}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={cls.secondRow}>
                <div className={cls.wrapper}>
                  <label htmlFor="select">{t("average_check")}*</label>
                  <Select
                    options={options1}
                    className={cls.input}
                    id="select"
                    name="select"
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
                <div className={cls.wrapper}>
                  <label htmlFor="select2">{t("average_buyers")}*</label>
                  <Select
                    options={options2}
                    className={cls.input}
                    id="select2"
                    name="select2"
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
              </div>
              <div className={cls.button}>
                <Button type="submit">{t("join")}</Button>
              </div>
            </form>
          </div>
          <img
            className={cls.bgImg}
            src="/images/business/symbol.png"
            alt="symbol"
          />
        </div>
      </Container>
      <div className={cls.greenRow}>
        <a
          href="https://drive.google.com/file/d/1c5kW3HOJRvz03Xvap3pcjm4bFrBZDVUT/view"
          target="_blank"
        >
          <div className={cls.content}>
            <p>{t("sales_contract")}</p>
            <RightArrowIcon />
          </div>
        </a>
      </div>
      <Toaster />
    </div>
  );
}
