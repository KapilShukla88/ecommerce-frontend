"use client";
import React from "react";

import ProductDetailComponentView from "./product-detail-component-view";
import useProductDetailComponentController from "./product-detail-component-controller";

const ProductDetailComponent: React.FC<{}> = () => {
  const { productDetails, productId } = useProductDetailComponentController();
  return (
    <ProductDetailComponentView data={productDetails} productId={productId} />
  );
};

export default ProductDetailComponent;
