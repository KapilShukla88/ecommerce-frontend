"use client"
import { useCallback, useState } from "react";

const useSidebarController = () => {
  const [priceRangeValue, setPriceValue] = useState<number>(0);

  const handleOnChangePriceRange = useCallback((value: number) => {
    setPriceValue(value);
  }, []);

  return { priceRangeValue, handleOnChangePriceRange };
};

export default useSidebarController;
