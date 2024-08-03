import Image from "next/image";
import Link from "next/link";
import React from "react";
import UIButton from "src/widgets/ui-button";

const ConfirmOrderDetailsView: React.FC<any> = ({
  cartItems,
  subtotal,
  shippingCharges,
  tax,
  totalPrice,
  address,
  phoneNo,
  userName,
  onProceedPayment,
}) => {
  return (
    <div className=" bg-white grid md:grid-cols-[6fr_3fr]">
      <div>
        <div className="md:p-[5vmax] p-1 pb-0">
          <h2 className="text-[rgba(0,0,0,0.664) text-lg text-center md:text-start">Shipping Info</h2>
          <div className="md:m-[2vmax] my-[2vmax]">
            <div className="flex my-[2vmax] md:items-center">
              <p className="md:text-[1vmax] text-[2vmax]">Name: </p>
              <span className="text-[#575757] mx-1">{userName}</span>
            </div>
            <div className="flex my-[2vmax] md:items-center">
              <p className="md:text-[1vmax] text-[2vmax]">Phone: </p>
              <span className="text-[#575757] mx-1">{phoneNo}</span>
            </div>
            <div className="flex my-[2vmax] md:items-center">
              <p className="md:text-[1vmax] text-[2vmax]">Address: </p>
              <span className="text-[#575757] mx-1">{address}</span>
            </div>
          </div>
        </div>
        <div className="md:p-[5vmax] p-1 pt-2vmax">
          <h2 className="text-[rgba(0,0,0,0.664) text-lg text-center md:text-start">
            Confirm Cart Items:
          </h2>
          <div className="md:overflow-y-auto md:max-h-[20vmax]">
            {cartItems &&
              cartItems?.map((item: any) => {
                return (
                  <div
                    key={item?.product?._id}
                    className="md:text-[1vmax] text-[2vmax] flex justify-between md:flex-row flex-col my-[2vmax] mx-0 items-center text-center md:text-start"
                  >
                    <Image
                      src={item?.product?.images[0]?.url}
                      alt={item?.product?.images[0]?.alt_text}
                      width={300}
                      height={300}
                      sizes="(max-width: 768px) 100%"
                    />
                    <Link
                      href={`/products/${item?.product?._id}`}
                      className="no-underline text-[#575757] my-0 mx-[2vmax] w-[60%]"
                    >
                      {item?.product?.name}&nbsp;
                    </Link>
                    <span className="md:text-[1vmax] text-[2vmax] text-[#5e5e5e]">
                      {item?.quantity} X Rs.{item?.product?.price} ={" "}
                      <b>Rs.{item?.product?.price * item?.quantity}</b>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <div className="md:p-[7vmax] p-[2vmax]">
          <h2 className=" text-lg border-b-[1px] border-b-[rgba(0, 0, 0, 0.267)] m-auto p-[1vmax] w-full">
            Order Summary
          </h2>

          <div>
            <div className="flex md:text-[1vmax] text-[2vmax] justify-between my-[2vmax] mx-0">
              <p>Subtotal:</p>
              <span className="text-[rgba(0,0,0,0.692)]">Rs.{subtotal}</span>
            </div>
            <div className="flex md:text-[1vmax] text-[2vmax] justify-between my-[2vmax] mx-0">
              <p>Shipping Charges:</p>
              <span className="text-[rgba(0,0,0,0.692)]">
                Rs.{shippingCharges}
              </span>
            </div>
            <div className="flex md:text-[1vmax] text-[2vmax] justify-between my-[2vmax] mx-0">
              <p>GST:</p>
              <span className="text-[rgba(0,0,0,0.692)]">
                Rs.{tax?.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex md:text-[1vmax] text-[2vmax] justify-between border-t-[1px] border-t-[rgba(0,0,0,0.363)] py-[2vmax] px-0">
            <p>
              <b>Total:</b>
            </p>
            <span>Rs.{totalPrice}</span>
          </div>
          <UIButton
            text="Proceed To Payment"
            className="border-none bg-red-500 text-white md:text-[0.9vmax] text-[1.2vmax] cursor-pointer w-full rounded-md p-3"
            onClick={onProceedPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderDetailsView;
