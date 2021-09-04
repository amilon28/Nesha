import "../NavBar/NavBar.style.css";

const NavItem = (props) => {
  return <li className="navbar__item">{props.text}</li>;
};

export default NavItem;
