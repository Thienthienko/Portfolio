function LignesUrbaines() {
  return (
    <div className="projectContainer">
      <div className="mobileDesktop">
        <video width="100%" height="360" controls>
          <source src="./src/assets/BG.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
      <div className="projectDesc">
        <h2>Lignes Urbaines</h2>
        <p className="description">Motion Design</p>
        <p className="description">Vectorisation + animation du logo</p>
        <div className="logoHardSkill">
          <img src="./src/assets/illustrator.png" />
          <img src="./src/assets/aftereffect.png" />
        </div>
      </div>
    </div>
  );
}

export default LignesUrbaines;
