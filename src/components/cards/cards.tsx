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
  onClickCart = () => {},
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
      onClickCart={onClickCart}
    >
      {children}
    </CardsView>
  );
};

export default Cards;
