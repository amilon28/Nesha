import { useHistory } from "react-router";
import "../MostRelatedSoftwares/MostRelatedSoftwares.style.css";

const MostRelatedSoftwareList = (props) => {
  const goto = useHistory();

  const clickHandler = async (field) => {
    goto.push(`/Field/${field.id}`);
  };
  return (
    <div className="MostRelatedSoftware__list">
      {props.fieldsList.map((field) => (
        <div
          className="MostRelatedSoftware__item"
          onClick={() => clickHandler(field)}
        >
          {" "}
          رشته <span className="field__title">{field.name}</span> با{" "}
          {field.number_of_labs} آزمایشگاه <br /> و {field.number_of_softwares}{" "}
          نرم افزار شبیه سازی
        </div>
      ))}
    </div>
  );
};

export default MostRelatedSoftwareList;
