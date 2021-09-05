import Container from "../Container/Container.component";
import Title from "../Title/Title.component";
import CardList from "../CardList/CardList.component";

const FavoriteSoftwares = () => {
  return (
    <Container className="big-height">
      <Title>نرم افزار های محبوب</Title>
      <CardList />
    </Container>
  );
};

export default FavoriteSoftwares;
