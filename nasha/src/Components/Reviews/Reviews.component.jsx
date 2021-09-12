import React, { useState, useEffect } from "react";
import Title from "../Title/Title.component";
import ReviewItem from "../ReviewItem/ReviewItem.component";

const Reviews = (props) => {
  const [comment, setComment] = useState();

  const fetchUsersComment = async () => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/${props.soft_id}/comments/?page=1`
      );

      if (!response.ok) throw Error("Something went wrong");

      const data = await response.json();
      setComment(data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUsersComment();
  }, []);
  return (
    <div className="review">
      <Title>Reviews</Title>
      {comment &&
        comment.map((c) => (
          <ReviewItem
            username={c.username}
            text={c.text}
            date={c.date_submitted}
            like={c.likes}
          />
        ))}
    </div>
  );
};

export default Reviews;
