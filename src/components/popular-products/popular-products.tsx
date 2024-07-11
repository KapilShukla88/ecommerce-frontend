"use client";
import React from "react";
import PopularProductsView from "./popular-products-view";
import usePopularProductsController from "./popular-products-controller";

const PopularProducts: React.FC<{}> = () => {
  const {
    popularProducts,
    handleOnAddToCartProduct,
    handleOnClickProductView,
  } = usePopularProductsController();
  return (
    <PopularProductsView
      data={popularProducts}
      handleOnAddToCartProduct={handleOnAddToCartProduct}
      handleOnClickProductView={handleOnClickProductView}
    />
  );
};

export default PopularProducts;
