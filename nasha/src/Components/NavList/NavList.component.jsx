import NavItem from "../NavItem/NavItem.component";
import { Button } from "@material-ui/core";
import hamburger from "../../assets/img/hamburger-menu.svg";
import "../NavBar/NavBar.style.css";
import { useHistory } from "react-router";

const NavList = (props) => {
  const goto = useHistory();
  if (props.type === "head") {
    return (
      <>
        <ul className="navbar__list">
          <NavItem goto="/" text="خانه" />
          <NavItem goto="/search" text="جستجوی نرم افزار" />
          <NavItem goto="/submit" text="اضافه کردن" />
          <NavItem goto="/field-search" text="رشته ها" />
          <NavItem goto="/lab-search" text="آزمایشگاه ها" />
          {/* <NavItem to="/fields"  text="رشته ها" /> */}
          <li className="navbar__item">
            <img
              src={hamburger}
              alt="hamburger"
              className="navbar__item--icon"
            />
          </li>
        </ul>
      </>
    );
  } else {
    return (
      <ul className="navbar__list">
        <NavItem goto="/" text="خانه" />
        <NavItem goto="/" text="درباره ما" />
        <NavItem goto="/search" text="افزودن" />
        <button
          onClick={() => {
            localStorage.clear();
            goto.push("/");
          }}
          style={{ width: 80, height: 35, borderRadius: "16px" }}
        >
          خروج
        </button>
      </ul>
    );
  }
};

export default NavList;
