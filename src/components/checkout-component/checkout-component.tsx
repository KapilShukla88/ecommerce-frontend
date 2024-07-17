"use client";
import React from "react";
import CheckOutComponentView from "./checkout-component-view";
import CheckoutContextProvider from "./context";

const CheckoutComponent = () => {
  return (
    <CheckoutContextProvider>
      <CheckOutComponentView />
    </CheckoutContextProvider>
  );
};

export default CheckoutComponent;
