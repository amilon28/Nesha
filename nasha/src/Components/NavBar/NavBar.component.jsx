import React from "react";

import NavList from "../NavList/NavList.component";

import navLogo from "../../assets/img/simulation.svg";

import "./NavBar.style.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={navLogo} alt="simulation" className="navbar__logo" />
      <NavList type="head" />
    </nav>
  );
};

export default NavBar;
