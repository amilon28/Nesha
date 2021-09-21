import plusCircle from "../../assets/img/plus-circle.svg";

const LeftBarItem = (props) => {
  return (
    <li className="left__item">
      <img src={plusCircle} alt="plus-sign" className="icon" />
      <p className="text">{props.text}</p>
    </li>
  );
};

export default LeftBarItem;
