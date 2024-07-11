"use client";
import React from "react";

import NavbarView from "./navbar-view";
import useNavbarController from "./navbar-controller";

const Navbar = () => {
  const { isScrolled, cartCount } = useNavbarController();
  return <NavbarView isScrolled={isScrolled} cartCount={cartCount} />;
};

export default Navbar;
