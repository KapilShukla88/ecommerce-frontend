"use client";
import React from "react";
import CardsCarousalComponentView from "./cards-carousal-component-view";
import useCardsCarousalComponentController from "./cards-carousal-component-controller";

const CardsCarousalComponent: React.FC<iCardsCarousalComponentParams> = ({
  productsImages = [],
}) => {
  const { selectedCardIndex, onClickCarousalCTA } =
    useCardsCarousalComponentController();
  return (
    <CardsCarousalComponentView
      productsImages={productsImages}
      selectedCardIndex={selectedCardIndex}
      onClickCarousalCTA={onClickCarousalCTA}
    />
  );
};

export default CardsCarousalComponent;
