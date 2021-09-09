import AddedData from "../AddedData/AddedData.component";
import SnapshotInfoItem from "../SnapshotInfoItem/SnapshotInfoItem.component";

const SnapshotInfo = () => {
  return (
    <div className="snapshotInfo">
      <AddedData />
      <SnapshotInfoItem title="URLs">
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://difwear.com/product/s1982">dif</a>
        <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGljlhhlfWFqRqtVpFdZrVBQZMT">
          mail
        </a>
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Course URLs">
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://difwear.com/product/s1982">dif</a>
        <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGljlhhlfWFqRqtVpFdZrVBQZMT">
          mail
        </a>
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Review URLs">
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://difwear.com/product/s1982">dif</a>
        <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGljlhhlfWFqRqtVpFdZrVBQZMT">
          mail
        </a>
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Platforms">
        <p>Linux</p>
        <p>Mac</p>
        <p>Windows</p>
      </SnapshotInfoItem>
      <SnapshotInfoItem title="License">
        <p>Linux</p>
        <p>Mac</p>
        <p>Windows</p>
      </SnapshotInfoItem>
      <SnapshotInfoItem title="Labs">
        <a href="/#">lab1</a>
        <a href="/#">lab2</a>
        <a href="/#">lab3</a>
      </SnapshotInfoItem>
      <div className="status">
        <div>
          <input type="radio" name="status" id="on" />
          <label htmlFor="on">آنلاین</label>
        </div>
        <div>
          <input type="radio" name="status" id="off" />
          <label htmlFor="off">آفلاین</label>
        </div>
      </div>
    </div>
  );
};

export default SnapshotInfo;
