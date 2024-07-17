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
}) => {
  return (
    <div className="h-screen bg-white grid grid-cols-[6fr_3fr]">
      <div>
        <div className="p-[5vmax] pb-0">
          <h2 className="text-[rgba(0,0,0,0.664) text-lg">Shipping Info</h2>
          <div className="m-[2vmax]">
            <div className="flex my-[2vmax] items-center">
              <p className="text-[1vmax]">Name: </p>
              <span className="text-[#575757] mx-1">{userName}</span>
            </div>
            <div className="flex my-[2vmax] items-center">
              <p className="text-[1vmax]">Phone: </p>
              <span className="text-[#575757] mx-1">{phoneNo}</span>
            </div>
            <div className="flex my-[2vmax] items-center">
              <p className="text-[1vmax]">Address: </p>
              <span className="text-[#575757] mx-1">{address}</span>
            </div>
          </div>
        </div>
        <div className="p-[5vmax] pt-2vmax">
          <h2 className="text-[rgba(0,0,0,0.664) text-lg">
            Confirm Cart Items:
          </h2>
          <div className="overflow-y-auto max-h-[20vmax]">
            {cartItems &&
              cartItems?.map((item: any) => {
                return (
                  <div
                    key={item?.product?._id}
                    className="text-[1vmax] flex justify-between my-[2vmax] mx-0 items-center"
                  >
                    <Image
                      src={item?.product?.images[0]?.url}
                      alt={item?.product?.images[0]?.alt_text}
                      width={300}
                      height={300}
                    />
                    <Link
                      href={`/products/${item?.product?._id}`}
                      className="no-underline text-[#575757] my-0 mx-[2vmax] w-[60%]"
                    >
                      {item?.product?.name}&nbsp;
                    </Link>
                    <span className="text-[1vmax] text-[#5e5e5e]">
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
        <div className="p-[7vmax]">
          <h2 className=" text-lg border-b-[1px] border-b-[rgba(0, 0, 0, 0.267)] m-auto p-[1vmax] w-full">
            Order Summary
          </h2>

          <div>
            <div className="flex text-[1vmax] justify-between my-[2vmax] mx-0">
              <p>Subtotal:</p>
              <span className="text-[rgba(0,0,0,0.692)]">Rs.{subtotal}</span>
            </div>
            <div className="flex text-[1vmax] justify-between my-[2vmax] mx-0">
              <p>Shipping Charges:</p>
              <span className="text-[rgba(0,0,0,0.692)]">
                Rs.{shippingCharges}
              </span>
            </div>
            <div className="flex text-[1vmax] justify-between my-[2vmax] mx-0">
              <p>GST:</p>
              <span className="text-[rgba(0,0,0,0.692)]">Rs.{tax?.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex text-[1vmax]  justify-between border-t-[1px] border-t-[rgba(0,0,0,0.363)] py-[2vmax] px-0">
            <p>
              <b>Total:</b>
            </p>
            <span>Rs.{totalPrice}</span>
          </div>
          <UIButton
            text="Proceed To Payment"
            className="border-none bg-red-500 text-white text-[0.9vmax] cursor-pointer w-full rounded-md p-3"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderDetailsView;
