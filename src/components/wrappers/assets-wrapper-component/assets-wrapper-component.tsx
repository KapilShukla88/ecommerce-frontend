import React from "react";
import AssetsWrapperComponentView from "./assets-wrapper-component-view";

type eComponentType = "image" | "video";

interface iAssetsWrapperComponentProps {
  readonly componentType?: eComponentType;
  readonly componentURL: string;
  readonly componentALT?: string;
  readonly componentLINK?: string;
  readonly style?: string;
}

const AssetsWrapperComponent: React.FC<iAssetsWrapperComponentProps> = (
  props
) => {
  return <AssetsWrapperComponentView {...props} />;
};

export default AssetsWrapperComponent;
