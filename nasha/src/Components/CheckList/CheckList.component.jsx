import CheckItem from "../CheckItem/CheckItem.component";

const CheckList = (props) => {
  return (
    <div className="checkList">
      <div className="onOff">
        <CheckItem label="آفلاین" />
        <CheckItem label="آنلاین" />
      </div>
      <CheckItem label="آموزه برای آن موجود باشد" />
      <CheckItem label="نقد برای آن موجود باشد" />
    </div>
  );
};

export default CheckList;
