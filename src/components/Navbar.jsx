import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <nav className="navBar">
      <span>
        <img
          className="logoTn"
          src="./src/assets/Logo-TN-noir.svg"
          alt="Logo"
        />
      </span>
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
      </div>
      <div className="Hamburger" onClick={toggleMenu}>
        <Hamburger />
      </div>
    </nav>
  );
}

export default Navbar;
