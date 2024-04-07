"use client";
import { useCallback, useState } from "react";

const useCardsCarousalComponentController = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);

  const onClickCarousalCTA = useCallback((index: number) => {
    setSelectedCardIndex(index);
  }, [setSelectedCardIndex]);

  return { selectedCardIndex, onClickCarousalCTA };
};

export default useCardsCarousalComponentController;
