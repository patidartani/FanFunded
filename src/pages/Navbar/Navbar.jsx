import { useState } from "react";
import "./Navbar.css";
import LOGO from "../../assets/images/MainLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Navbar-main">
      <div className="Navbar-Content">
        <div className="nav-left">
          <div className="logo">
            <a href="/">
              <img src={LOGO} alt="Logo" />
            </a>
          </div>
        </div>

        <div className="nav-right">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="ri-menu-2-line"></i>
          </div>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/evaluation-process ">Evaluation Process </Link></li>
            <li><Link to="/challenges ">Challenges </Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
