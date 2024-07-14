function Vully() {
  return (
    <div className="projectContainer">
      <section className="work">
        <figure>
          <div className="info">
            <h3>Centre Dentaire de Vully</h3>
            <p className="description">Création d'un logo et d'un flyer</p>
            <p className="description">
              Cabinet dentaire dans un cadre moderne et chaleureux <br />
              au sein du pôle médical de Sugiez, en face de la boulangerie
              Guillaume.
            </p>
            <div className="logoHardSkill">
              <img src="./src/assets/illustrator.png" />
              <img src="./src/assets/photoshop.png" />
            </div>
            <p className="description">
              <a href="https://centredentaireduvully.ch/" target="blank">
                Site web
              </a>
            </p>
          </div>
          <img className="backgroundDesk" src="./src/assets/vully.png" />
        </figure>
      </section>
    </div>
  );
}

export default Vully;
