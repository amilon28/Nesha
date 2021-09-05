import { Link } from "react-router-dom";
import "../NavBar/NavBar.style.css";

const NavItem = (props) => {
  const classes = "navbar__item " + props.className;
  return (
    <li className={classes}>
      <Link to={props.to}>{props.text}</Link>
    </li>
  );
};

export default NavItem;
