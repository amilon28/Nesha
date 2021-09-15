import { useContext } from "react";
import { useHistory } from "react-router";
import { SubjectContext } from "../../store/SubjectContext";
import heart from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import "./CardList.style.css";

const CardList = (props) => {
  console.log(props.softWareList);
  console.log("www");
  const { setSoftDetaile } = useContext(SubjectContext);
  const goto = useHistory();
  const clickHandler = async (soft) => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/softwares/${soft.id}`
      );
      if (!response.ok) throw Error("Opps. sth is wrong!");
      const data = await response.json();
      setSoftDetaile(data);
      goto.push("/software");
    } catch (err) {
      console.log("In line 20 of MostrealtedSoftlist", err.message);
    }
  };
  return (
    <div className="cards">
      {props.softWareList.map((soft) => (
        <div className="card" key={soft.id} onClick={() => clickHandler(soft)}>
          <div className="card__img">
            <img src={soft.icon_picture} alt="Program Icon" />
          </div>
          <div className="card__infos">
            <div className="card__title">{soft.name}</div>
            <div className="card__item">
              <img src={heart} alt="likes" />
              <span>{soft.likes}</span>
            </div>
            <div className="card__item">
              <img src={view} alt="views" />
              <span>{soft.views}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
