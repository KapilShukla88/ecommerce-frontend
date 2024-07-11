"use client";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@store/configure-store";
import {
  callToGetAllProducts,
  getAllProducts,
} from "@store/splices/entities/products";
import { updateCartItem } from "@store/splices/entities/cart";

const useProductsComponentController = () => {
  const products = useAppSelector(getAllProducts);

  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(callToGetAllProducts());
  }, []);

  const handleAddProductOnCart = useCallback((productId: string) => {
    dispatch(updateCartItem(productId));
  }, []);

  const handleOnBuyProducts = useCallback((productId: string) => {
    router.push(`/products/${productId}`);
  }, []);
  return { products, handleOnBuyProducts, handleAddProductOnCart };
};

export default useProductsComponentController;
