import React from "react";
import { Review as ReviewType } from "../../types/types";
import Button from "../Button/Button";
import { StyledReview } from "./Review.styles";

interface ReviewProps {
  review: ReviewType;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <StyledReview>
      <h3>{review?.author}</h3>
      <p>{review?.created_at}</p>
      <p>
        {review?.content?.slice(0, 150)} {(review?.content as string)?.length > 200 ? "..." : ""}{" "}
      </p>
      <Button href={review?.url as string} target="_blank">
        See Full Review
      </Button>
    </StyledReview>
  );
};

export default Review;
