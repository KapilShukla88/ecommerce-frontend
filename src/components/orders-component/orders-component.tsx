"use client";
import React from "react";
import OrdersComponentView from "./orders-component-view";
import useOrdersComponentController from "./orders-component-controller";

const OrderComponent: React.FC<{}> = () => {
  const {orders} = useOrdersComponentController();
  return <OrdersComponentView data={orders} />;
};

export default OrderComponent;
