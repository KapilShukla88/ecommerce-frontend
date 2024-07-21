"use client";

import { CheckoutContext } from "@components/checkout-component/context";
import { useAppSelector } from "@store/configure-store";
import { getUserDetails } from "@store/splices/entities/auth";
import { getCartData, getShippingInfo } from "@store/splices/entities/cart";
import { useCallback, useContext } from "react";

const useConfirmOrderDetailsController = () => {
  const cartItems = useAppSelector(getCartData);
  const shippingInfo = useAppSelector(getShippingInfo);
  const { userName = "" } = useAppSelector(getUserDetails);

  const { setActivePage } = useContext(CheckoutContext);

  const subtotal = cartItems?.reduce(
    (acc: any, current: any) =>
      acc + current?.quantity * current?.product?.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + shippingCharges + tax;

  const address = `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.state}, ${shippingInfo?.pinCode}, ${shippingInfo?.country}`;

  const phoneNo = shippingInfo?.phoneNo || "";

  const onProceedPayment = useCallback(() => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    setActivePage(2);
  }, [setActivePage, shippingCharges, subtotal, tax, totalPrice]);

  return {
    cartItems,
    subtotal,
    shippingCharges,
    tax,
    totalPrice,
    address,
    phoneNo,
    userName,
    onProceedPayment,
  };
};

export default useConfirmOrderDetailsController;
