import React from "react";

const CardsView: React.FC<iCardsViewParams> = ({
  children,
  title,
  subTitle,
  price,
  btnText,
}) => {
  return (
    <div>
      {children}
      <div className="flex flex-col items-center py-3">
        <h3 className={`${title ? "visible" : "hidden"} text-xl font-semibold`}>
          {title}
        </h3>
        <p className={`${subTitle ? "visible" : "hidden"}`}>{subTitle}</p>
        <p className={`${price ? "visible" : "hidden"} font-sans font-bold`}>
          {price}
        </p>
        <button className="bg-[#ffb759] rounded-full px-4 py-1 font-700 text-sm mt-3">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default CardsView;
