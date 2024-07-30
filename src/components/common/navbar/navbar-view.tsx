"use client";
import React from "react";
import { usePathname } from "next/navigation";

import MenuIcon from "src/resources/icons/menu-icon";
import LogoContainer from "./components/logo-container";
import NavProfileComponent from "./components/nav-profile-component";
import NavTabsComponent from "./components/nav-tabs-component";

// TODO: need to separate this based on the responsive ness
const NavMobileMenuComponent = () => {
  return (
    <div className="block md:hidden">
      <MenuIcon />
    </div>
  );
};

const NavbarView: React.FC<{ isScrolled: boolean; cartCount: number }> = ({
  isScrolled = false,
  cartCount = 0,
}) => {
  const pathname = usePathname();
  return (
    <nav
      className={`${pathname !== "/" ? "sticky" : "fixed"} top-0 ${
        isScrolled || pathname !== "/" ? "md:top-0" : "md:top-6"
      } left-0 w-full bg-white md:bg-transparent z-10`}
    >
      <div
        className={`container ${
          isScrolled || pathname !== "/"
            ? "max-w-full bg-white"
            : "md:rounded-md bg-white"
        } mx-auto shadow-md py-2 px-4`}
      >
        {/* Your navbar content goes here */}
        <div className="flex justify-between items-center">
          <LogoContainer />
          <NavTabsComponent />
          <NavProfileComponent cartCount={cartCount} />
          <NavMobileMenuComponent />
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
