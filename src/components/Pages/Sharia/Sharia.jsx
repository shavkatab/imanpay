import CertificateSharia from "components/UI/CertificateSharia/CertificateSharia";
import ShariahCompliance from "components/UI/ShariahCompliance/ShariahCompliance";
import cls from "./Sharia.module.scss";

export function ShariaPage() {
  return (
    <main className={cls.main}>
      <ShariahCompliance />
      <CertificateSharia />
    </main>
  );
}
