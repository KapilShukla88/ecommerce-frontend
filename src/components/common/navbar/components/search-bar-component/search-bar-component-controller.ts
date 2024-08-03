"use client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import HttpService, { HttpMethod } from "@service/http-service";

const useSearchBarComponentController = () => {
  const [searchData, setSearchData] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isSearchInputVisible, setSearchInputVisible] =
    useState<boolean>(false);

  const router = useRouter();

  const onChangeSearchText = useCallback(
    async (text: string) => {
      setSearchText(text);
      if (text?.length === 0) {
        setSearchData([]);
        return;
      }
      try {
        const result = await HttpService(
          "",
          HttpMethod.GET,
          {},
          false,
          {},
          `/products/search/${text}`
        );

        setSearchData(result);
      } catch (error) {
        console.log("search error =>>", error);
      }
    },
    [setSearchData]
  );

  const toggleSearchBar = useCallback(() => {
    setSearchData([]);
    setSearchText("");
    setSearchInputVisible((prev) => !prev);
  }, []);

  const handleOnClickSearchProduct = useCallback((productId: string) => {
    router.push(`/products/${productId}`);
    setSearchText("");
    setSearchData([]);
  }, []);

  return {
    isSearchInputVisible,
    searchData,
    searchText,
    onChangeSearchText,
    toggleSearchBar,
    handleOnClickSearchProduct,
  };
};

export default useSearchBarComponentController;
