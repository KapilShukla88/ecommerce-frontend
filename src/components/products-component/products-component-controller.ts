"use client";
import { useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@store/configure-store";
import {
  callToGetAllProducts,
  getAllProducts,
} from "@store/splices/entities/products";
import { apiToCallAddToCart } from "@store/splices/entities/cart";
// import { updateCartItem } from "@store/splices/entities/cart";

const useProductsComponentController = () => {
  const products = useAppSelector(getAllProducts);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const params = useSearchParams();
  const routeCategory = params.get("category");

  // useEffect(() => {
  //   dispatch(callToGetAllProducts());
  // }, []);

  useEffect(() => {
    handleQueries(routeCategory);
  }, [routeCategory]);

  const handleQueries = useCallback((category: string | null) => {
    let query = "";
    if (category) {
      query = `categories=["${category}"]`;
    }
    dispatch(callToGetAllProducts(query));
  }, []);

  const handleAddProductOnCart = useCallback((productId: string) => {
    dispatch(apiToCallAddToCart({ productId, quantity: 1 }));
  }, []);

  const handleOnBuyProducts = useCallback((productId: string) => {
    router.push(`/products/${productId}`);
  }, []);
  return { products, handleOnBuyProducts, handleAddProductOnCart };
};

export default useProductsComponentController;
