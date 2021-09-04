import ServicesItem from "../ServicesItem/ServicesItem.component";
import "../Services/Services.style.css";
const ServicesList = () => {
  return (
    <div className="services__list">
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
    </div>
  );
};

export default ServicesList;
