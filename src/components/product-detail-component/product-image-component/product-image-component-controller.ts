"use client";
import { useParams } from "next/navigation";

const useProductImageComponentController = () => {
  const productImages = [
    "/assets/images/cameras/camera-product-1.jpg",
    "/assets/images/cameras/camera-3.jpg",
  ];

  const { productId = "" } = useParams();

  return { productId, productImages };
};

export default useProductImageComponentController;
