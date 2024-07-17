"use client";
import { useAppDispatch } from "@store/configure-store";
import { callToGetAllProducts } from "@store/splices/entities/products";
import { useCallback, useState } from "react";

const useSidebarController = () => {
  const [priceRangeValue, setPriceValue] = useState<number>(0);
  const [filterValues, setFilterValues] = useState<any>({});

  const dispatch = useAppDispatch();

  const handleOnChangePriceRange = useCallback((value: number) => {
    setPriceValue(value);
  }, []);
  let object: any = {};

  function dictToQueryParams(data: any) {
    const queryParams = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        queryParams.push(`${key}=${JSON.stringify(data[key])}`);
      }
    }
    return queryParams.join("&");
  }
  const handleTheFilters = useCallback((type: string, values: string) => {
    if (object[type] && Array.isArray(object[type])) {
      if (object[type]?.includes(values)) {
        const filterValues = object[type].filter(
          (value: string) => value !== values
        );
        object[type] = filterValues;
      } else {
        if (
          object[type] &&
          Array.isArray(object[type]) &&
          object[type]?.length > 0
        ) {
          object[type]?.push(values);
        } else {
          object[type] = [values];
        }
      }
    } else {
      object[type] = [values];
    }
    setFilterValues(object);
    const response = dictToQueryParams(object);
    dispatch(callToGetAllProducts(response));
  }, []);

  const handlePriceFilter = useCallback(
    (value: any) => {
      let query = "";
      console.log('object =>>', object)

      if (value?.lowPrice && value?.highPrice) {
        query = `lowPrice=${value?.lowPrice}&highPrice=${value?.highPrice}`;
      } else {
        query = value?.lowPrice
          ? `lowPrice=${value?.lowPrice}`
          : `highPrice=${value?.highPrice}`;
      }
      const param =
        Object.keys(object)?.length > 0
          ? query + "&" + dictToQueryParams(object)
          : query;
      dispatch(callToGetAllProducts(param));
    },
    [dispatch]
  );

  return { priceRangeValue,handlePriceFilter, handleTheFilters, handleOnChangePriceRange };
};

export default useSidebarController;
