import React, { useContext, useState, useEffect } from "react";
import { SubjectContext } from "../../store/SubjectContext";
import { useHistory } from "react-router";
import searchIcon from "../../assets/img/search-icon.svg";
import "../Header/Header.style.css";
import loader from "../../assets/img/loader.gif";

function FieldSearchForLabs() {
  const { setSoftDetaile, setSubject, setTarget, setLabSubject } =
    useContext(SubjectContext);
  const [searchValue, setSearchValue] = useState();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const goto = useHistory();
  //----------------

  // ---------- get software for target lab --------------
  const clickOnItemHandler = async (item) => {
    console.log("item", item);
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${item.id}`
      );
      if (!response.ok) throw Error("Somethin went wromg...");
      const data = await response.json();
      console.log("Data in field search for lab page", data);
      setTarget(data.softwares);
      setLabSubject(item.name);
      goto.push("/Lab");
    } catch (error) {
      console.log(error.message);
    }
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
      // setErr(error.message);
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
        {/* <span className="header__icon" onClick={() => getData()}> */}
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

      {/* {isLoading && (
        <div>
          <p className="loading-text">Loading...</p>
        </div>
      )} */}

      {isLoading && <img src={loader} alt="Loading" />}

      {/* {!isLoading && result?.res && isClick && (
        <p className="error-text">No Labs Find!</p>
      )} */}
    </div>
  );
}

export default FieldSearchForLabs;
