const SelectBox = (props) => {
  return (
    <div className="selectbox">
      <div className="selectbox__title">:{props.title}</div>
      <select className="selectbox__input">
        <option value="" disabled selected hidden>
          Select
        </option>
      </select>
    </div>
  );
};

export default SelectBox;
