import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";
import Container from "./Components/Container/Container.component";
import FieldSearchForFieldPage from "./Components/FieldSearchForFieldPage/FieldSearchForFieldPage.component";

import "./Components/Header/Header.style.css";

const FieldSearch = () => {
  return (
    <div>
      <Header type="3" className="type-3" />
      <Container>
        <Title>رشته ها</Title>
        <FieldSearchForFieldPage />
      </Container>
    </div>
  );
};

export default FieldSearch;
