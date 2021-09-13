import { useContext } from "react";
import { useHistory } from "react-router";
import { SubjectContext } from "../../store/SubjectContext";
import "../MostRelatedSoftwares/MostRelatedSoftwares.style.css";

const MostRelatedSoftwareList = (props) => {
  const { setSubject, setLabList } = useContext(SubjectContext);
  const goto = useHistory();
  const clickHandler = async (field) => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/fields/${field.id}`
      );
      if (!response.ok) throw Error("Opps. sth is wrong!");
      const data = await response.json();
      setLabList(data.labs);
      setSubject(field.name);
      goto.push("/Field");
    } catch (err) {
      console.log("In line 20 of MostrealtedSoftlist", err.message);
    }
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
