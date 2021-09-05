import "../NavBar/NavBar.style.css";

const NavItem = (props) => {
  const classes = "navbar__item " + props.className;
  return (
    <li className={classes}>
      <a href="#">{props.text}</a>
    </li>
  );
};

export default NavItem;
