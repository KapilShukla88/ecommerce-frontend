"use client";
import React from "react";
import NavProfileComponentView from "./nav-profile-component-view";
import useNavProfileController from "./nav-profile-controller";

const NavProfileComponent: React.FC<{ cartCount: number }> = ({
  cartCount = 0,
}) => {
  const {
    isSearchInputVisible,
    searchData,
    searchText,
    onChangeSearchText,
    toggleSearchBar,
    handleOnClickSearchProduct,
  } = useNavProfileController();
  return (
    <NavProfileComponentView
      cartCount={cartCount}
      isSearchInputVisible={isSearchInputVisible}
      searchData={searchData}
      searchText={searchText}
      onChangeSearchText={onChangeSearchText}
      toggleSearchBar={toggleSearchBar}
      handleOnClickSearchProduct={handleOnClickSearchProduct}
    />
  );
};

export default NavProfileComponent;
