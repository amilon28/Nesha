import NavBar from "../NavBar/NavBar.component";
import HeaderBody from "../HeaderBody/HeaderBody.component";

import "./Header.style.css";

const Header = (props) => {
  const classes = "header " + props.className;
  return (
    <header className={classes}>
      <NavBar />
      <HeaderBody type={props.type} />
    </header>
  );
};

export default Header;
