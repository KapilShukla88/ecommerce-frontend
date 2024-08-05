import Image from "next/image";
import React, { useCallback } from "react";
import SearchBarComponent from "../search-bar-component";
import { useRouter } from "next/navigation";
import Badge from "@components/common/badge-component";
import CartIcon from "src/resources/icons/cart-icon";
import { eventBus } from "@service/eventService";
import { EVENT_BUS_OAUTH_LOGOUT } from "src/resources/constants";
import UIButton from "src/widgets/ui-button";
import { getUserDetails } from "@store/splices/entities/auth";
import { useAppSelector } from "@store/configure-store";

const NavMobileComponentView: React.FC<any> = ({
  cartCount,
}) => {
  const userDetails = useAppSelector(getUserDetails);

  const router = useRouter();

  const handleOnClickAvatar = useCallback(() => {
    router?.push("/auth");
  }, []);

  const handleLogout =useCallback(() => {
    eventBus.dispatch(EVENT_BUS_OAUTH_LOGOUT, {logout: true});
  }, [])

  const getUserNames = useCallback(() => {
    return (
      <>
        {userDetails?.isLoggedIn ? (
          <div>
            <p className="text-xs font-semibold">
              {userDetails?.userName || ""}
            </p>
            {/* <p className="text-xs font-bold">Login/SignUp</p> */}
          </div>
        ) : (
          <div>
            <p className="text-xs font-700 m-0 p-0">Hey, there</p>
            <p className="text-xs font-700 m-0 p-0">Login/SignUp</p>
          </div>
        )}
      </>
    );
  }, [userDetails]);

  return (
    <div className="block md:hidden">
      <div className="flex gap-4 items-center">
        <SearchBarComponent />
        <div onClick={() => router.push("/cart")} className="cursor-pointer">
          <Badge number={cartCount}>
            <CartIcon />
          </Badge>
        </div>
        <div className="relative flex items-center gap-1 cursor-pointer rounded-full group">
          <div className="flex items-center gap-1 cursor-pointer rounded-full group/logout-button">
            <Image
              src={
                userDetails?.avatar
                  ? userDetails?.avatar
                  : "/assets/images/avatar.png"
              }
              alt="avatar"
              width={30}
              height={30}
              loading="lazy"
              className="rounded-full"
              style={{ objectFit: "cover" }}
            />
            {getUserNames()}
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {userDetails?.isLoggedIn ? (
              <UIButton
                text="Logout"
                onClick={handleLogout}
                className="text-md px-8 py-2 pr-12 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500"
              />
            ) : (
              <UIButton
                text="Login"
                onClick={handleOnClickAvatar}
                className="text-md px-8 py-2 pr-12 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobileComponentView;
