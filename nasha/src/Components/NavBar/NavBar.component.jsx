import React from "react";

import NavList from "../NavList/NavList.component";

import navLogo from "../../assets/img/simulation.svg";

import SearchField from "../SearchField/SearchField.component";

import "./NavBar.style.css";

const NavBar = (props) => {
  if (!props.nav) {
    return (
      <nav className="navbar">
        <img src={navLogo} alt="simulation" className="navbar__logo" />
        <NavList type="head" />
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <div className="navbar-with-searchFiled">
          <img src={navLogo} alt="simulation" className="navbar__logo" />
          <SearchField main="reducePadding" />
        </div>
        <NavList type="head" />
      </nav>
    );
  }
};

export default NavBar;
