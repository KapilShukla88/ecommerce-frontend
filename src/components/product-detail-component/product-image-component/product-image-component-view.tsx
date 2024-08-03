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
    <div className="relative flex md:flex-col gap-2 overflow-x-auto">
      {images?.length > 0 &&
        images?.map((image: any, index: number) => {
          return (
            <div
              className={`relative md:h-[7rem] h-[5rem] md:w-[7rem] w-[5rem] rounded-md overflow-hidden  ${
                selectedImagePosition === index
                  ? "border-[1px] border-gray-300"
                  : "shadow-md"
              }`}
              key={index}
              onClick={() => onClickSelectedImage(index)}
            >
              <Image
                src={image?.url}
                alt={image?.alt_text}
                fill
                sizes="(max-width: 768px) 7rem, (max-width: 1200px) 7rem"
              />
            </div>
          );
        })}
    </div>
  );
};

const ProductImageComponent = ({ productImage, altText = "" }: any) => {
  return (
    <div className="relative">
      <div className="relative min-h-[20rem] md:min-h-[30rem] max-h-[40rem] w-full md:w-[30rem] rounded-md shadow-sm overflow-hidden">
        <Image
          src={productImage}
          alt=""
          fill
          sizes="(max-width: 768px) 30rem, 30rem, (max-width: 1200px) 30rem, 40rem"
        />
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
    <div className="flex gap-3 md:gap-6 md:flex-row flex-col-reverse p-4">
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
