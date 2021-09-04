import MostRelatedSoftwareList from "../MostRelatedSoftwareList/MostRelatedSoftwareList.component";
import "./MostRelatedSoftwares.style.css";

const MostRelatedSoftware = () => {
  return (
    <div className="MostRelatedSoftware">
      <h2 className="MostRelatedSoftware__title">
        بیشترین نرم افزار ها مربوط به کدام رشته ها هستند ؟
      </h2>
      <MostRelatedSoftwareList />
    </div>
  );
};

export default MostRelatedSoftware;
