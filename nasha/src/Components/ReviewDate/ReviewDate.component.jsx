import { useEffect, useState } from "react";
import heart from "../../assets/img/heart.svg";

const ReviewDate = (props) => {
  const [time, setTime] = useState(new Date(props.date));
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const getDate = () => {
    // setTime(new Date(temp));
    setTime(new Date(props.date));

    setYear(time.getFullYear());

    setMonth(time.getMonth() + 1);

    setDay(time.getDate());
  };

  useEffect(() => {
    getDate();
  }, []);
  return (
    <div className="review__date">
      <h3>{props.username}</h3>
      <div>{`${year}/${month}/${day}`}</div>
      <div>
        <img src={heart} alt="heart" className="review__icon" />
        <span> {props.like}</span>
      </div>
    </div>
  );
};

export default ReviewDate;
