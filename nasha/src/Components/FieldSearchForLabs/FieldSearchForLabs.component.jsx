import React, { useContext, useState } from "react";
import { SubjectContext } from "../../store/SubjectContext";
import { useHistory } from "react-router";
import searchIcon from "../../assets/img/search-icon.svg";
import "../Header/Header.style.css";

function FieldSearchForLabs() {
  const { setSoftwareList } = useContext(SubjectContext);
  const [searchValue, setSearchValue] = useState();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const goto = useHistory();
  //----------------
  const fetchFields = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/lab_search?search=${searchValue}`
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
    setIsClick(true);
  };

  const getSoftwares = async (labId) => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${labId}`
    );

    const data = await response.json();

    setSoftwareList(data.softwares);
    goto.push("/search");
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
          onChange={changeHandler}
        />
        <span className="header__icon" onClick={getData}>
          <img src={searchIcon} alt="search-icon" />
        </span>
      </div>
      {
        <div className="field__cards">
          {result &&
            result.map((res) => {
              return (
                <div
                  className="lab__card field__card"
                  onClick={() => getSoftwares(res.id)}
                >
                  <div className="field__name">{res.name}</div>
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

      {/* {!isLoading && !result && isClick && (
        <p className="error-text">No Labs Find!</p>
      )} */}
    </div>
  );
}

export default FieldSearchForLabs;
