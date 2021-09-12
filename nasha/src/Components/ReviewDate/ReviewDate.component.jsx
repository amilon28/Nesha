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
    console.log("Time -->", time);
    setYear(time.getFullYear());
    console.log("Year -->", year);
    setMonth(time.getMonth() + 1);
    console.log("Month -->", month);
    setDay(time.getDate());
    console.log("Day -->", day);
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
