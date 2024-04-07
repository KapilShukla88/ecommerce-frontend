import React from "react";

import TrendsComponentView from "./trends-component-view";
import useTrendsComponentController from "./trends-component-controller";

const TrendsComponent = () => {
  const { handleCallback } = useTrendsComponentController();
  return <TrendsComponentView handleCallback={handleCallback} />;
};

export default TrendsComponent;
