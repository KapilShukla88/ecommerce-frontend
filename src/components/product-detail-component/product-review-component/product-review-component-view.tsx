import Image from "next/image";
import React from "react";
import StarIcon from "src/resources/icons/star-icon";

const usersReviews = [
  {
    id: 1,
    name: "Kapil Shukla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ut5ImIGij7xxSShxWk-uyCJbjkIdLYpTWNJTJTFnPA&s",
    rating: 4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    name: "Krishna",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ut5ImIGij7xxSShxWk-uyCJbjkIdLYpTWNJTJTFnPA&s",
    rating: 2,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const ReviewsCard = ({ img = "", name = "", review = "" }: any) => {
  return (
    <div className="border-2 w-[25rem] border-gray-300 p-3 rounded-md">
      <div className="items-center flex flex-col">
        <div className="rounded-full">
          <Image src={img} width={100} height={100} alt="" />
        </div>
        <p className="text-md font-semibold">{name}</p>
      </div>
      <div className="mt-3">
        <div className="flex gap-1">
          <StarIcon color="#FF914D" width={15} height={15} />
          <StarIcon color="#FF914D" width={15} height={15} />

          <StarIcon color="#FF914D" width={15} height={15} />
        </div>
        <div className="mt-2">
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

const ProductReviewComponentView: React.FC<{}> = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold text-center">Reviews</p>
        <div className="h-[0.5px] w-1/2 bg-gray-300 m-auto" />
      </div>
      <div className="mt-10">
        <div className="flex gap-2 flex-wrap">
          {usersReviews?.map((review: any) => {
            return (
              <ReviewsCard
                key={review?.id}
                img={review?.img}
                review={review?.review}
                name={review?.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductReviewComponentView;
