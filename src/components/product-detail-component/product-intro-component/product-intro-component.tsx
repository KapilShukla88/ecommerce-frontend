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
    handleOnDecreaseProducts,
    handleOnIncreaseProducts,
  } = useProductIntroComponentController(productDetails?.stock || 0);
  return (
    <ProductIntroComponentView
      noOfProducts={noOfProduct}
      productDetails={productDetails}
      productId={productId}
      isLoggedIn={isLoggedIn}
      handleOnDecreaseProducts={handleOnDecreaseProducts}
      handleOnIncreaseProducts={handleOnIncreaseProducts}
    />
  );
};

export default ProductIntroComponent;
