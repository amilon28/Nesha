import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import searchIcon from "../../assets/img/search-icon.svg";
import "../Header/Header.style.css";
import loader from "../../assets/img/loader.gif";

function FieldSearchForLabs() {
  const [searchValue, setSearchValue] = useState();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const goto = useHistory();
  //----------------

  const clickOnItemHandler = async (item) => {
    goto.push(`/Lab/${item.id}`);
  };

  //-------- get all Labs --------------
  const fetchAllLabs = async () => {
    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/Nesha/v1/lab_search/"
      );
      if (!response.ok) throw Error("SomeThing Is Not Right !");
      const data = await response.json();
      console.log(data);
      setResult(data);
      console.log("Result of all labs: ", result);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllLabs();
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
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <span className="header__icon">
          <img src={searchIcon} alt="search-icon" />
        </span>
      </div>
      {!isLoading && (
        <div className="field__cards">
          {result
            ?.filter(function (val) {
              if (!searchValue) return val;
              else if (val.name.includes(searchValue)) {
                return val;
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
                  <div className="field__nos">
                    <span>تعداد نرم افزار : </span>
                    <span>{res.number_of_softwares}</span>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {isLoading && <img src={loader} alt="Loading" />}
    </div>
  );
}

export default FieldSearchForLabs;
