import NavItem from "../NavItem/NavItem.component";

import hamburger from "../../assets/img/hamburger-menu.svg";

import "../NavBar/NavBar.style.css";

const NavList = (props) => {
  if (props.type === "head") {
    return (
      <ul className="navbar__list">
        <NavItem text="خانه" />
        <NavItem text="درباره ما" />
        <NavItem text="اضافه کردن" />
        <NavItem text="رشته ها" />
        <NavItem text="آزمایشگاه ها" />
        <li className="navbar__item">
          <img src={hamburger} alt="hamburger" className="navbar__item--icon" />
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar__list">
        <NavItem text="خانه" />
        <NavItem text="درباره ما" />
        <NavItem text="ورود" />
        <NavItem text="عضویت" />
        <NavItem text="افزودن" />
      </ul>
    );
  }
};

export default NavList;
