import NavBar from "../NavBar/NavBar.component";
import HeaderBody from "../HeaderBody/HeaderBody.component";

import "./Header.style.css";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <HeaderBody />
    </header>
  );
};

export default Header;
