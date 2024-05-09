import Kaleien from "../components/kaleien/Kaleien";
import LazyFlicks from "../components/lazyflicks/LazyFlicks";

function Portfolio() {
  return (
    <div className="portfolioContainer">
      <h2>Portfolio</h2>
      <div className="portfolioBloc">
        <Kaleien />
        <LazyFlicks />
      </div>
    </div>
  );
}

export default Portfolio;
