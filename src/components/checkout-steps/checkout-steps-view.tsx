"use client";
import React from "react";

import { Steps } from "rsuite";
import DetailIcon from "@rsuite/icons/legacy/Home";
import BookIcon from "@rsuite/icons/legacy/Book";
import PaymentIcon from "@rsuite/icons/legacy/Bank";
import "rsuite/dist/rsuite.min.css";

interface iCheckoutStepsViewParams {
  activeStep?: number;
}

const CheckoutStepsView: React.FC<iCheckoutStepsViewParams> = ({
  activeStep = 0,
}) => {
  return (
    <Steps current={activeStep}>
      <Steps.Item
        title="Shipping Details"
        icon={<DetailIcon style={{ fontSize: 20 }} />}
      />
      <Steps.Item
        title="Confirm Order"
        icon={<BookIcon style={{ fontSize: 20 }} />}
      />
      <Steps.Item
        title="Payment"
        icon={<PaymentIcon style={{ fontSize: 20 }} />}
      />
    </Steps>
  );
};

export default CheckoutStepsView;
