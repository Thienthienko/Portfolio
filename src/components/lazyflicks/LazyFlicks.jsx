import { useTranslation } from "react-i18next";

function LazyFlicks() {
  const { t } = useTranslation();
  return (
    <div className="projectContainer">
      <div className="mobileDesktop">
        <div className="mobileMockup">
          <img src="./src/assets/lazyflicks-mobile.png" />
        </div>
        <div className="deskMockup">
          <img src="./src/assets/lazeyflicks-desk.png" />
        </div>
      </div>
      <div className="projectDesc">
        <h2>LazyFlicks</h2>
        <p className="description">{t("common.translated-lazyflicks1")}</p>
        <p className="description">{t("common.translated-lazyflicks2")}</p>
        <div className="logoHardSkill">
          <img src="./src/assets/html.png" />
          <img src="./src/assets/css.png" />
          <img src="./src/assets/javascript.png" />
          <img src="./src/assets/github.png" />
          <img src="./src/assets/git.png" />
          <img src="./src/assets/react.png" />
        </div>
        <p className="description">
          <a
            href="https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-lazy_flicks"
            target="blank"
          >
            /Code source
          </a>
        </p>
      </div>
    </div>
  );
}

export default LazyFlicks;
