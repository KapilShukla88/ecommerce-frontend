import React from "react";
import ProductIntroComponentView from "./product-intro-component-view";
import useProductIntroComponentController from "./product-intro-component-controller";

const ProductIntroComponent: React.FC<{}> = () => {
  const { noOfProduct, handleOnDecreaseProducts, handleOnIncreaseProducts } =
    useProductIntroComponentController();
  return (
    <ProductIntroComponentView
      noOfProducts={noOfProduct}
      handleOnDecreaseProducts={handleOnDecreaseProducts}
      handleOnIncreaseProducts={handleOnIncreaseProducts}
    />
  );
};

export default ProductIntroComponent;
