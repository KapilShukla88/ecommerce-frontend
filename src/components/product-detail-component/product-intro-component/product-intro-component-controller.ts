import { useCallback, useState } from "react";

const useProductIntroComponentController = () => {
  const [noOfProduct, setNoOfProduct] = useState<number>(1);

  const handleOnIncreaseProducts = useCallback(() => {
    setNoOfProduct((prev: number) => prev + 1);
  }, []);

  const handleOnDecreaseProducts = useCallback(() => {
    if (noOfProduct === 1) {
      return;
    }

    setNoOfProduct((prev: number) => prev - 1);
  }, [noOfProduct]);

  return { noOfProduct, handleOnIncreaseProducts, handleOnDecreaseProducts };
};

export default useProductIntroComponentController;
