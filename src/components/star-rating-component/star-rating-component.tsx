import React from "react";
import StarRatingComponentView from "./star-rating-component-view";

const StarRatingComponent: React.FC<any> = ({ rating = 0 }) => {
  return <StarRatingComponentView rating={rating} />;
};

export default StarRatingComponent;
