import ServicesList from "../ServicesList/ServicesList.component";
import Container from "../Container/Container.component";

import "./Services.style.css";
import Title from "../Title/Title.component";
const Services = () => {
  return (
    <Container>
      <Title>خدمات ما</Title>
      <ServicesList />
    </Container>
  );
};

export default Services;
