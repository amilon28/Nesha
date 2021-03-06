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
        <embed
          src={props.pdf}
          type="application/pdf"
          frameborder="0"
          title="pdf"
          frameBorder="0"
          scrolling="auto"
          height="100%"
          width="100%"
        ></embed>
      </div>
    </div>
  );
};

export default Snapshot;
