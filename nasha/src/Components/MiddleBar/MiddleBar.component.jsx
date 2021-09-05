import MiddleCard from "../MiddleCard/MiddleCard.component";
import cisco from "../../assets/img/cisco_logo_icon.svg";
import wireShark from "../../assets/img/wire-shark.svg";

const MiddleBar = () => {
  return (
    <div className="middle">
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
