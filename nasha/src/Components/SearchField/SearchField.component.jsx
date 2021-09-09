import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import "../Header/Header.style.css";
import searchIcon from "../../assets/img/search-icon.svg";
const SearchField = (props) => {
  const mainClass = "header__searchbar " + props.main;
  const iconClass = "header__icon " + props.icon;

  const [searchValue, setSearchValue] = useState("");
  // const user = useHistory();

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const keyDownHandler = async (e) => {
    console.log(e.target.value);
    if (!searchValue) return;
    if (e.key === "Enter") {
      const response = await fetch(
        `http://hassan1245.pythonanywhere.com/Nesha/v1/search?search=${searchValue}`
      );
      const data = await response.json();
      console.log(data);
      if (!data.overall_total) {
        alert(
          "There is no Lab / Software / Fields for your Search value, Try another one"
        );
      } else {
        console.log(data);
      }
    }
  };

  return (
    <div className={mainClass}>
      <input
        type="text"
        placeholder="جستجو"
        value={searchValue}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      <span className={iconClass}>
        <img src={searchIcon} alt="search-icon" />
      </span>
    </div>
  );
};

export default SearchField;
