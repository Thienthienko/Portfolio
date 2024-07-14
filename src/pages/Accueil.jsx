import { useTranslation } from "react-i18next";
import "animate.css/animate.min.css";
import "../style.scss";

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
          src="./src/assets/ThienImg2.png"
          alt="image de profil"
        />
      </div>
      <div className="infoAvatar">
        <section className="blocDescription">
          <div className="descriptionHome1 animate__animated animate__bounceIn">
            <h3>A propos</h3>
            <p className="history">
              Actuellement en reconversion professionnelle après huit ans en
              tant que Responsable Planning dans un laboratoire d'analyse de la
              qualité de l'air amiante, je suis désireux de mettre à profit mes
              compétences acquises à la Wild Code School.
            </p>
            <p className="history">
              Mon parcours dans le domaine de l’amiante m’a inculqué des valeurs
              telles que la rigueur, la sécurité, les délais et le respect des
              normes, des qualités que je compte bien mettre à profit dans ma
              future carrière en développement web.
            </p>
            <p className="history">
              Je suis à la recherche d'une opportunité d'alternance pour
              septembre 2024 pour une durée de 15 mois.
            </p>
            <p className="history">
              Si vous avez des questions ou que vous voulez en savoir plus,
              n'hésitez pas à me contacter et à télécharger mon CV ci-dessous.
            </p>
            <div className="blocInfo">
              <div className="icon">
                <section className="portfolio-experiment">
                  <a href="./src/assets/cv-portfolio.pdf" target="_blank">
                    <span className="text">Télécharger mon CV</span>
                    <span className="line -right"></span>
                    <span className="line -top"></span>
                    <span className="line -left"></span>
                    <span className="line -bottom"></span>
                  </a>
                </section>
                <section className="gitLink">
                  <a href="https://github.com/Thienthienko" target="_blank">
                    <img
                      className="logoLink"
                      src="./src/assets/githubMain.png"
                      alt="logo github"
                    ></img>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thien-nguyen-js/"
                    target="_blank"
                  >
                    <img
                      className="logoLink"
                      src="./src/assets/linkedinMain.png"
                      alt="logo linkedin"
                    ></img>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="technoContainer">
        <h4>Techologies / Langages / Outils</h4>
        <div className="techno">
          <div>
            <img
              src="https://skillicons.dev/icons?i=html"
              height="80"
              alt="html5 logo"
            />
            <p className="technoTitle">HTML5</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=css"
              height="80"
              alt="css3 logo"
            />
            <p className="technoTitle">CSS3</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=js"
              height="80"
              alt="javascript logo"
            />
            <p className="technoTitle">Javascript</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=react"
              height="80"
              alt="react logo"
            />
            <p className="technoTitle">React</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              height="80"
              alt="nodejs logo"
            />
            <p className="technoTitle">Node.js</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=express"
              height="80"
              alt="express logo"
            />
            <p className="technoTitle">Express.js</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=git"
              height="80"
              alt="git logo"
            />
            <p className="technoTitle">Git</p>
          </div>
          <div>
            <img
              src="https://skillicons.dev/icons?i=vscode"
              height="80"
              alt="vscode logo"
            />
            <p className="technoTitle">VS Code</p>
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              height="80"
              alt="mysql logo"
            />
            <p className="technoTitle">MySQL</p>
          </div>
          <div>
            <img
              src="https://cdn.simpleicons.org/adobeillustrator/FF9A00"
              height="80"
              alt="adobeillustrator logo"
            />
            <p className="technoTitle">Illustrator</p>
          </div>
          <div>
            <img
              src="https://cdn.simpleicons.org/adobephotoshop/31A8FF"
              height="80"
              alt="adobephotoshop logo"
            />
            <p className="technoTitle">Photoshop</p>
          </div>
          <div>
            <img
              src="https://cdn.simpleicons.org/adobepremierepro/9999FF"
              height="80"
              alt="adobepremierepro logo"
            />
            <p className="technoTitle">Premiere Pro</p>
          </div>
          <div>
            <img
              src="https://cdn.simpleicons.org/adobeaftereffects/9999FF"
              height="80"
              alt="adobeaftereffects logo"
            />
            <p className="technoTitle">After Effects</p>
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
              height="80"
              alt="canva logo"
            />
            <p className="technoTitle">Canva</p>
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              height="80"
              alt="figma logo"
            />
            <p className="technoTitle">Figma</p>
          </div>
          <div>
            <img
              src="https://cdn.simpleicons.org/npm/CB3837"
              height="80"
              alt="npm logo"
            />
            <p className="technoTitle">NPM</p>
          </div>
        </div>
      </section>
      <footer>
        <p className="footerText">
          © 2024 - Thien NGUYEN - Développeur web full-stack
        </p>
      </footer>
    </div>
  );
}

export default Accueil;
