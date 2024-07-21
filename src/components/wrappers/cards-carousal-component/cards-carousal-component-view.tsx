"use client";
import Image from "next/image";
import React from "react";

const CardsCarousalComponentView: React.FC<
  iCardsCarousalComponentViewParams
> = ({ selectedCardIndex = 0, productsImages = [], onClickCarousalCTA }) => {
  const productImage = productsImages?.[selectedCardIndex]?.url;
  const altText = productsImages?.[selectedCardIndex]?.alt_text;
  return (
    <div className="relative">
      <div className="relative h-[20rem] rounded-md overflow-hidden">
        <Image
          src={productImage}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
        />
      </div>
      <div className=" absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex gap-1 m-auto">
          {productsImages &&
            productsImages?.length > 1 &&
            productsImages?.map((_: string, index: number) => {
              return (
                <div
                  onClick={() => onClickCarousalCTA(index)}
                  key={index}
                  className={`w-2 h-2 cursor-pointer rounded-full hover:bg-[#FFDE59] ${
                    selectedCardIndex === index
                      ? "bg-[#FFDE59]"
                      : "bg-[#FF914D]"
                  }`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CardsCarousalComponentView;
