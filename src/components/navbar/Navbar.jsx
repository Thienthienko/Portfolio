import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "../hamburger/Hamburger";
import ToggleButton from "../toggle/ToggleButton";
import ToggleLogo from "../toggle/ToggleLogo";
import Lang from "../Lang";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const { t } = useTranslation();

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
            <h2>{t("common.translate-home")}</h2>
          </Link>
          <Link to="/portfolio" onClick={toggleMenu}>
            <h2>{t("common.translate-project")}</h2>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <h2>Contact</h2>
          </Link>
          <header className="App-header">
            <Lang />
          </header>
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
