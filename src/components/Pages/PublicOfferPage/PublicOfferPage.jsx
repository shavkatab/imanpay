import cls from "./styles.module.scss";
import PublicOffer from "components/UI/PublicOffer/PublicOffer";

export function PublicOfferPage() {
  return (
    <main className={cls.main}>
      <PublicOffer />
    </main>
  );
}
