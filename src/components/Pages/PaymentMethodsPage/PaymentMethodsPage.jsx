import PaymentMethods from "components/UI/PaymentMethods/PaymentMethods";
import cls from "./styles.module.scss";

export function PaymentMethodsPage() {
  return (
    <main className={cls.main}>
      <PaymentMethods />
    </main>
  );
}
