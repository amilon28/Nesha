import "../CardList/CardList.style.css";
import heart from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src={"https://hassan1245.pythonanywhere.com" + props.icon}
          alt="Program Icon"
        />
      </div>
      <div className="card__infos">
        <div className="card__title">{props.title}</div>
        <div className="card__item">
          <img src={heart} alt="likes" />
          <sapn>{props.numOfLikes}</sapn>
        </div>
        <div className="card__item">
          <img src={view} alt="views" />
          <sapn>{props.numOfViews}</sapn>
        </div>
      </div>
    </div>
  );
};

export default Card;
