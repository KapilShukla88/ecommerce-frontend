import StarRatingComponent from "@components/star-rating-component";
import React, { useCallback } from "react";

import StarIcon from "src/resources/icons/star-icon";
import UIButton from "src/widgets/ui-button";
import UIModal from "src/widgets/ui-modal";

const borderClassName = " border-b-[1.5px] border-t-[1.5px] border-gray-300";

interface iProductIntroComponentViewParams {
  noOfProducts: number;
  productDetails: any;
  productId: string;
  isLoggedIn: boolean;
  starPosition: number;
  comment: string;
  isReviewModalOpen: boolean;
  handleOnDecreaseProducts(): void;
  handleOnIncreaseProducts(): void;
  handleOnHoverStar(_: number): void;
  handleOnChangeComment(_: string): void;
  toggleReviewModal(): void;
  onSubmitReview(_productId: string): void;
  handleAddToCart(_productId: string): void;
  handleToastNotification(_type: string): void;
}

const SubmitReviewComponent = ({
  starPosition,
  comment = "",
  handleOnHoverStar,
  handleOnChangeComment,
  isReviewModalOpen,
  toggleReviewModal,
  onClick,
}: any) => {
  const handleComment = useCallback(
    (value: string) => {
      if (comment?.length >= 200) {
        return;
      }
      handleOnChangeComment(value);
    },
    [comment, handleOnChangeComment]
  );
  return (
    <UIModal
      backdrop={toggleReviewModal}
      onHide={toggleReviewModal}
      isOpen={isReviewModalOpen}
      headerTitle="Submit Review"
      header={true}
    >
      <div>
        <div className="flex gap-1 items-center">
          {[1, 2, 3, 4, 5]?.map((starsNumber: number, index: number) => {
            return (
              <div
                key={index}
                // onMouseOver={() => handleOnHoverStar(starsNumber)}
                // onMouseLeave={() => handleOnHoverStar(0)}
                onClick={() => handleOnHoverStar(starsNumber)}
                className="cursor-pointer"
              >
                <StarIcon
                  width={24}
                  height={24}
                  color={starPosition >= starsNumber ? "#FF914D" : "#C7C8CC"}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-4 border-[1px] rounded-md border-gray-400 p-1">
          <textarea
            rows={5}
            placeholder="Enter you comment"
            maxLength={200}
            onChange={(e: any) => handleComment(e.target.value)}
            className="resize-none w-full outline-none focus:ring-0 border-none focus:border-none "
          />
          <p className="text-xs font-medium my-1 text-black text-end">
            {comment?.length}/200
          </p>
        </div>
        <UIButton
          text="Submit"
          className="bg-blue-600 text-white font-medium text-base mt-3 py-2 px-4 rounded-md"
          onClick={onClick}
        />
      </div>
    </UIModal>
  );
};

const ProductIntroComponentView: React.FC<iProductIntroComponentViewParams> = ({
  noOfProducts = 0,
  productId = "",
  productDetails = {},
  isLoggedIn = false,
  starPosition = 0,
  comment = "",
  isReviewModalOpen = false,
  handleOnDecreaseProducts,
  handleOnIncreaseProducts,
  handleOnHoverStar = (f: number) => f,
  handleOnChangeComment = (f: string) => f,
  toggleReviewModal = () => {},
  onSubmitReview,
  handleAddToCart,
  handleToastNotification = (_: string) => _,
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
            onClick={
              !isLoggedIn
                ? () => handleToastNotification("cart")
                : () => handleAddToCart(productDetails?._id)
            }
            text="Add to cart"
            className={` text-white m-0 bg-[#FF914D] px-4 py-1 pb-2 rounded-full`}
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
            onClick={
              !isLoggedIn
                ? () => handleToastNotification("review")
                : toggleReviewModal
            }
            text="Submit Review"
            className="text-white m-0 bg-[#FF914D] px-6 py-1 pb-2 rounded-full max-w-fit"
          />
        </div>
      </div>
      <SubmitReviewComponent
        handleOnHoverStar={handleOnHoverStar}
        starPosition={starPosition}
        comment={comment}
        isReviewModalOpen={isReviewModalOpen}
        toggleReviewModal={toggleReviewModal}
        handleOnChangeComment={handleOnChangeComment}
        onClick={() => onSubmitReview(productDetails?._id)}
      />
    </div>
  );
};

export default ProductIntroComponentView;
