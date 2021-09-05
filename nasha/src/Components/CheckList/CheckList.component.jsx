import CheckItem from "../CheckItem/CheckItem.component";

const CheckList = (props) => {
  return (
    <div className="checkList">
      <CheckItem label="آفلاین" />
      <CheckItem label="آنلاین" />
      <CheckItem label="آموزه برای آن موجود باشد" />
      <CheckItem label="نقد برای آن موجود باشد" />
    </div>
  );
};

export default CheckList;
