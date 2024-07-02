"use client";
import React from "react";

import Cards from "@components/cards";
import CardsCarousalComponent from "@components/wrappers/cards-carousal-component";

const ProductsView: React.FC<iProductsViewProps> = ({
  products = [],
  handleOnBuyProducts = (f: string) => f,
}) => {
  return (
    <div className="p-5 flex-1">
      <div className="flex flex-col gap-6">
        {products?.map((product: iProductTypes) => {
          return (
            <div key={product?._id} className="flex flex-col gap-6">
              <h1 className="text-3xl font-semibold">{product?.title}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {product?.products?.map((subProduct: any) => {
                  return (
                    <div key={subProduct?._id}>
                      <Cards
                        key={subProduct?._id}
                        productId={subProduct?._id}
                        title={subProduct?.productName}
                        price={"₹" + subProduct?.price}
                        subTitle={subProduct?.desc}
                        btnText="Buy now"
                        isCartNeed={true}
                        onClick={handleOnBuyProducts}
                      >
                        <CardsCarousalComponent
                          productsImages={subProduct?.imgURLS || []}
                        />
                      </Cards>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsView;
