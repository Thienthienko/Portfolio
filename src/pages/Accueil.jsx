import { useTranslation } from "react-i18next";
import "animate.css/animate.min.css";

function Accueil() {
  const { t } = useTranslation();

  return (
    <div className="accueilContainer">
      <div className="myName">
        <h1>Thien NGUYEN</h1>
      </div>
      <div className="myTitle">
        <h2>{t("common.translated-title")}</h2>
      </div>
      <div className="avatar">
        <img
          className="animate__animated animate__zoomIn"
          src="./src/assets/ThienImg.png"
        />
      </div>
      <div className="infoAvatar">
        <div className="history">
          Actuellement en reconversion professionnelle après huit ans en tant
          que Responsable Planning dans un laboratoire d'analyse de la qualité
          de l'air amiante, je suis désireux de mettre à profit mes compétences
          acquises à la Wild Code School.
        </div>
        <div className="history">
          Je recherche donc une alternance dès septembre pour continuer à
          développer mes compétences et contribuer activement à votre
          entreprise.
        </div>
        <div className="blocDescription">
          <p className="descriptionHome1 animate__animated animate__bounceIn">
            <img src="./src/assets/dev.png" />
            {t("common.translated-passion")}
          </p>
          <p className="descriptionHome2 animate__animated animate__bounceIn animate__delay-1s">
            <img src="./src/assets/forma.png" />
            {t("common.translated-responsability")}
          </p>
          <p className="descriptionHome3 animate__animated animate__bounceIn animate__delay-2s">
            <img src="./src/assets/resp.png" />
            {t("common.translated-formation")}
          </p>
        </div>
      </div>
      <div className="techno">
        <h2>Techologies / Langages / Outils</h2>
        <img
          src="https://skillicons.dev/icons?i=html"
          height="40"
          alt="html5 logo"
        />
        <img width="12" />
        <img
          src="https://skillicons.dev/icons?i=css"
          height="40"
          alt="css3 logo"
        />
        <img width="12" />
        <img
          src="https://skillicons.dev/icons?i=js"
          height="40"
          alt="javascript logo"
        />
        <img width="12" />
        <img
          src="https://skillicons.dev/icons?i=react"
          height="40"
          alt="react logo"
        />
        <img width="12" />
        <img
          src="https://skillicons.dev/icons?i=nodejs"
          height="40"
          alt="nodejs logo"
        />
        <img width="12" />
        <img
          src="https://skillicons.dev/icons?i=express"
          height="40"
          alt="express logo"
        />
        <img width="12" />
        <img
          src="https://skillicons.dev/icons?i=git"
          height="40"
          alt="git logo"
        />
        <img width="12" />
        <img
          src="https://skillicons.dev/icons?i=vscode"
          height="40"
          alt="vscode logo"
        />
        <img width="12" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          height="40"
          alt="mysql logo"
        />
        <p className="descriptionOutils">
          <img src="./src/assets/resp.png" />
          {t("common.translated-formation")}
        </p>
      </div>
      <div className="blocInfo">
        <div className="icon">
          <a href="./src/assets/cv-portfolio.pdf" target="_blank">
            <img className="logoLink" src="./src/assets/flaticon-cv.png"></img>
            {/*{t("common.translated-resume")}*/}
          </a>
          <a href="https://github.com/Thienthienko" target="_blank">
            <img className="logoLink" src="./src/assets/githubMain.png"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/thien-nguyen-js/"
            target="_blank"
          >
            <img className="logoLink" src="./src/assets/linkedinMain.png"></img>
          </a>
        </div>
      </div>
      <footer>
        <p className="footerText">
          © 2024 - Thien NGUYEN - Développeur web full-stack
        </p>
      </footer>
    </div>
  );
}

export default Accueil;
