"use client";
import React from "react";
import CartIcon from "src/resources/icons/cart-icon";

const CardsView: React.FC<iCardsViewParams> = ({
  children,
  title,
  subTitle,
  price,
  btnText,
  isCartNeed,
  productId = "",
  onClick = (f: string) => f,
}) => {
  return (
    <div>
      {children}
      <div className="flex flex-col items-center py-3">
        <h3 className={`${title ? "visible" : "hidden"} text-xl font-semibold`}>
          {title}
        </h3>
        <p className={`${subTitle ? "visible" : "hidden"}`}>{subTitle}</p>
        <p className={`${price ? "visible" : "hidden"} font-sans font-bold`}>
          {price}
        </p>
        <div className="flex items-center gap-3 justify-center flex-1 w-full">
          <button
            className="bg-[#ffb759] rounded-full px-4 py-1 font-700 text-sm mt-3"
            onClick={() => onClick(productId)}
          >
            {btnText}
          </button>
          {isCartNeed && (
            <button className="flex items-center bg-[#FF914D] text-white rounded-full px-6 py-1 font-700 text-sm mt-3">
              + <CartIcon width={15} height={15} color="#fff" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsView;
