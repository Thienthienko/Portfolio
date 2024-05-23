import { useTranslation } from "react-i18next";

function Kaleien() {
  const { t } = useTranslation();
  return (
    <div className="projectContainer">
      <div className="mobileDesktop">
        <div className="mobileMockup">
          <img src="./src/assets/kaleien-mobile.png" />
        </div>
        <div className="deskMockup">
          <img src="./src/assets/kaleien-desk.png" />
        </div>
      </div>
      <div className="projectDesc">
        <h2>Kaleien Quiz</h2>
        <p className="description">{t("common.translated-kaleien1")}</p>
        <p className="description">{t("common.translated-kaleien2")}</p>
        <div className="logoHardSkill">
          <img src="./src/assets/html.png" />
          <img src="./src/assets/css.png" />
          <img src="./src/assets/javascript.png" />
          <img src="./src/assets/github.png" />
          <img src="./src/assets/git.png" />
        </div>
        <p className="description">
          <a href="https://github.com/wilderLPM/P1lesEwoks" target="blank">
            /Code source
          </a>
        </p>
      </div>
    </div>
  );
}

export default Kaleien;
