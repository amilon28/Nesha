import Line from "../Line/Line.component";
import ReviewDate from "../ReviewDate/ReviewDate.component";

const ReviewItem = (props) => {
  return (
    <div>
      <div className="review__item">
        <ReviewDate
          username={props.username}
          date={props.date}
          like={props.like}
        />
        <p className="review__text">{props.text}</p>
      </div>
      <Line className="line--review" />
    </div>
  );
};

export default ReviewItem;
