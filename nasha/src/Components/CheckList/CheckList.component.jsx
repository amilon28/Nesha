
const CheckList = (props) => {
  return (
    <div className="checkList">
      <div className="onOff">
        <div className="checkitem">
          <input type="checkbox" id="item" className="checkitem__input" />
          <label htmlFor="item">آنلاین</label>
        </div>
        <div className="checkitem">
          <input type="checkbox" id="item" className="checkitem__input" />
          <label htmlFor="item">آفلاین</label>
        </div>
      </div>
      <div className="checkitem">
        <input type="checkbox" id="item" className="checkitem__input" />
        <label htmlFor="item">آموزه برای آن موجود باشد</label>
      </div>
      <div className="checkitem">
        <input type="checkbox" id="item" className="checkitem__input" />
        <label htmlFor="item">نقد برای آن موجود باشد</label>
      </div>
    </div>
  );
};

export default CheckList;
