"use client";
import React from "react";
import Image from "next/image";

import SearchIcon from "src/resources/icons/search-icon";
import HeartIcon from "src/resources/icons/wishlist-icon";
import CartIcon from "src/resources/icons/cart-icon";

const NavProfileComponentView = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-row gap-4 items-center">
        <SearchIcon />
        <HeartIcon />
        <CartIcon />
        <div className="flex items-center gap-1">
          <Image
            src={require("../../../../../assets/images/avatar.png")}
            width={30}
            height={30}
            alt="user icon"
            loading="lazy"
          />
          <div>
            <p className="text-xs font-700">Hey, there</p>
            <p className="text-xs font-bold">Login/SignUp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavProfileComponentView;
