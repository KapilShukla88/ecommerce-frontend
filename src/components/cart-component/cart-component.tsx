"use client";
import React from "react";
import CartComponentView from "./cart-component-view";
import useCartComponentController from "./cart-component-controller";

const CartComponent: React.FC<{}> = () => {
  const {
    cartData,
    totalPrice,
    handleOnDeleteCartItem,
    handleOnProceedToCheckout,
    handleOrdersButton
  } = useCartComponentController();
  return (
    <CartComponentView
      data={cartData}
      totalPrice={totalPrice}
      handleOnDeleteCartItem={handleOnDeleteCartItem}
      handleOnProceedToCheckout={handleOnProceedToCheckout}
      handleOrdersButton={handleOrdersButton}
    />
  );
};

export default CartComponent;
