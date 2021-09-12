import like from "../../assets/img/heart.svg";
import view from "../../assets/img/view.svg";
import calendar from "../../assets/img/calendar.svg";
import { useState, useEffect } from "react";

const Feature = (props) => {
  console.log("Data in Feature", new Date(props.date));
  const [time, setTime] = useState(new Date(props.date));
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const getDate = () => {
    setYear(time.getFullYear());
    setMonth(time.getMonth() + 1);
    setDay(time.getDate());
  };
  useEffect(() => getDate());
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
      <div className="featureItem__data featureItem__data--date">
        <img src={calendar} alt="date" />
        <span className="amount">{`${year}/${month}/${day}`}</span>
      </div>
    </div>
  );
};

export default Feature;
