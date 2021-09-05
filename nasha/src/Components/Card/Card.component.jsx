import "../CardList/CardList.style.css";

const Card = (props) => {
  return <div className="card">{props.text}</div>;
};

export default Card;
