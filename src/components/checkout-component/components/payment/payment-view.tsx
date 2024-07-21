"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import CreditCardIcon from "@rsuite/icons/legacy/CreditCard";
import EventIcon from "@rsuite/icons/EventDetail";
import VpnKeyIcon from "@rsuite/icons/legacy/Key";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch, useAppSelector } from "@store/configure-store";
import { getUserDetails } from "@store/splices/entities/auth";
import { getCartData, getShippingInfo } from "@store/splices/entities/cart";
import HttpService, { HttpMethod } from "@service/http-service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { callToSubmitNewOrder } from "@store/splices/entities/orders";

const CheckoutComponent = ({
  userDetails,
  shippingInfo,
  orderInfo,
  cartItems,
}: any) => {
  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const payBtn = useRef<any>(null);

  const order: any = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo?.subtotal,
    taxPrice: orderInfo?.tax,
    shippingPrice: orderInfo?.shippingCharges,
    totalPrice: orderInfo?.totalPrice,
  };
  const handleOnSubmit = async (e: any) => {
    e?.preventDefault();
    payBtn.current.disabled = true;

    const paymentData = {
      amount: Math.round(orderInfo?.totalPrice * 100),
    };
    try {
      if (!stripe || !elements) {
        return;
      }
      const { client_secret = "" }: any = await HttpService(
        "",
        HttpMethod.POST,
        paymentData,
        true,
        {},
        "/payment/process"
      );
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement) as any,
          billing_details: {
            name: userDetails?.userName,
            email: userDetails?.email,
            address: {
              line1: shippingInfo?.address,
              city: shippingInfo?.city,
              state: shippingInfo?.state,
              postal_code: shippingInfo?.pinCode,
              country: shippingInfo?.country,
            },
          },
        },
      });

      if (result?.error) {
        payBtn.current.disabled = false;
        // setError({message: result?.error?.message});
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result?.paymentIntent?.id,
            status: result?.paymentIntent?.status,
          };

          dispatch(callToSubmitNewOrder(order));
          // navigate("/success");
          payBtn.current.disabled = false;
          router.push("/orders");
        } else {
          // setOpen(true);
          toast.error("There's some issue While processing payment.");

          // setError({message: "There's some issue While processing payment."})
        }
      }
    } catch (error) {
      console.log("payment error =>>", error);
    }
  };
  return (
    <form className="w-[22%] h-full" onSubmit={handleOnSubmit}>
      <h2 className="text-center text-[rgba(0,0,0,0.664) text-lg p-[1.3vmax] border-b-[1px] w-1/2 m-auto">
        Card Info
      </h2>
      <div className="flex m-[2vmax_0] items-center">
        <CreditCardIcon className="absolute text-lg translate-x-[1vmax] text-[1.6vmax] text-[rgba(0,0,0,0.651)]" />

        <CardNumberElement className="px-[4vmax] py-[1vmax] pr-[1vmax] w-full box-border border border-[rgba(0,0,0,0.267)] rounded-[4px] outline-none" />
      </div>
      <div className="flex m-[2vmax_0] items-center">
        <EventIcon className="absolute text-lg translate-x-[1vmax] text-[1.6vmax] text-[rgba(0,0,0,0.651)]" />
        <CardExpiryElement className="px-[4vmax] py-[1vmax] pr-[1vmax] w-full box-border border border-[rgba(0,0,0,0.267)] rounded-[4px] outline-none" />
      </div>
      <div className="flex m-[2vmax_0] items-center">
        <VpnKeyIcon className="absolute text-lg translate-x-[1vmax] text-[1.6vmax] text-[rgba(0,0,0,0.651)]" />
        <CardCvcElement className="px-[4vmax] py-[1vmax] pr-[1vmax] w-full box-border border border-[rgba(0,0,0,0.267)] rounded-[4px] outline-none" />
      </div>
      <input
        type="submit"
        value={`Pay - Rs. ${orderInfo && orderInfo?.totalPrice}`}
        ref={payBtn}
        className="border-none bg-[tomato] text-white font-light text-[0.9vmax] font-roboto w-full p-[0.8vmax] cursor-pointer transition-all duration-500 outline-none"
      />
    </form>
  );
};

const PaymentView: React.FC<{}> = () => {
  const [cartItems, setCartItems] = useState<any>([]);

  const userDetails = useAppSelector(getUserDetails);
  const cartData = useAppSelector(getCartData);
  const shippingInfo = useAppSelector(getShippingInfo);
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo") as any);
  // const stripe = useStripe();
  // const elements = useElements();

  useEffect(() => {
    if (cartData.length > 0) {
      let carts: any = [];

      cartData.forEach((item: any) => {
        const option = {
          name: item?.product?.name,
          product: item?.product?._id,
          price: item?.product?.price,
          quantity: item?.quantity,
          image: item?.product?.images?.[0]?.url,
        };
        carts.push(option);
      });
      setCartItems(carts);
    }
  }, [cartData]);

  return (
    <div className="grid place-items-center bg-white/100 h-[65vh] m-[2vmax]">
      <Elements
        stripe={loadStripe(
          "pk_test_51N7tJLSC6WMHZtvqDCQ6dgM82J1ipiWLolqUEYaXM1n3vLN3cO0pwEyu4F8QksyUWNXbUqrVIsscLH9IA3RGdKyp00vKYwtQW2"
        )}
      >
        <CheckoutComponent
          userDetails={userDetails}
          shippingInfo={shippingInfo}
          orderInfo={orderInfo}
          cartItems={cartItems}
        />
      </Elements>
    </div>
  );
};

export default PaymentView;
