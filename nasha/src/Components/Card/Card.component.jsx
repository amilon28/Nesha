import "../CardList/CardList.style.css";
import heart from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.icon} alt="Program Icon" />
      </div>
      <div className="card__infos">
        <div className="card__title">{props.title}</div>
        <div className="card__item">
          <img src={heart} alt="likes" />
          <span>{props.numOfLikes}</span>
        </div>
        <div className="card__item">
          <img src={view} alt="views" />
          <span>{props.numOfViews}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
