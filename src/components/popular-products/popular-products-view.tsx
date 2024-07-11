import React from "react";

import Cards from "@components/cards";
import CardsCarousalComponent from "@components/wrappers/cards-carousal-component";

const PopularProductsView: React.FC<{
  data: any;
  handleOnAddToCartProduct: (f: string) => void;
  handleOnClickProductView: (f: string) => void;
}> = ({
  data = [],
  handleOnAddToCartProduct = (f: any) => f,
  handleOnClickProductView = (f: string) => f,
}) => {
  return (
    <div className="p-3 mt-10">
      <div>
        <h2 className="text-3xl font-bold text-center">Popular Products</h2>
        <div className="flex justify-center mt-8">
          <div className="container">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
              {data &&
                data?.map((product: any) => {
                  return (
                    <Cards
                      key={product?._id}
                      productId={product?._id}
                      title={product?.name}
                      price={"₹" + product?.price}
                      subTitle={product?.description}
                      btnText="Buy now"
                      isCartNeed={true}
                      onClick={handleOnClickProductView}
                      onClickCart={handleOnAddToCartProduct}
                    >
                      <CardsCarousalComponent
                        productsImages={product?.images || []}
                      />
                    </Cards>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductsView;
