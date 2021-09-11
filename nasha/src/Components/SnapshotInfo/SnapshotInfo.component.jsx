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
        {props.courseLinks.length > 0 &&
          props.courseLinks.map((el) => {
            return <a href={el.url}>{el.url}</a>;
          })}
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Review URLs">
        {props.reviewlinks.length > 0 &&
          props.reviewlinks.map((el) => {
            return <a href={el.url}>{el.url}</a>;
          })}
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Platforms">
        {props.platforms.length > 0 &&
          props.platforms.map((el) => {
            return <p>{el.name}</p>;
          })}
      </SnapshotInfoItem>
      <SnapshotInfoItem title="License">
        {props.licenses.length > 0 &&
          props.licenses.map((el) => {
            return <p>{el.name}</p>;
          })}
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Labs">
        {props.labs.length > 0 &&
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
