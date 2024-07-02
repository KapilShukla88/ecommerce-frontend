"use client";
import React from "react";
import ProductsComponentView from "./products-component-view";
import useProductsComponentController from "./products-component-controller";

const ProductsComponent: React.FC<{}> = () => {
  const { products, handleOnBuyProducts } = useProductsComponentController();
  return (
    <ProductsComponentView
      products={products}
      handleOnBuyProducts={handleOnBuyProducts}
    />
  );
};

export default ProductsComponent;
