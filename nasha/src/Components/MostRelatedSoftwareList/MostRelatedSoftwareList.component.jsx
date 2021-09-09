import MostRelatedSoftwareItem from "../MostRelatedSoftwareItem/MostRelatedSoftwareItem.component";

import "../MostRelatedSoftwares/MostRelatedSoftwares.style.css";
const MostRelatedSoftwareList = (props) => {
  return (
    <div className="MostRelatedSoftware__list">
      {props.fieldsList.map((field) => (
        <MostRelatedSoftwareItem key={field.id}>
          رشته <span className="field__title">{field.name}</span> با{" "}
          {field.number_of_labs} آزمایشگاه <br /> و {field.number_of_softwares}{" "}
          نرم افزار شبیه سازی
        </MostRelatedSoftwareItem>
      ))}
    </div>
  );
};

export default MostRelatedSoftwareList;
