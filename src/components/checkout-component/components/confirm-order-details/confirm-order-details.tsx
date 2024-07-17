import React from "react";
import ConfirmOrderDetailsView from "./confirm-order-details-view";
import useConfirmOrderDetailsController from "./confirm-order-details-controller";

const ConfirmOrderDetails: React.FC<{}> = () => {
  const {
    cartItems,
    subtotal,
    shippingCharges,
    tax,
    totalPrice,
    address,
    phoneNo,
    userName,
  } = useConfirmOrderDetailsController();
  return (
    <ConfirmOrderDetailsView
      cartItems={cartItems}
      subtotal={subtotal}
      shippingCharges={shippingCharges}
      tax={tax}
      totalPrice={totalPrice}
      address={address}
      phoneNo={phoneNo}
      userName={userName}
    />
  );
};

export default ConfirmOrderDetails;
