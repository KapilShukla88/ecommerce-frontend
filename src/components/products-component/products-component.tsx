"use client";
import React from "react";
import ProductsComponentView from "./products-component-view";
import useProductsComponentController from "./products-component-controller";

const ProductsComponent: React.FC<{}> = () => {
  const { products, handleOnBuyProducts, handleAddProductOnCart } =
    useProductsComponentController();
  return (
    <ProductsComponentView
      products={products}
      handleOnBuyProducts={handleOnBuyProducts}
      handleAddProductOnCart={handleAddProductOnCart}
    />
  );
};

export default ProductsComponent;
