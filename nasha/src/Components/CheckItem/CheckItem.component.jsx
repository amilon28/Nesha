const CheckItem = (props) => {
  return (
    <div className="checkitem">
      <input type="checkbox" id="item" className="checkitem__input" />
      <label htmlFor="item">{props.label}</label>
    </div>
  );
};

export default CheckItem;
