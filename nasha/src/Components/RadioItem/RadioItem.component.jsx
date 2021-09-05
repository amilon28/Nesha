const RadioItem = (props) => {
  return (
    <div className="radioItem">
      <input type="radio" name={props.name} className="radio__item" />
      <label>{props.label}</label>
    </div>
  );
};

export default RadioItem;
