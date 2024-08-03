"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PRODUCT_CATEGORY } from "src/resources/constants";
import useIntersection from "src/resources/useIntersection";
import UIButton from "src/widgets/ui-button";

const CATEGORIES = [
  {
    name: "Sneakers",
    slug: `/products?category=${PRODUCT_CATEGORY.SNEAKER}`,
    image: "/assets/images/sneakers/sneaker-2.jpg",
  },
  {
    name: "T-shirt",
    slug: `/products?category=${PRODUCT_CATEGORY.TSHIRT}`,
    image: "/assets/images/t-shirts/t-shirts-2.jpg",
  },
  {
    name: "Shirt",
    slug: `/products?category=${PRODUCT_CATEGORY.SHIRT}`,
    image: "/assets/images/shirts/shirt-2.jpg",
  },
  {
    name: "Phone",
    slug: `/products?category=${PRODUCT_CATEGORY.PHONE}`,
    image: "/assets/images/phones/phone-1.jpg",
  },
  {
    name: "Headphones",
    slug: `/products?category=${PRODUCT_CATEGORY.HEADPHONE}`,
    image: "/assets/images/earphones/earphones-3.jpg",
  },
];

const CategoriesCard = ({category, onClick}: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<any>();

  const [setElements, entries] = useIntersection({
    threshold: 0.1, // Adjust this as needed
  });

  useEffect(() => {
    setElements([cardRef.current]);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  }, [entries]);

  return (
    <div
      ref={cardRef}
      className={`relative w-full md:h-[20rem] h-[15rem] rounded-xl transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-10"
      }`}
    >
      <Image
        src={category.image}
        alt="shirts"
        fill
        sizes="(max-width: 768px) 7rem, (max-width: 1200px) 7rem"
        style={{objectFit:"cover"}}
      />
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-sm" />
      <UIButton
        text={category.name}
        onClick={() => onClick(category.slug)}
        className=" absolute left-1/2 top-1/2 border-2 border-white py-1 px-8 rounded-full text-white transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all ease-in-out delay-75"
      />
    </div>
  );
};

const CategoriesComponentView: React.FC<{}> = () => {
    const router = useRouter();
    const handleCallback = useCallback((slug: string) => {
        router.push(slug);
    }, [])
  return (
    <div className="p-3 mt-10">
      <div>
        <h2 className="text-3xl font-bold text-center text-black">
          Categories
        </h2>
        <div className="flex justify-center my-8">
          <div className="container">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
              {CATEGORIES?.map((item: any, index: number) => {
                return <CategoriesCard key={index} category={item} onClick={handleCallback} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponentView;
