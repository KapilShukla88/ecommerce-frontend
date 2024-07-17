"use client";
import React from "react";
import CheckoutStepsView from "./checkout-steps-view";

interface iCheckoutStepsParams {
  activeStep?: number;
}

const CheckoutSteps: React.FC<iCheckoutStepsParams> = ({ activeStep = 0 }) => {
  return <CheckoutStepsView activeStep={activeStep} />;
};

export default CheckoutSteps;
