import "../Header/Header.style.css";
import searchIcon from "../../assets/img/search-icon.svg";
const SearchFieldBig = () => {
  return (
    <div className="header__searchbar">
      <input type="text" placeholder="جستجو" />
      <span className="header__icon">
        <img src={searchIcon} alt="search-icon" />
      </span>
    </div>
  );
};

export default SearchFieldBig;
