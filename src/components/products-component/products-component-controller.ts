"use client";
import { useCallback } from "react";
import {useRouter} from "next/navigation";

import products from "../../utils/configs/all-products.json";

const useProductsComponentController = () => {
  const router = useRouter();
  const handleOnBuyProducts = useCallback((productId: string) => {
    console.log("product id =>>", productId);
    router.push(`/products/${productId}`);
  }, []);
  return { products, handleOnBuyProducts };
};

export default useProductsComponentController;
