function Prodkat() {
  return (
    <div className="projectContainer">
      <section className="work">
        <figure>
          <div className="info">
            <h3>Prodkat</h3>
            <p className="description">Création d'une application Fullstack</p>
            <p className="description">
              Application : Plateforme vidéo modèle Freemium avec inscription,
              authentification de l'utilisateur
            </p>
            <div className="logoHardSkill">
              <img src="./src/assets/html.png" />
              <img src="./src/assets/css.png" />
              <img src="./src/assets/javascript.png" />
              <img src="./src/assets/github.png" />
              <img src="./src/assets/git.png" />
              <img src="./src/assets/nodejs.png" />
              <img src="./src/assets/mysql.png" />
            </div>
            <p className="description">
              <a
                href="https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P3-ricetrio"
                target="blank"
              >
                /Code source
              </a>
            </p>
          </div>
          <img className="backgroundDesk" src="./src/assets/prodkat-desk.png" />
        </figure>
      </section>
    </div>
  );
}

export default Prodkat;
