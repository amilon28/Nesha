import Gallery from "../Gallery/Gallery.component";
import SnapshotInfo from "../SnapshotInfo/SnapshotInfo.component";

const SnapshotDetails = (props) => {
  return (
    <div className="snapshotDetails">
      <Gallery snapShots={props.snapShots} />
      <SnapshotInfo
        date={props.date}
        courseLinks={props.courseLinks}
        reviewlinks={props.reviewlinks}
        licenses={props.licenses}
        url={props.url}
        platforms={props.platforms}
        labs={props.labs}
      />
    </div>
  );
};

export default SnapshotDetails;
