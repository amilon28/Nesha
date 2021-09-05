import CardList from "./Components/CardList/CardList.component";
import Container from "./Components/Container/Container.component";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";

const Labs = () => {
  return (
    <div>
      <Header type="3" className="type-3" />
      <Container>
        <Title>رشته ها</Title>
        <CardList />
      </Container>
    </div>
  );
};

export default Labs;
