import AssetsWrapperComponent from "@components/wrappers/assets-wrapper-component";
import React from "react";

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
    <div className="h-[40rem] w-full relative z-0">
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
    </div>
  );
};

export default CarousalView;
