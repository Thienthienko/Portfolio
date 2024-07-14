function LignesUrbaines() {
  return (
    <div className="projectContainer">
      <section className="work">
        <figure>
          <div className="info">
            <h3>Lignes Urbaines</h3>
            <p className="description">Motion Design</p>
            <p className="description">Vectorisation + animation du logo</p>
            <div className="logoHardSkill">
              <img src="./src/assets/illustrator.png" />
              <img src="./src/assets/aftereffect.png" />
            </div>
          </div>
          <video className="backgroundDesk" controls>
            <source src="./src/assets/BG.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </figure>
      </section>
    </div>
  );
}

export default LignesUrbaines;
