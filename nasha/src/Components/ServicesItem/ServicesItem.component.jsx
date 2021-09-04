import checkMark from "../../assets/img/check-mark-circle.svg";
import "../Services/Services.style.css";
const ServicesItem = () => {
  return (
    <div className="services__item">
      <div className="services__icon">
        <img src={checkMark} alt="check mark" />
      </div>
      <div className="services__description">
        <h4>افزودن نرم افزار</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam officiis
          in similique doloremque reprehenderit excepturi maiores explicabo
          ipsam odit illum?
        </p>
      </div>
    </div>
  );
};

export default ServicesItem;
