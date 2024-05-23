import { useTranslation } from "react-i18next";
import "animate.css/animate.min.css";

function Accueil() {
  const { t } = useTranslation();

  return (
    <div className="accueilContainer">
      <div className="myName">
        <h2>{t("common.translated-hello")}</h2>
      </div>
      <div className="infoAvatar">
        <div className="blocInfo">
          <div className="myTitle">
            <h2>{t("common.translated-title")}</h2>
          </div>
          <p className="description">
            <a href="./src/assets/cv-portfolio.pdf" target="_blank">
              <img
                className="logoLink"
                src="./src/assets/flaticon-cv.png"
              ></img>
              {/*{t("common.translated-resume")}*/}
            </a>
            <a href="https://github.com/Thienthienko" target="_blank">
              <img className="logoLink" src="./src/assets/github.png"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/thien-nguyen-js/"
              target="_blank"
            >
              <img className="logoLink" src="./src/assets/linkedin.png"></img>
            </a>
          </p>
        </div>
        <div className="avatar">
          <img src="./src/assets/ThienImg.png" />
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
    </div>
  );
}

export default Accueil;
