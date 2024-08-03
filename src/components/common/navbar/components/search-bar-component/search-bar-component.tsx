import React from "react";
import SearchBarComponentView from "./search-bar-component-view";
import useSearchBarComponentController from "./search-bar-component-controller";

const SearchBarComponent: React.FC<{}> = () => {
  const {
    isSearchInputVisible,
    searchData,
    searchText,
    onChangeSearchText,
    toggleSearchBar,
    handleOnClickSearchProduct,
  } = useSearchBarComponentController();
  return (
    <SearchBarComponentView
      isSearchInputVisible={isSearchInputVisible}
      searchData={searchData}
      searchText={searchText}
      onChangeSearchText={onChangeSearchText}
      toggleSearchBar={toggleSearchBar}
      handleOnClickSearchProduct={handleOnClickSearchProduct}
    />
  );
};

export default SearchBarComponent;
