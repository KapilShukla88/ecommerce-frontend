import React from "react";
import useTrendsComponentController from "./trends-component-controller";
import TrendsComponentView from "./trends-component-view";


const TrendsComponent = () => {
  const { handleCallback } = useTrendsComponentController();
  return <TrendsComponentView handleCallback={handleCallback} />;
};

export default TrendsComponent;
