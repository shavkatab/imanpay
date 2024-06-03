import { useState } from "react";
import cls from "./CatalogPage.module.scss";
import CatalogBanner from "components/UI/CatalogBanner/CatalogBanner";
import CatalogDesktop from "components/UI/CatalogDesktop/CatalogDesktop";
import CatalogMobile from "components/UI/CatalogMobile/CatalogMobile";
import { merchants } from "utils/data";
import { useWindowWidth } from "hooks/useWindowWith";

export function CatalogPage() {
  const [state, setState] = useState(merchants);
  const width = useWindowWidth();

  return (
    <main className={cls.main}>
      <CatalogBanner setState={setState} />
      {width > 768 ? (
        <CatalogDesktop state={state} setState={setState} />
      ) : (
        <CatalogMobile state={state} setState={setState} />
      )}
    </main>
  );
}
