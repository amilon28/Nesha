import NavBar from "../NavBar/NavBar.component";
import HeaderBody from "../HeaderBody/HeaderBody.component";
import SearchFieldBig from "../SearchFieldBig/SearchField.component";

import "./Header.style.css";

const Header = () => {
  return (
    <header>
      <NavBar />
      <HeaderBody />
    </header>
  );
};

export default Header;
