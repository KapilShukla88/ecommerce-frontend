import React from "react";

import TrendsWrapperComponent from "@components/wrappers/trends-wrapper-component";

const TrendsComponentView: React.FC<any> = ({ handleCallback }) => {
  return (
    <div className="flex flex-1 md:flex-row flex-col">
      <TrendsWrapperComponent
        imgUrl="/assets/images/popular-cloths-shop.png"
        callback={handleCallback}
        btnText="Shop now"
        contentPosition="center"
        titleText="new summer trends"
        seasonDateText="summer 2017"
      />
      <TrendsWrapperComponent
        imgUrl="/assets/images/popular-image-3.png"
        callback={handleCallback}
        btnText="Shop now"
        contentPosition="center"
        titleText="new summer trends"
        seasonDateText="summer 2017"
      />
      <TrendsWrapperComponent
        imgUrl="/assets/images/shoes-image.png"
        callback={handleCallback}
        contentPosition="right"
        btnText="Shop now"
        titleText="new summer trends"
        seasonDateText="summer 2017"
      />
    </div>
  );
};

export default TrendsComponentView;
