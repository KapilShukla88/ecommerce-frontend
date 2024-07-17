"use client";
import Image from "next/image";
import React, { useState } from "react";
import UIButton from "src/widgets/ui-button";

interface iCartComponentViewParams {
  data: any;
  totalPrice: number;
  handleOnProceedToCheckout(): void;
  handleOnDeleteCartItem(_productId: string): void;
}

const SummaryComponent = ({
  cartProduct,
  totalPrice,
  handleOnProceedToCheckout,
}: any) => {
  // const [prices , setPrices] = useState([]);
  return (
    <div className="rounded-md shadow-md p-2 flex flex-[0.3] bg-[#F2F2F2] h-96 overflow-y-auto">
      <div className="w-full flex flex-col">
        <p className="text-center text-xl">Summary</p>
        <div className="flex flex-col justify-between flex-grow">
          <div>
            {cartProduct?.map((item: any) => (
              <div
                key={item?._id}
                className="border-b-[1px] text=[#BBBBBB] flex flex-row justify-between items-center border-gray-400 py-1"
              >
                <p>{item?.product?.name}</p>
                <p>₹{item?.product?.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto flex justify-between items-center border-t-[1px] border-gray-400 py-3">
            <p>Total Price:</p>
            <p>₹{totalPrice}</p>
          </div>
          <UIButton
            text="Proceed to Checkout"
            onClick={handleOnProceedToCheckout}
            className=" text-white bg-red-500 p-2 mt-3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const CartProductCard = ({ cartProduct, onDelete }: any) => {
  return (
    <div className="shadow-md p-3 rounded-md flex gap-4">
      <Image
        src={cartProduct?.product?.images[0]?.url}
        alt={cartProduct?.product?.images[0]?.alt_text}
        width={200}
        height={200}
        className="rounded-xl"
      />
      <div className="w-full flex flex-row">
        <div className="w-full flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-semibold">
              {cartProduct?.product?.name || ""}
            </h1>
            <div className="flex gap-6 items-center mt-2">
              <p className="font-medium text-sm">
                <b>Brand :</b>
                <span className="text-gray-400 font-normal">
                  {" "}
                  {cartProduct?.product?.brand}
                </span>
              </p>
              <p className="font-medium text-sm">
                <b>category :</b>
                <span className="text-gray-400 font-normal">
                  {" "}
                  {cartProduct?.product?.category}
                </span>
              </p>
            </div>
            <p className="text-md mt-2">
              Total items:{" "}
              <span className="font-normal text-sm text-gray-500">
                {cartProduct?.quantity}
              </span>
            </p>
          </div>
          <div className="mt-3 flex items-end">
            <p className="text-md">
              Price:{" "}
              <span className="font-medium text-gray-500">
                ₹{cartProduct?.product?.price}
              </span>
            </p>
          </div>
        </div>
        <div>
          <UIButton
            text="delete"
            onClick={() => onDelete(cartProduct?.product?._id)}
            className="py-1 px-6 flex rounded-md text-white bg-red-500"
          />
        </div>
      </div>
    </div>
  );
};

const CartComponentView: React.FC<iCartComponentViewParams> = ({
  data,
  totalPrice = 0,
  handleOnDeleteCartItem = (f: string) => f,
  handleOnProceedToCheckout,
}) => {
  return (
    <div className=" flex justify-center p-4">
      <div className="md:w-2/3 flex gap-2">
        <div className="flex flex-col gap-3 flex-[0.7] h-auto overflow-y-auto">
          {data?.map((product: any) => {
            return (
              <CartProductCard
                key={product?._id}
                cartProduct={product}
                onDelete={handleOnDeleteCartItem}
              />
            );
          })}
        </div>
        <SummaryComponent
          cartProduct={data}
          totalPrice={totalPrice}
          handleOnProceedToCheckout={handleOnProceedToCheckout}
        />
      </div>
    </div>
  );
};

export default CartComponentView;