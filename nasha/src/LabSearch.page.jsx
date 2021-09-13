import { useState, useContext } from "react";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";
import Container from "./Components/Container/Container.component";
import FieldSearchForLabs from "./Components/FieldSearchForLabs/FieldSearchForLabs.component";
import { SubjectContext } from "./store/SubjectContext";

import nextIcon from "./assets/img/next-arrow.svg";
import prevIcon from "./assets/img/previous-arrow.svg";
import "./Components/Header/Header.style.css";

const LabSearch = () => {
  return (
    <div>
      <Header type="3" className="type-3" />
      <Container>
        <Title>آزمایشگاه ها</Title>
        <FieldSearchForLabs />
      </Container>
    </div>
  );
};

export default LabSearch;
