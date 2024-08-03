import StarRatingComponent from "@components/star-rating-component";
import Image from "next/image";
import React from "react";
import StarIcon from "src/resources/icons/star-icon";
import UIModal from "src/widgets/ui-modal";

const DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ut5ImIGij7xxSShxWk-uyCJbjkIdLYpTWNJTJTFnPA&s";

const ReviewsCard = ({ img = "", name = "", review = "", rating = 0 }: any) => {
  return (
    <div className="border-2 w-[25rem] border-gray-300 p-3 rounded-md">
      <div className="items-center flex flex-col">
        <div className="rounded-full">
          <Image src={img} width={100} height={100} alt="" />
        </div>
        <p className="text-md font-semibold">{name}</p>
      </div>
      <div className="mt-3">
        <StarRatingComponent rating={rating} />
        <div className="mt-2">
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

const ProductReviewComponentView: React.FC<{ reviews: any }> = ({
  reviews = [],
}) => {
  if (!reviews?.length) {
    return <></>;
  }
  return (
    <div className="my-5">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold text-center">Reviews</p>
        <div className="h-[0.5px] w-1/2 bg-gray-300 m-auto" />
      </div>
      <div className="mt-10 flex justify-center md:justify-start overflow-x-auto">
        <div className="flex gap-2 flex-wrap">
          {reviews?.map((review: any) => {
            return (
              <ReviewsCard
                key={review?._id}
                img={review?.img || DEFAULT_IMAGE}
                review={review?.comment || ""}
                rating={review?.rating || 0}
                name={review?.name || ""}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductReviewComponentView;
