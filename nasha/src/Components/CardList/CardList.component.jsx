import { useHistory } from "react-router";
import heart from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import "./CardList.style.css";

const CardList = (props) => {
  const goto = useHistory();

  const clickHandler = async (soft) => {
    goto.push(`/software/${soft.id}`);
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
