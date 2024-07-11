"use client";

import { useAppDispatch, useAppSelector } from "@store/configure-store";
import { updateCartItem } from "@store/splices/entities/cart";
import {
  callToGetAllPopularProducts,
  getAllPopularProducts,
} from "@store/splices/entities/products";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const usePopularProductsController = () => {
  const popularProducts = useAppSelector(getAllPopularProducts);

  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    dispatch(callToGetAllPopularProducts());
  }, []);

  const handleOnClickProductView = useCallback((productId: string) => {
    router.push(`/products/${productId}`);
  }, []);

  const handleOnAddToCartProduct = useCallback((productId: string) => {
    dispatch(updateCartItem(productId));
  }, []);

  return {
    popularProducts,
    handleOnAddToCartProduct,
    handleOnClickProductView,
  };
};

export default usePopularProductsController;
