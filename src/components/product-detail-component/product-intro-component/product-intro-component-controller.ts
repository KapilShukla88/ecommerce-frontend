import useToGetUserIsAuthenticated from "@utils/user-authenticated-status";
import { useCallback, useState } from "react";

const useProductIntroComponentController = (stock: number) => {
  const [noOfProduct, setNoOfProduct] = useState<number>(1);

  const isLoggedIn = useToGetUserIsAuthenticated();

  const handleOnIncreaseProducts = useCallback(() => {
    if (noOfProduct === stock) {
      return;
    }
    setNoOfProduct((prev: number) => prev + 1);
  }, [noOfProduct, stock]);

  const handleOnDecreaseProducts = useCallback(() => {
    if (noOfProduct === 1) {
      return;
    }

    setNoOfProduct((prev: number) => prev - 1);
  }, [noOfProduct]);

  return {
    noOfProduct,
    isLoggedIn,
    handleOnIncreaseProducts,
    handleOnDecreaseProducts,
  };
};

export default useProductIntroComponentController;
