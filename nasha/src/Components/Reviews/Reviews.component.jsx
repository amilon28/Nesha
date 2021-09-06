import Title from "../Title/Title.component";
import ReviewItem from "../ReviewItem/ReviewItem.component";

const Reviews = (props) => {
  return (
    <div className="review">
      <Title>Reviews</Title>
      <ReviewItem
        username="Amin"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
        date="aguest 14, 2018"
        like={5}
      />
      <ReviewItem
        username="Amin"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
        date="aguest 14, 2018"
        like={5}
      />
      <ReviewItem
        username="Amin"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
        date="aguest 14, 2018"
        like={5}
      />
    </div>
  );
};

export default Reviews;
