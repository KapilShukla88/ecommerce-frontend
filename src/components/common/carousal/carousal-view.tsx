import AssetsWrapperComponent from "@components/wrappers/assets-wrapper-component";
import React from "react";
import UIButton from "src/widgets/ui-button";

const getFileType: {
  [key: string]: string;
} = {
  img: "image",
};

type eComponentType = "image" | "video";

/**
 * data: 1. slug and sourceType- according to the sourceType we need to decide whether it is image component or video component
 * 2. and if it is image type then we have to wrap it on Link component other wise video component
 */
const CarousalView: React.FC<iCarousalViewParams> = ({
  selectedIndex,
  data = [],
}) => {
  const carousalData = data?.[selectedIndex];
  return (
    <div className="h-[52rem] w-full relative z-0">
      {carousalData && (
        <AssetsWrapperComponent
          componentType={
            getFileType?.[carousalData?.sourceType] as eComponentType
          }
          componentURL={carousalData?.imgUrl}
          componentALT={carousalData?.name}
          componentLINK={carousalData?.slug}
        />
      )}
      {/* <UIButton
        text="Explore Products"
        className="absolute bottom-0 top-0 active:scale-95 ease-in-out h-14 delay-100 bg-white left-0 right-0 px-8 m-auto w-56 py-2 font-semibold shadow-md text-black  text-lg min-w-fit rounded-md"
      /> */}
    </div>
  );
};

export default CarousalView;
