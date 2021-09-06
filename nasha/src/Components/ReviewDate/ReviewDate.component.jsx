import heart from "../../assets/img/heart.svg";

const ReviewDate = (props) => {
  return (
    <div className="review__date">
      <h3>{props.username}</h3>
      <div>{props.date}</div>
      <div>
        <img src={heart} alt="heart" className="review__icon" />
        <span> {props.like}</span>
      </div>
    </div>
  );
};

export default ReviewDate;
