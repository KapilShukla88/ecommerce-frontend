import React from "react";

import StarIcon from "src/resources/icons/star-icon";
import UIButton from "src/widgets/ui-button";

const borderClassName = " border-b-[1.5px] border-t-[1.5px] border-gray-300";

interface iProductIntroComponentViewParams {
  noOfProducts: number;
  handleOnDecreaseProducts(): void;
  handleOnIncreaseProducts(): void;
}

const ProductIntroComponentView: React.FC<iProductIntroComponentViewParams> = ({
  noOfProducts = 0,
  handleOnDecreaseProducts,
  handleOnIncreaseProducts,
}) => {
  return (
    <div className="w-full">
      <div>
        <div className="py-2">
          <h1 className="text-2xl font-semibold">
            Trigger Unisex Shoes Puma Black | Everything Black
          </h1>
          <p className="text-gray-400 text-sm">#product_id</p>
        </div>
        <div className={`flex gap-2 text-center  py-2 ${borderClassName}`}>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5]?.map((_, index: number) => {
              return <StarIcon color="#FF914D" key={index} />;
            })}
          </div>
          <div>
            <p className="text-sm text-gray-400">(1 review)</p>
          </div>
        </div>
        <div className="my-4">
          <p className="text-3xl font-semibold">₹ 4999</p>
        </div>
        <div className="flex gap-3">
          {/* number of items to increase and decrease products */}
          <div className="flex gap-2">
            <UIButton
              onClick={handleOnDecreaseProducts}
              text="-"
              className="bg-gray-500 text-xl text-white font-semibold m-0 px-3 flex items-center justify-center"
            />
            <div className="w-10">
              <p className="text-xl font-semibold text-black text-center">{noOfProducts}</p>
            </div>
            <UIButton
              onClick={handleOnIncreaseProducts}
              text="+"
              className="bg-gray-500 text-xl text-white m-0 font-semibold px-3 flex items-center justify-center"
            />
          </div>
          <UIButton
            onClick={() => {}}
            text="Add to cart"
            className="text-white m-0 bg-[#FF914D] px-4 py-1 pb-2 rounded-full"
          />
        </div>
        <div className={`flex items-center gap-1 py-2 ${borderClassName} mt-4`}>
          <p className="text-xl text-black font-semibold">Status :</p>
          <p className="text-xl font-bold text-green-500">In Stock</p>
        </div>
        <div className="my-4 flex flex-col gap-4">
          <div>
            <p className="text-xl font-medium">Description :</p>
            <p className="text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <UIButton
            onClick={() => {}}
            text="Submit Review"
            className="text-white m-0 bg-[#FF914D] px-6 py-1 pb-2 rounded-full max-w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductIntroComponentView;
