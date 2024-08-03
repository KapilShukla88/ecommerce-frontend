"use client";
import React from "react";

import Cards from "@components/cards";
import CardsCarousalComponent from "@components/wrappers/cards-carousal-component";

const ProductsView: React.FC<iProductsViewProps> = ({
  products = [],
  handleOnBuyProducts = (f: string) => f,
  handleAddProductOnCart = (f: string) => f,
}) => {
  return (
    <div className="md:p-5 mx-5 flex-1">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold"></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products?.map((subProduct: any) => {
              return (
                <div key={subProduct?._id}>
                  <Cards
                    key={subProduct?._id}
                    productId={subProduct?._id}
                    title={subProduct?.name}
                    price={"₹" + subProduct?.price}
                    subTitle={subProduct?.description}
                    btnText="Buy now"
                    isCartNeed={true}
                    onClick={handleOnBuyProducts}
                    onClickCart={handleAddProductOnCart}
                  >
                    <CardsCarousalComponent
                      productsImages={subProduct?.images || []}
                    />
                  </Cards>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
