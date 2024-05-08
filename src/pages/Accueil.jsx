function Accueil() {
  return (
    <div className="accueilContainer">
      <div className="infoAvatar">
        <div className="blocInfo">
          <div className="myName">
            <h2>Hello, my name is Thien NGUYEN</h2>
          </div>
          <div className="myTitle">
            <h2>I am fullstack Web & Mobile developper</h2>
          </div>
          <p className="description">
            🚀 Passionné de développement Web & Mobile, je recherche des
            opportunités pour apprendre et progresser dans ce domaine dynamique.
            Mes contributions à des projets comme un quiz interactif et une
            application de recommandation de films m&apos;ont permis de
            maîtriser HTML, CSS, JavaScript, React et REST API.
          </p>
          <p className="description">
            🔍 Ayant occupé des postes de responsabilité chez Stratech - Metair
            Lab - SGS France, j&apos;ai développé des compétences en
            planification, en stratégie et en gestion de projet, des atouts
            précieux pour relever des défis complexes.
          </p>
          <p className="description">
            🎓 Titulaire d&apos;une formation intensive en développement Web &
            Mobile à la Wild Code School ainsi que d&apos;une formation
            complémentaire en multimédia/web, je suis motivé pour continuer à
            apprendre et à évoluer dans un environnement dynamique.
          </p>
          {/*
          <p className="description">
            🚀 Passionate about Web & Mobile development, I am seeking opportunities
            to learn and grow in this dynamic field. My contributions to projects such
            as an interactive quiz and a movie recommendation application have allowed
            me to master HTML, CSS, JavaScript, React, and REST API.
          </p>
          <p className="description">
            🔍 Having held positions of responsibility at Stratech - Metair Lab - SGS
            France, I have developed skills in planning, strategy, and project management,
            valuable assets for tackling complex challenges.
          </p>
          <p className="description">
            🎓 Holder of an intensive training in Web & Mobile development at the Wild Code
            School, as well as complementary training in multimedia/web, I am motivated to
            continue learning and evolving in a dynamic environment.
  </p>*/}
          <p className="description">
            <a>Get My Resume</a>
          </p>
        </div>
        <div className="avatar">
          <img src="./src/assets/ThienImg.png" />
        </div>
      </div>
    </div>
  );
}

export default Accueil;
