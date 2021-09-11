import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import searchIcon from "../../assets/img/search-icon.svg";
import { SubjectContext } from "../../store/SubjectContext";
import "../Header/Header.style.css";

const SearchField = (props) => {
  const { setTarget, setSubject, setLabSubject } = useContext(SubjectContext);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isListOpen, setIsListOpen] = useState();
  const goto = useHistory();

  // const fetchLabs = async (obj) => {
  //   console.log("obj", obj);
  //   console.log("obj.id", obj.id); //! obj.id = 1
  //   const id = obj.id;
  // };

  const clickSearchIconHandler = (e) => {
    if (!searchValue || !(e.key === "Enter")) return;
    goto.push("/search");
  };

  const clickOnItemHandler = async (e, obj) => {
    setSearchValue(e.target.textContent);
    // setTitle(obj.name);

    // Fields in home page
    if ("number_of_labs" in obj && "number_of_softwares" in obj) {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/fields/${obj.id}`
      );
      if (!response.ok) throw Error("Something Went Wrong...");
      const data = await response.json();
      setTarget(data.labs);
      setSubject(obj.name);

      goto.push("/Field");
    }
    // Labs in home page
    else if ("number_of_softwares" in obj) {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${obj.id}`
      );
      if (!response.ok) throw Error("Something Went Wrong...");
      const data = await response.json();
      setTarget(data.softwares);
      setLabSubject(obj.name);
      goto.push("/Lab");
    }
    // software in home page
    else {
      goto.push("/software");
    }
  };

  const fetchDatasAboutSearchValue = async () => {
    try {
      // if (currentLocation.pathname === "/") {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/search?search=${searchValue}`
      );

      // if (currentLocation.pathname === "/Field") {
      //   response = await fetch(
      //     `https://hassan1245.pythonanywhere.com/Nesha/v1/field_search?search=${searchValue}`
      //   );
      // }

      if (!response.ok) throw Error("Something Went Wrong...");

      const data = await response.json();

      setResult(data.results);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
    setIsListOpen(false);
  };

  // const hideList = () => {
  //   setIsListOpen(true);
  // };

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    fetchDatasAboutSearchValue();
  };

  // useEffect(() => {
  //   console.log("labs in use effect", labs);
  //   setTarget(labs);
  // }, []);

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
        // onBlur={hideList}
      />
      <span className={iconClass} onClick={clickSearchIconHandler}>
        <img src={searchIcon} alt="search-icon" />
      </span>

      {!isLoading && (
        <div>
          <ul className={`listOfDatas ${isListOpen ? "hide" : ""}`}>
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
      {isListOpen}
    </div>
  );
};

export default SearchField;
