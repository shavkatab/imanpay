import CareerCompany from "components/UI/CareerCompany/CareerCompany";
import OurMission from "components/UI/OurMission/OurMission";
import ValuesCompany from "components/UI/ValuesCompany/ValuesCompany";
import cls from "./AboutUs.module.scss";
import HistoryDevelopment from "../../UI/HistoryDevelopment/HistoryDevelopment";
import Culture from "components/UI/Culture/Culture";

export function AboutUs() {
  return (
    <main className={cls.main}>
      <OurMission />
      <ValuesCompany />
      <Culture />
      <HistoryDevelopment />
      <CareerCompany />
    </main>
  );
}
