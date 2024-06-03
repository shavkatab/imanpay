import NewWaySell from "components/UI/NewWaySell/NewWaySell";
import SalesIncrease from "components/UI/SalesIncrease/SalesIncrease";
import JointPromotion from "components/UI/JointPromotion/JointPromotion";
import Collobration from "components/UI/Collobration/Collobration";
import cls from "./ForBusiness.module.scss";
import OurPartners from "components/UI/OurPartners/OurPartners";
import BecomePartner from "components/UI/BecomePartner/BecomePartner";

export function ForBusiness() {
  return (
    <main className={cls.main}>
      <NewWaySell />
      <SalesIncrease />
      <JointPromotion />
      <Collobration />
      <OurPartners />
      <BecomePartner />
    </main>
  );
}
