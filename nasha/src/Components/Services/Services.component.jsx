import ServicesList from "../ServicesList/ServicesList.component";
import Container from "../Container/Container.component";
import Title from "../Title/Title.component";

import "./Services.style.css";

const Services = () => {
  return (
    <Container className="services-part">
      <Title>خدمات سایت</Title>
      <ServicesList />
    </Container>
  );
};

export default Services;
