"use client";
import React from "react";

import NavbarView from "./navbar-view";
import useNavbarController from "./navbar-controller";

const Navbar = () => {
  const { isScrolled } = useNavbarController();
  return <NavbarView isScrolled={isScrolled} />;
};

export default Navbar;
