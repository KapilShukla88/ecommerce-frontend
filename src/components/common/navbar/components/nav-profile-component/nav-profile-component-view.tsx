"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import SearchIcon from "src/resources/icons/search-icon";
import HeartIcon from "src/resources/icons/wishlist-icon";
import CartIcon from "src/resources/icons/cart-icon";
import { useAppSelector } from "@store/configure-store";
import { getUserDetails } from "@store/splices/entities/auth";
import Badge from "@components/common/badge-component";
import CrossIcon from "@rsuite/icons/Close";
import StarIcon from "src/resources/icons/star-icon";
import StarRatingComponent from "@components/star-rating-component";

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
          className="outline-none border-none w-full focus:ring-0 focus:outline-none"
          onChange={(e: any) => onChangeSearchText(e.target.value)}
        />
        <CrossIcon
          style={{ fontSize: 19, fontWeight: 500, cursor: "pointer" }}
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

const NavProfileComponentView: React.FC<any> = ({
  cartCount,
  isSearchInputVisible,
  searchData = [],
  searchText = "",
  onChangeSearchText,
  toggleSearchBar,
  handleOnClickSearchProduct,
}) => {
  const userDetails = useAppSelector(getUserDetails);

  const router = useRouter();

  const handleOnClickAvatar = useCallback(() => {
    router?.push("/auth");
  }, []);

  const getUserNames = useCallback(() => {
    return (
      <>
        {userDetails?.isLoggedIn ? (
          <div>
            <p className="text-md font-semibold">
              {userDetails?.userName || ""}
            </p>
            {/* <p className="text-xs font-bold">Login/SignUp</p> */}
          </div>
        ) : (
          <div>
            <p className="text-xs font-700">Hey, there</p>
            <p className="text-xs font-bold">Login/SignUp</p>
          </div>
        )}
      </>
    );
  }, [userDetails]);

  return (
    <div className="hidden md:block">
      <div className="flex flex-row gap-4 items-center">
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
        <HeartIcon />
        <div onClick={() => router.push("/cart")} className="cursor-pointer">
          <Badge number={cartCount}>
            <CartIcon />
          </Badge>
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer rounded-full"
          onClick={userDetails?.isLoggedIn ? () => {} : handleOnClickAvatar}
        >
          <Image
            src={
              userDetails?.avatar
                ? userDetails?.avatar
                : require("../../../../../assets/images/avatar.png")
            }
            width={30}
            height={30}
            alt="user icon"
            className="rounded-full w-[30px] h-[30px]"
            loading="lazy"
            objectFit="cover"
          />
          {getUserNames()}
        </div>
      </div>
    </div>
  );
};

export default NavProfileComponentView;
