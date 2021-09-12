const SoftwareNameAndIcon = (props) => {
  const urlImg = "https://hassan1245.pythonanywhere.com";
  return (
    <div className="softwareNameAndIcon">
      <img
        src={
          props.softwareIcon.includes(urlImg)
            ? props.softwareIcon
            : `https://hassan1245.pythonanywhere.com${props.softwareIcon}`
        }
        alt="softwareIcon"
        className="softwarelogo"
      />
      <div className="softwareName">{props.softwareName}</div>
    </div>
  );
};

export default SoftwareNameAndIcon;
