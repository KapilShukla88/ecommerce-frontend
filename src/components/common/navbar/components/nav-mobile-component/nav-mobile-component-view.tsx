import Image from "next/image";
import React from "react";
import SearchBarComponent from "../search-bar-component";
import { useRouter } from "next/navigation";
import Badge from "@components/common/badge-component";
import CartIcon from "src/resources/icons/cart-icon";

const NavMobileComponentView: React.FC<any> = ({
  userDetails = {},
  cartCount,
}) => {
  const router = useRouter();

  return (
    <div className="block md:hidden">
      <div className="flex gap-4 items-center">
        <SearchBarComponent />
        <div onClick={() => router.push("/cart")} className="cursor-pointer">
          <Badge number={cartCount}>
            <CartIcon />
          </Badge>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default NavMobileComponentView;
