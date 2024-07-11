import React from "react";

import ProductReviewComponentView from "./product-review-component-view";

const ProductReviewComponent: React.FC<{ reviews: any }> = ({
  reviews = [],
}) => {
  return <ProductReviewComponentView reviews={reviews} />;
};

export default ProductReviewComponent;
