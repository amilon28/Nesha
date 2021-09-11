import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../Header/Header.style.css";
import searchIcon from "../../assets/img/search-icon.svg";
import { SubjectContext } from "../../store/SubjectContext";

const SearchField = (props) => {
  const { setTarget, setIsEnterToFieldPage } = useContext(SubjectContext);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [labs, setLabs] = useState([]);
  const goto = useHistory();

  const fetchLabs = async (obj) => {
    console.log("obj", obj);
    console.log("obj.id", obj.id); //! obj.id = 1
    const id = obj.id;
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/fields/${id}`
      );

      if (!response.ok) throw Error("Something Went Wrong...");

      const data = await response.json();
      console.log("data", data);
      setLabs(data.lab_ids);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };

  const clickSearchIconHandler = (e) => {
    if (!searchValue || !(e.key === "Enter")) return;
    goto.push("/search");
  };

  const clickOnItemHandler = async (e, obj) => {
    setSearchValue(e.target.textContent);
    if ("number_of_labs" in obj && "number_of_softwares" in obj) {
      fetchLabs(obj);
      setIsEnterToFieldPage(true);
      goto.push("/Field");
    } else if ("number_of_softwares" in obj) {
      goto.push("/Lab");
    }
  };

  const fetchDatasAboutSearchValue = async () => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/search?search=${searchValue}`
      );

      if (!response.ok) throw Error("Something Went Wrong...");

      const data = await response.json();

      setResult(data.results);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    fetchDatasAboutSearchValue();
  };

  useEffect(() => {
    setTarget(labs);
  }, [labs]);

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
        onKeyDown={clickSearchIconHandler}
      />
      <span className={iconClass} onClick={clickSearchIconHandler}>
        <img src={searchIcon} alt="search-icon" />
      </span>

      {!isLoading && (
        <div>
          <ul className="listOfDatas">
            {[...result.Software, ...result.Field, ...result.Lab].map((el) => (
              <li
                key={Math.random()}
                onClick={(e) => clickOnItemHandler(e, el)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchField;
