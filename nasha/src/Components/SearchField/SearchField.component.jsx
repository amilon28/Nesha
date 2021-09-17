import React, { useState, useContext, useEffects } from "react";
import { useHistory } from "react-router-dom";
import searchIcon from "../../assets/img/search-icon.svg";
import "../Header/Header.style.css";

const SearchField = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const goto = useHistory();

  const clickSearchIconHandler = (e) => {
    if (!searchValue) return;
    goto.push("/search");
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter" && searchValue) goto.push("/search");
  };

  const clickOnItemHandler = async (e, obj) => {
    setSearchValue(e.target.textContent);
    // setTitle(obj.name);

    // Fields in home page
    if ("number_of_labs" in obj && "number_of_softwares" in obj) {
      goto.push(`/Field/${obj.id}`);
    }
    // Labs in home page
    else if ("number_of_softwares" in obj) {
      goto.push(`/Lab/${obj.id}`);
    }
    // software in home page
    else {
      goto.push(`/software/${obj.id}`);
    }
  };

  const fetchDatasAboutSearchValue = async () => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/search/?search=${searchValue}`
      );
      if (!response.ok) throw Error("Something Went Wrong...");
      const data = await response.json();
      console.log("Result in home page...........for search field", data);
      setResult(data.results);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    fetchDatasAboutSearchValue();
  };

  const mainClass = "header__searchbar " + props.main;
  const iconClass = "header__icon " + props.icon;
  return (
    <div className={mainClass}>
      <input
        autoFocus
        type="text"
        placeholder="جستجو"
        value={searchValue}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      <span className={iconClass} onClick={(e) => clickSearchIconHandler(e)}>
        <img src={searchIcon} alt="search-icon" />
      </span>

      {!isLoading && (
        <div>
          <ul className="listOfDatas">
            {[...result?.Software, ...result?.Field, ...result?.Lab].map(
              (el) => (
                <li
                  key={Math.random()}
                  onClick={(e) => clickOnItemHandler(e, el)}
                >
                  {el.name}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchField;
