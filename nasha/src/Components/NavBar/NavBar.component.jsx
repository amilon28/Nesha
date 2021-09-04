import React from "react";
import "./NavBar.style.css";
import navLogo from "../../assets/img/simulation.svg";
import hamburger from "../../assets/img/hamburger-menu.svg";
const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={navLogo} alt="simulation" className="navbar__logo" />
      <ul className="navbar__list">
        <li className="navbar__item">خانه</li>
        <li className="navbar__item">درباره ما</li>
        <li className="navbar__item">اضافه کردن</li>
        <li className="navbar__item">رشته ها</li>
        <li className="navbar__item">آزمایشگاه ها</li>
        <li className="navbar__item">
          <img src={hamburger} alt="hamburger" className="navbar__item--icon" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
