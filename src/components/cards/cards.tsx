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
  className = "",
  cardRef,
  onClick = () => {},
  onClickCart = () => {},
}) => {
  return (
    <CardsView
      cardRef={cardRef}
      className={className}
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
