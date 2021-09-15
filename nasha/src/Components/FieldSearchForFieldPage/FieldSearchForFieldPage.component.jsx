import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import searchIcon from "../../assets/img/search-icon.svg";
import { SubjectContext } from "../../store/SubjectContext";
import "../Header/Header.style.css";

function FieldSearchForFieldPage(props) {
  const { setLabList, labList, setSubject } = useContext(SubjectContext);
  const [searchValue, setSearchValue] = useState();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);
  const goto = useHistory();

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  // get data about clicked item
  const clickOnItemHandler = async (item) => {
    console.log("item", item);
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/fields/${item.id}`
      );
      if (!response.ok) throw Error("Somethin went wromg...");
      const data = await response.json();
      console.log("Data in field search for field page", data);
      setLabList(data.labs);
      console.log("lab in field search for field page", labList);
      setSubject(item.name);
      goto.push("/Field");
    } catch (error) {
      console.log(error.message);
    }
  };

  // Get all fields
  const fetchAllFields = async () => {
    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/Nesha/v1/field_search/"
      );
      if (!response.ok) throw Error("SomeThing Is Not Right !");
      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (error) {
      setErr(error.message);
    }
    setIsLoading(false);
  };

  // Get next page fields
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
        {/* <span className="header__icon" onClick={() => getData()}> */}
        <span className="header__icon">
          <img src={searchIcon} alt="search-icon" />
        </span>
      </div>
      {/* {
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
      } */}
      {isLoading && <p className="loading-text">Loading...</p>}
      {!isLoading && !err && (
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
