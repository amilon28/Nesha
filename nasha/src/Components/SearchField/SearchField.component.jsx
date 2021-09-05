import "../Header/Header.style.css";
import searchIcon from "../../assets/img/search-icon.svg";
const SearchField = (props) => {
  const mainClass = "header__searchbar " + props.main;
  const iconClass = "header__icon " + props.icon;
  return (
    <div className={mainClass}>
      <input type="text" placeholder="جستجو" />
      <span className={iconClass}>
        <img src={searchIcon} alt="search-icon" />
      </span>
    </div>
  );
};

export default SearchField;
