"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import CartIcon from "src/resources/icons/cart-icon";
import { useAppSelector } from "@store/configure-store";
import { getUserDetails } from "@store/splices/entities/auth";
import Badge from "@components/common/badge-component";
import SearchBarComponent from "../search-bar-component";


const NavProfileComponentView: React.FC<any> = ({
  cartCount,
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
        <SearchBarComponent />
        {/* <HeartIcon /> */}
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
