import Image from "next/image";
import React from "react";

interface iProductImageComponentViewParams {
  productId: string | string[];
  productImages: any;
  selectedImagePosition: number;
  handleOnSelectImage(_imageNumber: number): void;
}

interface iImageSmallSlidesParams {
  images: any;
  selectedImagePosition: number;
  onClickSelectedImage(_index: number): void;
}

const ImagesSmallSlides = ({
  images = [],
  selectedImagePosition = 0,
  onClickSelectedImage = (f: number) => f,
}: iImageSmallSlidesParams) => {
  return (
    <div className="relative flex flex-col gap-2">
      {images?.length > 0 &&
        images?.map((image: any, index: number) => {
          return (
            <div
              className={`relative h-[7rem] w-[7rem] rounded-md overflow-hidden  ${
                selectedImagePosition === index
                  ? "border-[1px] border-gray-300"
                  : "shadow-md"
              }`}
              key={index}
              onClick={() => onClickSelectedImage(index)}
            >
              <Image src={image?.url} alt={image?.alt_text} fill />
            </div>
          );
        })}
    </div>
  );
};

const ProductImageComponent = ({ productImage, altText = "" }: any) => {
  return (
    <div className="relative">
      <div className="relative min-h-[30rem] max-h-[40rem] w-[30rem] rounded-md shadow-sm overflow-hidden">
        <Image src={productImage} alt="" fill />
      </div>
    </div>
  );
};

const ProductImageComponentView: React.FC<iProductImageComponentViewParams> = ({
  productId,
  productImages = [],
  selectedImagePosition = 0,
  handleOnSelectImage = (f: number) => f,
}) => {
  return (
    <div className="flex gap-6  p-4">
      <ImagesSmallSlides
        images={productImages}
        onClickSelectedImage={handleOnSelectImage}
        selectedImagePosition={selectedImagePosition}
      />
      <ProductImageComponent
        productImage={productImages?.[selectedImagePosition]?.url || ""}
        altText={productImages?.[selectedImagePosition]?.alt_text || ""}
      />
    </div>
  );
};

export default ProductImageComponentView;
