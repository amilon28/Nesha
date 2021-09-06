import SnapshotDetails from "../SnapshotDetails/SnapshotDetails.component";

import pdf from "../../assets/Monthly Salary.pdf";

const Snapshot = () => {
  return (
    <div className="snapshot">
      <SnapshotDetails />
      <div className="snapshot__pdf">
        <h3>pdf file:</h3>
        <iframe src={pdf} frameborder="0" title="pdf"></iframe>
      </div>
    </div>
  );
};

export default Snapshot;
