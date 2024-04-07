import React from "react";
import ImageWrapper from "./components/image-wrapper";

type eComponentType = "image" | "video";

interface iAssetsWrapperComponentViewProps {
  readonly componentType?: eComponentType;
  readonly componentURL: string;
  readonly componentALT?: string;
  readonly componentLINK?: string;
  readonly style?: string;
}

const AssetsWrapperComponentView: React.FC<
  iAssetsWrapperComponentViewProps
> = ({
  componentURL = "",
  componentALT = "",
  componentLINK = "",
  componentType = "",
  style = "",
}) => {
  const componentChooser = new Map([
    [
      "image",
      <ImageWrapper
        key={componentALT}
        imgUrl={componentURL}
        alt={componentALT}
        style={style}
        slug={componentLINK}
      />,
    ],
  ]);
  return <>{componentChooser.get(componentType)}</>;
};

export default AssetsWrapperComponentView;
