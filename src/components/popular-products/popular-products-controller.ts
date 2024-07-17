"use client";

import { useAppDispatch, useAppSelector } from "@store/configure-store";
import { apiToCallAddToCart } from "@store/splices/entities/cart";
// import { updateCartItem } from "@store/splices/entities/cart";
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
    dispatch(apiToCallAddToCart({ productId, quantity: 1 }));
  }, []);

  return {
    popularProducts,
    handleOnAddToCartProduct,
    handleOnClickProductView,
  };
};

export default usePopularProductsController;
