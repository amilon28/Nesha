import ServicesItem from "../ServicesItem/ServicesItem.component";
import "../Services/Services.style.css";
const ServicesList = () => {
  return (
    <div className="services__list">
      <ServicesItem
        title="افزودن نرم افزار"
        text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                officiis in similique doloremque reprehenderit excepturi maiores
                explicabo ipsam odit illum?"
      />
      <ServicesItem
        title="تعداد کثیری از رشته ها"
        text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                officiis in similique doloremque reprehenderit excepturi maiores
                explicabo ipsam odit illum?"
      />
      <ServicesItem
        title="بازخورد کاربران"
        text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                officiis in similique doloremque reprehenderit excepturi maiores
                explicabo ipsam odit illum?"
      />
    </div>
  );
};

export default ServicesList;
