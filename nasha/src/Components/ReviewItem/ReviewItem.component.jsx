import Line from "../Line/Line.component";
import ReviewDate from "../ReviewDate/ReviewDate.component";
import Reviews from "./ReviewItem.component";
const ReviewItem = (props) => {
  return (
    <div key={Math.random()}>
      <div className="review__item">
        <ReviewDate
          username={props.username}
          date={props.date}
          like={props.like}
        />
        <p className="review__text">{props.text}</p>
        <Reviews comments={Comment.children} />
      </div>
      <Line className="line--review" />
    </div>
  );
};

export default ReviewItem;
