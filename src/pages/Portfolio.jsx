import Kaleien from "../components/Kaleien";
import LazyFlicks from "../components/LazyFlicks";

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
