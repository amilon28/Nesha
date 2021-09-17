import plusCircle from "../../assets/img/plus-circle.svg";
import { useEffect, useState, useContext } from "react";
import { SubjectContext } from "../../store/SubjectContext";
import { useHistory } from "react-router";
const LeftBarList = () => {
  const { setTarget, setLabSubject } = useContext(SubjectContext);
  const [computerLabs, setComputerLabs] = useState();
  const [elecLabs, setElecLabs] = useState();
  const [isComputerClick, setIsComputerClick] = useState(false);
  const [isElecClick, setIsIsElecClick] = useState(false);
  const goto = useHistory();

  const fetchComputerData = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/lab_search/?field_id=1/`
    );
    const data = await response.json();
    console.log("data in comlab", data);
    setComputerLabs(data);
  };

  const fetchElecData = async () => {
    const response = await fetch(
      "https://hassan1245.pythonanywhere.com/Nesha/v1/lab_search/?field_id=2/"
    );

    const data = await response.json();
    console.log("data in elecLab", data);
    setElecLabs(data);
  };

  const fetchcorrespondingSoftwareHandler = async (lab) => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${lab.id}`
    );

    const data = await response.json();
    console.log("response of data in Field", data);
    setTarget(data.softwares);
    setLabSubject(lab.name);
    goto.push("/Lab");
  };

  useEffect(() => {
    fetchComputerData();
    fetchElecData();
  }, []);

  return (
    <ul className="left__list">
      <li className="left__item">
        <div className="subject">
          <p className="text">رشته مهندسی کامپیوتر</p>
          <img
            src={plusCircle}
            alt="plus-sign"
            className="icon"
            onClick={() => setIsComputerClick(true)}
          />
        </div>
        {isComputerClick && computerLabs?.length > 0 && (
          <ul className="left__subList">
            {computerLabs?.map((lab) => (
              <li
                className="left__subList--item"
                onClick={() => fetchcorrespondingSoftwareHandler(lab)}
              >
                {lab.name}
              </li>
            ))}
          </ul>
        )}
      </li>

      <li className="left__item">
        <div className="subject">
          <p className="text">رشته مهدسی برق</p>
          <img
            src={plusCircle}
            alt="plus-sign"
            className="icon"
            onClick={() => setIsIsElecClick(true)}
          />
        </div>
        {isElecClick && elecLabs?.length > 0 && (
          <ul className="left__subList">
            {elecLabs?.map((lab) => (
              <li
                className="left__subList--item"
                onClick={() => fetchcorrespondingSoftwareHandler(lab)}
              >
                {lab.name}
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default LeftBarList;
