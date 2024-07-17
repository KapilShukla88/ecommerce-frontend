"use client";
import React, { useContext } from "react";
import CheckoutSteps from "@components/checkout-steps";
import { CheckoutContext } from "./context";
import ShippingDetails from "./components/shipping-details";
import ConfirmOrderDetails from "./components/confirm-order-details";
import Payment from "./components/payment";

const CheckOutComponentView = () => {
  const { activePage } = useContext(CheckoutContext);

  const checkoutComponents = new Map([
    [0, <ShippingDetails key={0} />],
    [1, <ConfirmOrderDetails key={1} />],
    [2, <Payment key={2} />],
  ]);
  return (
    <div className="p-4 flex justify-center">
      <div className="md:w-10/12">
        <CheckoutSteps activeStep={activePage} />
        <div>{checkoutComponents.get(activePage)}</div>
      </div>
    </div>
  );
};

export default CheckOutComponentView;
