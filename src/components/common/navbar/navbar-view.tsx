"use client";
import React from "react";

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

const NavbarView:React.FC<{isScrolled: boolean}> = ({isScrolled = false}) => {
  return (
    <nav className={`fixed top-0 ${isScrolled ? "md:top-0" : "md:top-3"} left-0 w-full bg-white md:bg-transparent z-10`}>
      <div className={`container ${isScrolled ? "max-w-full bg-white" : "md:rounded-xl"} mx-auto shadow-md p-4`}>
        {/* Your navbar content goes here */}
        <div className="flex justify-between items-center">
          <LogoContainer />
          <NavTabsComponent />
          <NavProfileComponent />
          <NavMobileMenuComponent />
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
