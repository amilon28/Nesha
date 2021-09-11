import React, { useState } from "react";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";
import Container from "./Components/Container/Container.component";
import SearchField from "./Components/SearchField/SearchField.component";

const FieldSearch = () => {
  const [response, setResponse] = useState({});

  return (
    <div>
      <Header type="3" className="type-3" />
      <Container>
        <Title>رشته ها</Title>
        <SearchField />
      </Container>
    </div>
  );
};

export default FieldSearch;
