import MostRelatedSoftwareList from "../MostRelatedSoftwareList/MostRelatedSoftwareList.component";
import Container from "../Container/Container.component";
import "./MostRelatedSoftwares.style.css";
import Title from "../Title/Title.component";

const MostRelatedSoftware = () => {
  return (
    <Container>
      <Title>بیشترین نرم افزار ها مربوط به کدام رشته ها هستند ؟</Title>
      <MostRelatedSoftwareList />
    </Container>
  );
};

export default MostRelatedSoftware;
