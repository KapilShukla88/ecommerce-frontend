import { createSelector, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppState } from "@store/configure-store";
import { apiCallBegan } from "@store/middlewares/api-middleware-actions";
import { toast } from "react-toastify";

const orderSlice = createSlice({
  name: "order",
  initialState: <any>{
    orders: [],
  },
  reducers: {
    addNewOrderApiStart: (order, { payload }) => {},
    addNewOrderApiResponse: (order, { payload }) => {
      console.log("add new order payload =>>", payload);
      toast.success("Your order has been placed successfully.");
    },
    addNewOrderApiError: (order, { payload }) => {},
    getOrdersApiStart: () => {},
    getOrdersApiResponse: (order, { payload }) => {
      order.orders = payload?.data || [];
    },
    getOrdersApiError: () => {},
  },
});

export const {
  addNewOrderApiStart,
  addNewOrderApiResponse,
  addNewOrderApiError,
  getOrdersApiStart,
  getOrdersApiResponse,
  getOrdersApiError,
} = orderSlice.actions;

export default orderSlice.reducer;

export const callToSubmitNewOrder = (data: any) => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiCallBegan.type,
    payload: {
      url: "/orders/new",
      method: "POST",
      onStart: addNewOrderApiStart.type,
      onSuccess: addNewOrderApiResponse.type,
      onError: addNewOrderApiError.type,
      data,
      auth: true,
    },
  });
};

export const callToGetOrders = () => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiCallBegan.type,
    payload: {
      url: "/orders/me",
      method: "GET",
      onStart: getOrdersApiStart.type,
      onSuccess: getOrdersApiResponse.type,
      onError: getOrdersApiError.type,
      auth: true,
    },
  });
};

export const getAllMyOrders = createSelector(
  (state: AppState) => state.entities.orders,
  (user) => user?.orders || []
);
