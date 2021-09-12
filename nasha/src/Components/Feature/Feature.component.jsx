import like from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import calendar from "../../assets/img/calendar.svg";

const Feature = (props) => {
  return (
    <div className="featureItem">
      <div className="featureItem__data">
        <img src={like} alt="views" />
        <span className="amount">{props.likes}</span>
      </div>
      <div className="featureItem__data">
        <img src={view} alt="likes" />
        <span className="amount">{props.views}</span>
      </div>
      <div className="featureItem__data">
        <img src={calendar} alt="date" />
        <span className="amount">{props.date}</span>
      </div>
    </div>
  );
};

export default Feature;
