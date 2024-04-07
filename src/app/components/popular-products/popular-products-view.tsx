import React from "react";

import productsData from "../../../utils/configs/products.json";
import Cards from "@components/cards";
import CardsCarousalComponent from "@components/wrappers/cards-carousal-component";

const PopularProductsView: React.FC<{}> = () => {
  return (
    <div className="p-3 mt-10">
      {productsData &&
        productsData?.map((product: any) => {
          return (
            <div key={product?._id}>
              <h2 className="text-3xl font-bold text-center">
                {product?.title || ""}
              </h2>
              <div className="flex justify-center mt-8">
                <div className="container">
                  <div className="grid grid-cols-3 gap-4">
                    {product?.assets &&
                      product?.assets?.map((product: any) => {
                        return (
                          <Cards
                            key={product?._id}
                            title={product?.name}
                            price={product?.price}
                            subTitle={product?.desc}
                            btnText="Buy"
                          >
                            <CardsCarousalComponent
                              productsImages={product?.imgURLS || []}
                            />
                          </Cards>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PopularProductsView;
