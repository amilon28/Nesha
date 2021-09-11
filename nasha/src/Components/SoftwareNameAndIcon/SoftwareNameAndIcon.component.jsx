const SoftwareNameAndIcon = (props) => {
  return (
    <div className="softwareNameAndIcon">
      <img
        src={props.softwareIcon}
        alt="cisco packet tracer"
        className="softwarelogo"
      />
      <div className="softwareName">{props.softwareName}</div>
    </div>
  );
};

export default SoftwareNameAndIcon;
