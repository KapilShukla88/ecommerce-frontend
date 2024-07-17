"use client";
import React from "react";
import SidebarView from "./sidebar-view";
import useSidebarController from "./sidebar-controller";

const Sidebar: React.FC<{}> = () => {
  const {
    priceRangeValue,
    handleTheFilters,
    handlePriceFilter,
    handleOnChangePriceRange,
  } = useSidebarController();
  return (
    <SidebarView
      priceRangeValue={priceRangeValue}
      handleTheFilters={handleTheFilters}
      handlePriceFilter={handlePriceFilter}
      handleOnChangePriceRange={handleOnChangePriceRange}
    />
  );
};

export default Sidebar;
