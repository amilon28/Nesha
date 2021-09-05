import NavItem from "../NavItem/NavItem.component";

import hamburger from "../../assets/img/hamburger-menu.svg";

import "../NavBar/NavBar.style.css";

const NavList = (props) => {
  if (props.type === "head") {
    return (
      <ul className="navbar__list">
        <NavItem className={props.className} text="خانه" />
        <NavItem className={props.className} text="درباره ما" />
        <NavItem className={props.className} text="اضافه کردن" />
        <NavItem className={props.className} text="رشته ها" />
        <NavItem className={props.className} text="آزمایشگاه ها" />
        <li className="navbar__item">
          <img src={hamburger} alt="hamburger" className="navbar__item--icon" />
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar__list">
        <NavItem className={props.className} text="خانه" />
        <NavItem className={props.className} text="درباره ما" />
        <NavItem className={props.className} text="ورود" />
        <NavItem className={props.className} text="عضویت" />
        <NavItem className={props.className} text="افزودن" />
      </ul>
    );
  }
};

export default NavList;
