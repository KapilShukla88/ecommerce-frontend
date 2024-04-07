"use client";
import Image from "next/image";
import React from "react";

const getPositionClassName = (position: trendsContentPosition) => {
  switch (position) {
    case "center":
      return "items-center top-0 md:left-[22%] ";
    case "left":
      return "items-start left-0 top-0";
    case "right":
      return "items-end right-0 top-0";
    default:
      return "items-center";
  }
};

const TrendsWrapperComponentView: React.FC<
  iTrendsWrapperComponentViewParams
> = ({
  titleText = "",
  btnText = "shop now",
  seasonDateText = "",
  contentPosition = "left",
  imgUrl = "",
  callback,
}) => {
  return (
    // <div className=" flex flex-1">
    <div className="relative flex flex-1">
      <div className="overflow-hidden w-full relative ">
        <div className="relative h-[20rem] hover:scale-105 transition duration-700 ease-in-out ">
          <Image src={imgUrl} fill alt={titleText} />
        </div>
        {/* <div className="flex flex-col items-start"> */}

        {/* </div> */}
        <div
          className={`p-3 absolute flex flex-col gap-2 justify-center h-full ${getPositionClassName(
            contentPosition
          )}`}
        >
          <p className="font-bold text-xs text-white m-0">{seasonDateText}</p>
          <h1 className="font-bold text-2xl text-white uppercase mt-0">
            {titleText}
          </h1>
          <button
            onClick={async () => {
              await callback();
            }}
            className="hover:bg-white hover:text-black border-2 min-w-fit max-w-[5%] rounded-3xl py-1 px-3 text-center text-white border-white uppercase text-xs"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendsWrapperComponentView;
