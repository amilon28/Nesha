import cisco from "../../assets/img/cisco_logo_icon.svg";

const SoftwareNameAndIcon = (props) => {
  return (
    <div className="softwareNameAndIcon">
      <img src={cisco} alt="cisco packet tracer" className="softwarelogo" />
      <div className="softwareName">{props.softwareName}</div>
    </div>
  );
};

export default SoftwareNameAndIcon;
