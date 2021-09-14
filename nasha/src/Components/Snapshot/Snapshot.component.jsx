import SnapshotDetails from "../SnapshotDetails/SnapshotDetails.component";

// import pdf from "../../assets/Monthly Salary.pdf";

const Snapshot = (props) => {
  return (
    <div className="snapshot">
      <SnapshotDetails
        date={props.date}
        courseLinks={props.courseLinks}
        reviewlinks={props.reviewlinks}
        snapShots={props.snapShots}
        licenses={props.licenses}
        url={props.url}
        platforms={props.platforms}
        labs={props.labs}
      />
      <div className="snapshot__pdf">
        <h3>pdf file:</h3>
        <iframe src={7} frameborder="0" title="pdf"></iframe>
      </div>
    </div>
  );
};

export default Snapshot;
