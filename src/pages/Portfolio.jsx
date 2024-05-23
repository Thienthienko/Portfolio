import Kaleien from "../components/kaleien/Kaleien";
import LazyFlicks from "../components/lazyflicks/LazyFlicks";
import LignesUrbaines from "../components/lignes/LignesUrbaines";
import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <div className="portfolioContainer">
      <h2>{t("common.translate-project")}</h2>
      <div className="portfolioBloc">
        <Kaleien />
        <LazyFlicks />
        <LignesUrbaines />
      </div>
    </div>
  );
}

export default Portfolio;
