import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "../hamburger/Hamburger";
import ToggleButton from "../toggle/ToggleButton";
import ToggleLogo from "../toggle/ToggleLogo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((logo) => {
      return !logo;
    });
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <div>
      <nav className="navBar">
        <Link className="linkLogo" to="/">
          <ToggleLogo active={active} handleChangeActive={handleChangeActive} />
        </Link>
        <div className={`menu ${menuOpen ? "open" : "closed"}`}>
          <Link to="/" onClick={toggleMenu}>
            <h2>Accueil</h2>
          </Link>
          <Link to="/portfolio" onClick={toggleMenu}>
            <h2>Portfolio</h2>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <h2>Contact</h2>
          </Link>
          <ToggleButton />
        </div>
        <div className="Hamburger" onClick={toggleMenu}>
          <Hamburger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
