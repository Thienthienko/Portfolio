function Kaleien() {
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
        <p className="description">Création d&apos;une application Front-End</p>
        <p className="description">
          Application : Quiz de 10 questions de culture générale avec une
          personnalisation de son pseudo et de son avatar
        </p>
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
