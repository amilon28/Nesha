import NavItem from "../NavItem/NavItem.component";

import hamburger from "../../assets/img/hamburger-menu.svg";

import "../NavBar/NavBar.style.css";

const NavList = (props) => {
  if (props.type === "head") {
    return (
      <ul className="navbar__list">
        <NavItem goto="/" text="خانه" />
        <NavItem goto="/search" text="جستجوی بیشتر" />
        <NavItem goto="/submit" text="اضافه کردن" />
        <NavItem goto="/Field" text="رشته ها" />
        <NavItem goto="/Lab" text="آزمایشگاه ها" />
        {/* <NavItem to="/fields"  text="رشته ها" /> */}
        <li className="navbar__item">
          <img src={hamburger} alt="hamburger" className="navbar__item--icon" />
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar__list">
        <NavItem goto="/" text="خانه" />
        <NavItem goto="/search" text="درباره ما" />
        <NavItem goto="/submit" text="ورود" />
        <NavItem goto="/software" text="عضویت" />
        <NavItem goto="/labs" text="افزودن" />
      </ul>
    );
  }
};

export default NavList;
