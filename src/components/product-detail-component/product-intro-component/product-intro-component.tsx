import React from "react";
import ProductIntroComponentView from "./product-intro-component-view";
import useProductIntroComponentController from "./product-intro-component-controller";

const ProductIntroComponent: React.FC<{
  productDetails: any;
  productId: string;
}> = ({ productDetails = {}, productId = "" }) => {
  const {
    noOfProduct,
    isLoggedIn,
    starPosition,
    comment,
    isReviewModalOpen,
    handleOnDecreaseProducts,
    handleOnIncreaseProducts,
    handleOnHoverStar,
    handleOnChangeComment,
    toggleReviewModal,
    onSubmitReview,
    handleAddToCart,
    handleToastNotification,
  } = useProductIntroComponentController(productDetails?.stock || 0);
  return (
    <ProductIntroComponentView
      noOfProducts={noOfProduct}
      productDetails={productDetails}
      productId={productId}
      isLoggedIn={isLoggedIn}
      starPosition={starPosition}
      comment={comment}
      isReviewModalOpen={isReviewModalOpen}
      handleOnDecreaseProducts={handleOnDecreaseProducts}
      handleOnIncreaseProducts={handleOnIncreaseProducts}
      handleOnHoverStar={handleOnHoverStar}
      handleOnChangeComment={handleOnChangeComment}
      toggleReviewModal={toggleReviewModal}
      onSubmitReview={onSubmitReview}
      handleAddToCart={handleAddToCart}
      handleToastNotification={handleToastNotification}
    />
  );
};

export default ProductIntroComponent;
