import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styling/NavBar.css";

import "../App.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <div className="logo-text">A_ELSAYED</div>
            {/* <img style={{ width: "1.70em" }} alt="logo" src={logo}></img> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/Home"
                activeClassName="navbar__link--active"
                className="nav-links option"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/About"
                activeClassName="navbar__link--active"
                className="nav-links option"
                onClick={closeMobileMenu}
              >
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Projects"
                activeClassName="navbar__link--active"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
