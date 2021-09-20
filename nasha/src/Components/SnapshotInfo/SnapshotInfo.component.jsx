import AddedData from "../AddedData/AddedData.component";
import SnapshotInfoItem from "../SnapshotInfoItem/SnapshotInfoItem.component";

const SnapshotInfo = (props) => {
  return (
    <div className="snapshotInfo">
      <AddedData date={props.date} />
      <SnapshotInfoItem title="URLs">
        <a href={props.url}>props.url</a>
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Course URLs">
        {props.courseLinks &&
          props.courseLinks.map((el, i) => {
            return <a href={el.url}>{`URL${i + 1}`}</a>;
          })}
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Review URLs">
        {props.reviewlinks &&
          props.reviewlinks.map((el, i) => {
            return <a href={el.url}>{`URL${i + 1}`}</a>;
          })}
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Platforms">
        {props.platforms &&
          props.platforms.map((el) => {
            return <p>{el.name}</p>;
          })}
      </SnapshotInfoItem>
      <SnapshotInfoItem title="License">
        {props.licenses &&
          props.licenses.map((el) => {
            return <p>{el.name}</p>;
          })}
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Labs">
        {props.labs &&
          props.labs.map((el) => {
            return <p>{el.name}</p>;
          })}
      </SnapshotInfoItem>
      <div className="status">
        <div>
          <input type="checkbox" id="off" />
          <label htmlFor="off">آفلاین</label>
        </div>
        <div>
          <input type="checkbox" id="on" />
          <label htmlFor="on">آنلاین</label>
        </div>
      </div>
    </div>
  );
};

export default SnapshotInfo;
