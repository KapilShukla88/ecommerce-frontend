"use client";
import React from "react";

import CarousalView from "./carousal-view";
import useCarousalController from "./carousal-controller";

const Carousal = () => {
  const { selectedIndex, carousalData } = useCarousalController();
  return <CarousalView selectedIndex={selectedIndex} data={carousalData} />;
};

export default Carousal;
