import React from "react";
import StarIcon from "src/resources/icons/star-icon";

const StarIconComponent = ({ filled }: any) => (
  <StarIcon
    width={15}
    height={15}
    color={` ${filled ? "#FF914D" : "#C7C8CC"}`}
  />
);
const totalStars = 5;

const StarRatingComponentView: React.FC<any> = ({ rating = 0 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <StarIconComponent key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default StarRatingComponentView;
