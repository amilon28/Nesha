import { Link } from "react-router-dom";
import "../NavBar/NavBar.style.css";

const NavItem = (props) => {
  const classes = "navbar__item";
  return (
    <li
      className={classes}
      onClick={() => {
        if (props.text === "اضافه کردن") window.location.reload();
      }}
    >
      <Link to={props.goto}>{props.text}</Link>
    </li>
  );
};

export default NavItem;
