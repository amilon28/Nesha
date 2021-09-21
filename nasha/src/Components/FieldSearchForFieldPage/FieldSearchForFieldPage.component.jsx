import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import searchIcon from "../../assets/img/search-icon.svg";
import "../Header/Header.style.css";
import loader from "../../assets/img/loader.gif";

function FieldSearchForFieldPage(props) {
  const [searchValue, setSearchValue] = useState();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const goto = useHistory();

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  // get data about clicked item
  const clickOnItemHandler = async (item) => {
    goto.push(`/Field/${item.id}`);
  };

  // Get all fields
  const fetchAllFields = async () => {
    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/Nesha/v1/field_search/"
      );
      if (!response.ok) throw Error("SomeThing Is Not Right !");
      const data = await response.json();
      setResult(data);
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllFields();
  }, []);
  //----------------
  return (
    <div className="fields__container">
      <div className="field__searchbar">
        <input
          autoFocus
          type="text"
          placeholder="جستجو"
          value={searchValue}
          onChange={(e) => changeHandler(e)}
        />

        <span className="header__icon">
          <img src={searchIcon} alt="search-icon" />
        </span>
      </div>

      {isLoading && <img src={loader} alt="Loading" />}
      {!isLoading && (
        <div className="field__cards">
          {result &&
            result
              .filter(function (field) {
                if (!searchValue) return field;
                else if (field.name.includes(searchValue)) {
                  return field;
                }
              })
              .map((res) => {
                return (
                  <div
                    className="field__card"
                    key={Math.random()}
                    onClick={() => clickOnItemHandler(res)}
                  >
                    <div className="field__name">{res.name}</div>
                    <div className="field__nol">
                      <span>تعداد آزمایشگاه : </span>
                      <span>{res.number_of_labs}</span>
                    </div>
                    <div className="field__nos">
                      <span>تعداد نرم افزار : </span>
                      <span>{res.number_of_softwares}</span>
                    </div>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}

export default FieldSearchForFieldPage;
