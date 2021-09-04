import ServicesList from "../ServicesList/ServicesList.component";
import "./Services.style.css";
const Services = () => {
  return (
    <div className="services">
      <h2 className="services__title">خدمات ما</h2>
      <ServicesList />
    </div>
  );
};

export default Services;
