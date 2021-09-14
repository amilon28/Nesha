import heart from "../../assets/img/heart.svg";
import Reviews from "./Reviews.component";
const getDate = (d) => {
  const time = new Date(d);
  const day = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  return `${year}/${month}/${day}`;
};

const Review = ({ comment }) => {
  return (
    <>
      <div className="review__item">
        <div className="review__date">
          <h3>{comment.username}</h3>
          <div>{getDate(comment.date_submitted)}</div>
          <div>
            <img src={heart} alt="heart" className="review__icon" />
            <span> {comment.likes}</span>
          </div>
        </div>
        <p className="review__text">{comment.text}</p>
      </div>
      <Reviews className="child_review" comments={Comment.children} />
    </>
  );
};

export default Review;
