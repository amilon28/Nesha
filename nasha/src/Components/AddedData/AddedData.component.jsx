import { useState } from "react";

const AddedData = (props) => {
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  setTime(new Date(props.date));
  setYear(time.getFullYear());
  setMonth(time.getMonth() + 1);
  setDay(time.getDate());
  return (
    <div className="addDate">
      <div className="date">{`${year} / ${month} / ${day}`}</div>
      <div className="title"> : تاریخ افزودن </div>
    </div>
  );
};

export default AddedData;
