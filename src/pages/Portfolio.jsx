import Kaleien from "../components/kaleien/Kaleien";
import LazyFlicks from "../components/lazyflicks/LazyFlicks";
import LignesUrbaines from "../components/lignes/LignesUrbaines";

function Portfolio() {
  return (
    <div className="portfolioContainer">
      <h2>Portfolio</h2>
      <div className="portfolioBloc">
        <Kaleien />
        <LazyFlicks />
        <LignesUrbaines />
      </div>
    </div>
  );
}

export default Portfolio;
