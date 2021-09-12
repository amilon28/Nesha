import MiddleCard from "../MiddleCard/MiddleCard.component";
import cisco from "../../assets/img/cisco_logo_icon.svg";
import wireShark from "../../assets/img/wire-shark.svg";

const MiddleBar = (props) => {
  return (
    <div className="middle">
      {props.softwares.map((software) => {
        return (
          <MiddleCard
            src={`https://hassan1245.pythonanywhere.com/media/${software.icon_picture}`}
            likes={software.likes}
            views={software.views}
            date={software.date}
            alt="program icon"
          />
        );
      })}
      <MiddleCard src={cisco} alt="cisco packet tracer" />
      <MiddleCard src={wireShark} alt="wire shark" />
      <MiddleCard src={cisco} alt="cisco packet tracer" />
      <MiddleCard src={wireShark} alt="wire shark" />
      <MiddleCard src={cisco} alt="cisco packet tracer" />
      <MiddleCard src={wireShark} alt="wire shark" />
    </div>
  );
};

export default MiddleBar;
