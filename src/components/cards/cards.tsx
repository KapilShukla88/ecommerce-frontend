import React from "react";
import CardsView from "./cards-view";

const Cards: React.FC<iCardsParams> = ({
  children,
  title = "",
  price = "",
  subTitle = "",
  btnText = "",
}) => {
  return (
    <CardsView
      title={title}
      price={price}
      subTitle={subTitle}
      btnText={btnText}
    >
      {children}
    </CardsView>
  );
};

export default Cards;
