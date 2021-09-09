import CardList from "./Components/CardList/CardList.component";
import Container from "./Components/Container/Container.component";
import Header from "./Components/Header/Header.component";
import Title from "./Components/Title/Title.component";

const Fields = () => {
  return (
    <div>
      <Header type="3" className="type-3" nav="true" />
      <Container>
        <Title>رشته ها</Title>
        <CardList />
      </Container>
    </div>
  );
};

export default Fields;
