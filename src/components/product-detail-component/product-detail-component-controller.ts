"use client";

import { useAppDispatch, useAppSelector } from "@store/configure-store";
import {
  callToGetProductDetail,
  getProductDetail,
} from "@store/splices/entities/products";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const useProductDetailComponentController = () => {
  const productDetails = useAppSelector(getProductDetail);

  const dispatch = useAppDispatch();
  const { productId = "" } = useParams<{ productId: string }>();

  useEffect(() => {
    dispatch(callToGetProductDetail(productId));
  }, [productId]);

  return { productDetails, productId };
};

export default useProductDetailComponentController;
