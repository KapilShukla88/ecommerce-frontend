"use client"
import React from "react";
import SidebarView from "./sidebar-view";
import useSidebarController from "./sidebar-controller";

const Sidebar: React.FC<{}> = () => {
  const { priceRangeValue, handleOnChangePriceRange } = useSidebarController();
  return (
    <SidebarView
      priceRangeValue={priceRangeValue}
      handleOnChangePriceRange={handleOnChangePriceRange}
    />
  );
};

export default Sidebar;
