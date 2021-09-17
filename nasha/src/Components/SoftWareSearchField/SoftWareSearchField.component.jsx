import React, { useContext } from "react";
import searchIcon from "../../assets/img/search-icon.svg";
import { SubjectContext } from "../../store/SubjectContext";
import "../Header/Header.style.css";

const SoftWareSearchField = () => {
  const { softSearchTerm, setSoftSearchTerm } = useContext(SubjectContext);
  

  return (
    <div className="header__searchbar">
      <input
        autoFocus
        type="text"
        placeholder="جستجو"
        value={softSearchTerm}
        onChange={(e) => setSoftSearchTerm(e.target.value)}
      />
      <span className="header__icon">
        <img src={searchIcon} alt="search-icon" />
      </span>
    </div>
  );
};

export default SoftWareSearchField;
