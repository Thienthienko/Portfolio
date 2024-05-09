function LazyFlicks() {
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
        <p className="description">
          Création d&apos;une application Front-End à l&apos;aide des méthodes
          agiles/SCRUM
        </p>
        <p className="description">
          Application : Suggestion de film ou de série via l&apos;API TMDB en
          fonction du genre, du type et du plus populaire du moment.
        </p>
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
