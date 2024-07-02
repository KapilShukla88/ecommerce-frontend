"use client";
import React from "react";
import CardsView from "./cards-view";

const Cards: React.FC<iCardsParams> = ({
  children,
  title = "",
  price = "",
  subTitle = "",
  productId = "",
  btnText = "",
  isCartNeed = false,
  onClick = () => {},
}) => {
  return (
    <CardsView
      title={title}
      productId={productId}
      price={price}
      isCartNeed={isCartNeed}
      subTitle={subTitle}
      btnText={btnText}
      onClick={onClick}
    >
      {children}
    </CardsView>
  );
};

export default Cards;
