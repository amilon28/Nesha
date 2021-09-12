const SoftwareNameAndIcon = (props) => {
  return (
    <div className="softwareNameAndIcon">
      <img
        src={`https://hassan1245.pythonanywhere.com${props.softwareIcon}`}
        alt="softwareIcon"
        className="softwarelogo"
      />
      <div className="softwareName">{props.softwareName}</div>
    </div>
  );
};

export default SoftwareNameAndIcon;
