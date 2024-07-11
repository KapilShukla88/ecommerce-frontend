import StarRatingComponent from "@components/star-rating-component";
import React from "react";

import StarIcon from "src/resources/icons/star-icon";
import UIButton from "src/widgets/ui-button";

const borderClassName = " border-b-[1.5px] border-t-[1.5px] border-gray-300";

interface iProductIntroComponentViewParams {
  noOfProducts: number;
  productDetails: any;
  productId: string;
  isLoggedIn: boolean;
  handleOnDecreaseProducts(): void;
  handleOnIncreaseProducts(): void;
}

const ProductIntroComponentView: React.FC<iProductIntroComponentViewParams> = ({
  noOfProducts = 0,
  productId = "",
  productDetails = {},
  isLoggedIn = false,
  handleOnDecreaseProducts,
  handleOnIncreaseProducts,
}) => {
  return (
    <div className="w-full">
      <div>
        <div className="py-2">
          <h1 className="text-2xl font-semibold">
            {productDetails?.name || ""}
          </h1>
          <p className="text-gray-400 text-sm">#{productId}</p>
        </div>
        <div className={`flex gap-2 text-center  py-2 ${borderClassName}`}>
          <div className="flex items-center gap-1">
            <StarRatingComponent
              rating={productDetails?.product_ratings || 0}
            />
          </div>
          <div>
            <p className="text-sm text-gray-400">
              ({productDetails?.numOfReviews || 0} review)
            </p>
          </div>
        </div>
        <div className="my-4">
          <p className="text-3xl font-semibold">
            ₹ {productDetails?.price || 0}
          </p>
        </div>
        <div className="flex gap-3">
          {/* number of items to increase and decrease products */}
          <div className="flex gap-2">
            <UIButton
              onClick={handleOnDecreaseProducts}
              text="-"
              className="bg-gray-500 text-xl text-white font-semibold m-0 px-3 flex items-center justify-center"
            />
            <div className="w-10">
              <p className="text-xl font-semibold text-black text-center">
                {noOfProducts}
              </p>
            </div>
            <UIButton
              onClick={handleOnIncreaseProducts}
              text="+"
              className="bg-gray-500 text-xl text-white m-0 font-semibold px-3 flex items-center justify-center"
            />
          </div>
          <UIButton
            onClick={!isLoggedIn ? () => {} : () => {}}
            text="Add to cart"
            className={`${
              !isLoggedIn ? "opacity-75" : "opacity-100"
            } text-white m-0 bg-[#FF914D] px-4 py-1 pb-2 rounded-full`}
          />
        </div>
        <div className={`flex items-center gap-1 py-2 ${borderClassName} mt-4`}>
          <p className="text-xl text-black font-semibold">Status :</p>
          <p
            className={`text-xl font-bold ${
              productDetails?.stock > 0 ? "text-green-500" : "text-red-500"
            } `}
          >
            {productDetails?.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
        </div>
        <div className="my-4 flex flex-col gap-4">
          <div>
            <p className="text-xl font-medium">Description :</p>
            <p className="text-md">{productDetails?.description || ""}</p>
          </div>
          <UIButton
            onClick={() => {}}
            text="Submit Review"
            className="text-white m-0 bg-[#FF914D] px-6 py-1 pb-2 rounded-full max-w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductIntroComponentView;
