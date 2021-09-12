import { useState } from "react";

const AddedData = (props) => {
  console.log("props.date --->", props.date);
  // const [time, setTime] = useState(new Date(props.date));
  // const [year, setYear] = useState();
  // const [month, setMonth] = useState();
  // const [day, setDay] = useState();
  // // setTime(new Date(temp));
  // setTime(new Date(props.date));
  // console.log("Time -->", time);
  // setYear(time.getFullYear());
  // console.log("Year -->", year);
  // setMonth(time.getMonth() + 1);
  // console.log("Month -->", month);
  // setDay(time.getDate());
  // console.log("Day -->", day);
  return (
    <div className="addDate">
      <div className="date">{props.date}</div>
      {/* <div className="date">{`${year} / ${month} / ${day}`}</div> */}
      <div className="title"> : تاریخ افزودن </div>
    </div>
  );
};

export default AddedData;
