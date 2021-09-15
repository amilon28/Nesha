import SoftwareStatics from "../SoftwareStatics/SoftwareStatics.component";
import SoftwareNameAndIcon from "../SoftwareNameAndIcon/SoftwareNameAndIcon.component";

const SoftwareDetails = (props) => {
  return (
    <div className="software__details">
      <SoftwareNameAndIcon
        softwareName={props.softwareName}
        softwareIcon={props.softwareIcon}
      />
      <SoftwareStatics
        softwareName={props.softwareName}
        like={props.like}
        view={props.view}
        id={props.id}
      />
    </div>
  );
};

export default SoftwareDetails;
