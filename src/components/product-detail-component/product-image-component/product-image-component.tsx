import React from "react";
import ProductImageComponentView from "./product-image-component-view";
import useProductImageComponentController from "./product-image-component-controller";

interface iProductImageComponentProps {
  selectedImagePosition: number;
  handleOnSelectImage(imageNumber: number): void;
}

const ProductImageComponent: React.FC<iProductImageComponentProps> = ({
  selectedImagePosition = 0,
  handleOnSelectImage = (f: number) => f,
}) => {
  const { productId, productImages } = useProductImageComponentController();
  return (
    <ProductImageComponentView
      productId={productId}
      productImages={productImages}
      selectedImagePosition={selectedImagePosition}
      handleOnSelectImage={handleOnSelectImage}
    />
  );
};

export default ProductImageComponent;
