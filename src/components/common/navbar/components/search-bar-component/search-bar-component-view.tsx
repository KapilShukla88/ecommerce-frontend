"use client";
import Image from "next/image";
import React from "react";

import StarRatingComponent from "@components/star-rating-component";
import SearchIcon from "src/resources/icons/search-icon";
import CrossIcon from "@rsuite/icons/Close";

const SearchBarComponent = ({
  onChangeSearchText,
  toggleSearchBar,
  searchText = "",
  searchData = [],
  handleOnClickSearchProduct,
}: any) => {
  return (
    <div className="relative">
      <div className="border-[1px] rounded-full border-gray-400 bg-white flex gap-2 overflow-hidden items-center px-2">
        <input
          type="text"
          placeholder="Search products"
          value={searchText}
          className="outline-none border-none w-full focus:ring-0 focus:outline-none p-1"
          onChange={(e: any) => onChangeSearchText(e.target.value)}
        />
        <CrossIcon
          style={{ fontSize: 18, fontWeight: 500, cursor: "pointer" }}
          onClick={toggleSearchBar}
        />
      </div>
      {searchData?.length > 0 && (
        <div className="absolute w-full top-12 bg-white p-2 rounded-lg shadow-sm">
          <div className="flex flex-col gap-2">
            {searchData?.map((product: any) => {
              return (
                <div
                  key={product?._id}
                  className="flex gap-4 cursor-pointer"
                  onClick={() => handleOnClickSearchProduct(product?._id)}
                >
                  <div>
                    <Image
                      src={product?.image?.url}
                      alt={product?.image?.alt_text}
                      className="rounded-md"
                      width={60}
                      height={70}
                      sizes="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-md line-clamp-1 text-black">
                      {product?.name || ""}
                    </p>
                    <StarRatingComponent
                      rating={product?.product_rating || 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const SearchBarComponentView: React.FC<any> = ({
  isSearchInputVisible,
  searchData,
  searchText,
  onChangeSearchText,
  toggleSearchBar,
  handleOnClickSearchProduct,
}) => {
  return (
    <div>
      {isSearchInputVisible ? (
        <SearchBarComponent
          toggleSearchBar={toggleSearchBar}
          onChangeSearchText={onChangeSearchText}
          searchData={searchData}
          searchText={searchText}
          handleOnClickSearchProduct={handleOnClickSearchProduct}
        />
      ) : (
        <div onClick={toggleSearchBar} className="cursor-pointer">
          <SearchIcon />
        </div>
      )}
    </div>
  );
};

export default SearchBarComponentView;
