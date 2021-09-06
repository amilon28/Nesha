import SoftwareStatics from "../SoftwareStatics/SoftwareStatics.component";
import SoftwareNameAndIcon from "../SoftwareNameAndIcon/SoftwareNameAndIcon.component";

const SoftwareDetails = (props) => {
  return (
    <div className="software__details">
      <SoftwareNameAndIcon softwareName={props.softwareName} />
      <SoftwareStatics like={props.like} view={props.view} />
    </div>
  );
};

export default SoftwareDetails;
