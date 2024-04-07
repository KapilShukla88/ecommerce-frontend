import React from "react";

import TrendsWrapperComponentView from "./trends-wrapper-component-view";

const TrendsWrapperComponent: React.FC<iTrendsWrapperComponentParams> = ({
  btnText = "Shop Now",
  contentPosition = "center",
  titleText = "",
  seasonDateText = "",
  imgUrl,
  callback,
}) => {
  return (
    <TrendsWrapperComponentView
      btnText={btnText}
      titleText={titleText}
      seasonDateText={seasonDateText}
      callback={callback}
      contentPosition={contentPosition}
      imgUrl={imgUrl}
    />
  );
};

export default TrendsWrapperComponent;
