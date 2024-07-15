function Wagd() {
  return (
    <div className="projectContainer">
      <section className="work">
        <figure>
          <div className="info">
            <h3>WAGD devenu HARVEST</h3>
            <p className="description">Motion Design</p>
            <p className="description">
              Vidéo 3D pour les 5 ans de la société WAGD
            </p>
            <div className="logoHardSkill">
              <img src="./src/assets/cinema4d.png" />
            </div>
            <p className="description">
              <a href="" target="blank">
                Site web
              </a>
            </p>
          </div>
          <video className="backgroundDesk" controls>
            <source src="./src/assets/wagd.mp4" type="video/mp4" />
          </video>
        </figure>
      </section>
    </div>
  );
}

export default Wagd;
