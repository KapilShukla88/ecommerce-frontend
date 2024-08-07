"use client";
import useToGetUserIsAuthenticated from "@utils/user-authenticated-status";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { DYNAMICS_CONSTANTS } from "src/resources/constants";
import CartIcon from "src/resources/icons/cart-icon";

const CardsView: React.FC<iCardsViewParams> = ({
  children,
  title,
  subTitle,
  price,
  btnText,
  isCartNeed,
  productId = "",
  cardRef,
  className = "",
  onClick = (f: string) => f,
  onClickCart = (f: string) => f,
}) => {
  const isLoggedIn = useToGetUserIsAuthenticated();
  const handleToastNotification = useCallback((type: string) => {
    switch (type) {
      case "cart": {
        toast.info(DYNAMICS_CONSTANTS.ADD_TO_CART_LOGIN_TXT);
        break;
      }
    }
  }, []);
  return (
    <div ref={cardRef} className={className}>
      {children}
      <div className="flex flex-col items-center py-3">
        <h3
          className={`${
            title ? "visible" : "hidden"
          } text-xl font-semibold text-black drop-shadow-none`}
        >
          {title}
        </h3>
        <p className={`${subTitle ? "visible" : "hidden"} text-center`}>
          {subTitle}
        </p>
        <p className={`${price ? "visible" : "hidden"} font-sans font-bold`}>
          {price}
        </p>
        <div className="flex items-center gap-3 justify-center flex-1 w-full">
          <button
            className="bg-[#ffb759] rounded-full px-4 py-1 font-700 text-sm mt-3 text-white active:scale-95 ease-in-out delay-100"
            onClick={() => onClick(productId)}
          >
            View
          </button>
          {isCartNeed && (
            <button
              onClick={
                !isLoggedIn
                  ? () => handleToastNotification("cart")
                  : () => onClickCart(productId)
              }
              className={`flex items-center bg-[#FF914D] text-white rounded-full px-6 py-1 font-700 text-sm mt-3 active:scale-95 ease-in-out delay-100`}
            >
              Add to cart + <CartIcon width={15} height={15} color="#fff" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsView;
