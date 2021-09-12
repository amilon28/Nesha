import React, { useState } from "react";
import searchIcon from "../../assets/img/search-icon.svg";
import "../Header/Header.style.css";

function FieldSearchForFieldPage() {
  const [searchValue, setSearchValue] = useState();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //----------------
  const fetchFields = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/field_search?search=${searchValue}`
    );

    const data = await response.json();
    setResult(data.results);
    setIsLoading(false);
    console.log(result);
  };

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const getData = () => {
    setIsLoading(true);
    fetchFields();
  };

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
        <span className="header__icon" onClick={() => getData()}>
          <img src={searchIcon} alt="search-icon" />
        </span>
      </div>
      {
        <div className="field__cards">
          {result &&
            result.map((res) => {
              return (
                <div className="field__card">
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
      }

      {isLoading && (
        <div>
          <p className="loading-text">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default FieldSearchForFieldPage;
