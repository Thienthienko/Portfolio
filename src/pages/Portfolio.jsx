import Kaleien from "../components/kaleien/Kaleien";
import LazyFlicks from "../components/lazyflicks/LazyFlicks";
import LignesUrbaines from "../components/lignes/LignesUrbaines";
import Prodkat from "../components/prodkat/Prodkat";
import Snotrac from "../components/snotrac/Snotrac";
import Jessica from "../components/jessica/Jessica";
import StudioAnae from "../components/studioanae/StudioAnae";
import StudioAnaeParis from "../components/studioanae/StudioAnaeParis";
import Wagd from "../components/wagd/Wagd";
import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <div className="portfolioContainer">
      <h2>{t("common.translate-project")}</h2>
      <div className="portfolioBloc">
        <Kaleien />
        <LazyFlicks />
        <Prodkat />
        <Snotrac />
        <StudioAnae />
        <StudioAnaeParis />
        <Jessica />
        <Wagd />
        <LignesUrbaines />
      </div>
    </div>
  );
}

export default Portfolio;
