import { useEffect, useState } from "react";

import CardList from "./Components/CardList/CardList.component";
import Container from "./Components/Container/Container.component";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";

const Fields = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState("");
  const fetchLabsHandler = async () => {
    fetch("");
  };

  useEffect(() => {});
  return (
    <div>
      <Header type="3" className="type-3" nav="true" />
      <Container>
        <Title>رشته ها</Title>
      </Container>
    </div>
  );
};

export default Fields;
