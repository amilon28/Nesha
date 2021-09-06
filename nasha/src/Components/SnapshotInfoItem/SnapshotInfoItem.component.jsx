const SnapshotInfoItem = (props) => {
  return (
    <div className="snapshotInfoItem">
      <div className="snapshotItem">
        <div className="snapshot__title"> {props.title} :</div>
        <div className="snapshot__links">{props.children}</div>
      </div>
    </div>
  );
};

export default SnapshotInfoItem;
