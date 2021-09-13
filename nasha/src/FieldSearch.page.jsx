import React, { useEffect, useState, useContext } from "react";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";
import Container from "./Components/Container/Container.component";
import FieldSearchForFieldPage from "./Components/FieldSearchForFieldPage/FieldSearchForFieldPage.component";
import { SubjectContext } from "./store/SubjectContext";
import nextIcon from "./assets/img/next-arrow.svg";
import prevIcon from "./assets/img/previous-arrow.svg";
import "./Components/Header/Header.style.css";

const FieldSearch = () => {
  const { fieldsResponse, setFieldsResponse } = useContext(SubjectContext);
  const [isNextClick, setIsNextClick] = useState(false);
  const [isPrevClick, setIsPrevClick] = useState(false);

  return (
    <div>
      <Header type="3" className="type-3" />
      <Container>
        <Title>رشته ها</Title>
        <FieldSearchForFieldPage
          nextBtnClicked={isNextClick}
          prevBtnClicked={isPrevClick}
          setPrev={setIsPrevClick}
          setNext={setIsNextClick}
        />
      </Container>
      {fieldsResponse.next && (
        <div className="next" onClick={() => setIsNextClick(true)}>
          <span>Next</span>
          <img src={nextIcon} alt="right arrow" />
        </div>
      )}

      {fieldsResponse.previous && (
        <div className="next" onClick={() => setIsPrevClick(true)}>
          <span>Prev</span>
          <img src={prevIcon} alt="left arrow" />
        </div>
      )}
    </div>
  );
};

export default FieldSearch;
