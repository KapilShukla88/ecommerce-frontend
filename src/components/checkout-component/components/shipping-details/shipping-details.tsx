"use client";
import React from "react";
import ShippingDetailsView from "./shipping-details-view";
import useShippingDetailsController from "./shipping-details-controller";

const ShippingDetails: React.FC<{}> = () => {
  const { getFormValues, handleOnChange, shippingSubmit } =
    useShippingDetailsController();
  return (
    <ShippingDetailsView
      handleOnChange={handleOnChange}
      getFormValues={getFormValues}
      shippingSubmit={shippingSubmit}
    />
  );
};

export default ShippingDetails;
