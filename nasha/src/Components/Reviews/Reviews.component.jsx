import Line from "../Line/Line.component";
import Review from "./Review.component";

const Reviews = (props) => {
  console.log("List of comments", props.comments);
  const classes = "review " + props.className;
  return (
    <div className={classes}>
      {props.comments &&
        props.comments.map((c, index) => (
          <div key={index}>
            <Review comment={c.comment} />
            {/* chlid comment */}
            <Line className="line--review" />
          </div>
        ))}
    </div>
  );
};

export default Reviews;
