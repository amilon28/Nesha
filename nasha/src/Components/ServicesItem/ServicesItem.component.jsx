import checkMark from "../../assets/img/check-mark.svg";
import "../Services/Services.style.css";
const ServicesItem = (props) => {
  return (
    <div className="services__item">
      <div className="services__icon">
        <img src={checkMark} alt="check mark" />
      </div>
      <div className="services__description">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
