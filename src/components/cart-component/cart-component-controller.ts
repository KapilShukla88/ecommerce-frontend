"use client";
import { useAppDispatch, useAppSelector } from "@store/configure-store";
import {
  apiToGetAllCartData,
  deleteCartItem,
  getCartData,
} from "@store/splices/entities/cart";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

const useCartComponentController = () => {
  const dispatch = useAppDispatch();

  const cartData = useAppSelector(getCartData);

  const router = useRouter();

  useEffect(() => {
    dispatch(apiToGetAllCartData());
  }, []);

  const handleOnDeleteCartItem = useCallback((productId: string) => {
    dispatch(deleteCartItem(productId));
  }, []);

  const totalPrice = useMemo(() => {
    return cartData?.reduce(
      (currentPrice: any, prevPrice: any) =>
        currentPrice + prevPrice?.product?.price,
      0
    );
  }, [cartData]);

  const handleOnProceedToCheckout = useCallback(() => {
    router.push("/checkout");
  }, []);

  return {
    cartData,
    totalPrice,
    handleOnDeleteCartItem,
    handleOnProceedToCheckout,
  };
};

export default useCartComponentController;
