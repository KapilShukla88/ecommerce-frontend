"use client";

import { useAppDispatch, useAppSelector } from "@store/configure-store";
import {
  callToGetOrders,
  getAllMyOrders,
} from "@store/splices/entities/orders";
import { useEffect } from "react";

const useOrdersComponentController = () => {
  const dispatch = useAppDispatch();

  const orders = useAppSelector(getAllMyOrders);

  useEffect(() => {
    dispatch(callToGetOrders());
  }, []);

  return { orders };
};

export default useOrdersComponentController;
