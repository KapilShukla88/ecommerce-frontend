import { createSelector, createSlice, current } from "@reduxjs/toolkit";
import {
  localStorageServiceGet,
  localStorageServiceSet,
  setUserLocalStorage,
} from "@service/localStorageService";
import { AppDispatch, AppState } from "@store/configure-store";
import { apiCallBegan } from "@store/middlewares/api-middleware-actions";
import { toast } from "react-toastify";
import { DYNAMICS_CONSTANTS } from "src/resources/constants";

/**
 * {
 * count: 0,
 * cartItems: [
 * {
 * productId: "",
 * no_of_times_added: 1 //minimum one
 * }
 * ]
 * }
 */
const cartSlice = createSlice({
  name: "cart",
  initialState: <any>{
    cartData: [], // localStorageServiceGet("@cartsData", "{}") ? JSON.parse(localStorageServiceGet("@cartsData", "{}")) : {},
    totalCount: 0,
    shippingInfo: localStorageServiceGet("shippingInfo")
      ? JSON.parse(localStorageServiceGet("shippingInfo") as any)
      : {},
  },
  reducers: {
    startAddToCartApi: (cart, { payload }) => {},
    addToCartResponse: (cart, { payload }) => {
      cart.totalCount = payload?.data.total_count || 0;

      if (payload?.data?.cart_items) {
        cart.cartData = payload?.data?.cart_items;
      }
      // toast.success(DYNAMICS_CONSTANTS.ADDED_TO_CART);
    },
    addToCartError: (cart, { payload }) => {},
    startToDeleteCart: (cart, { payload }) => {},
    cartDeleteResponse: (cart, { payload }) => {
      const { data, reducerData } = payload;

      cart.totalCount = data?.total_count;

      if (reducerData?.productId) {
        cart.cartData = cart.cartData.filter(
          (item: any) => item?.product?._id !== reducerData?.productId
        );
      }
    },
    cartDeleteError: (cart, { payload }) => {},
    addShippingInfo: (cart, { payload }) => {
      cart.shippingInfo = payload;
      localStorage.setItem("shippingInfo", JSON.stringify(payload));
    },
  },
});

export const {
  startAddToCartApi,
  addToCartResponse,
  addToCartError,
  startToDeleteCart,
  cartDeleteResponse,
  cartDeleteError,
  addShippingInfo,
} = cartSlice.actions;

export default cartSlice.reducer;

export const apiToCallAddToCart = (data: any) => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiCallBegan.type,
    payload: {
      url: "/cart",
      method: "POST",
      onStart: startAddToCartApi.type,
      onSuccess: addToCartResponse.type,
      onError: addToCartError.type,
      data,
      auth: true,
    },
  });
};

export const apiToGetAllCartData = () => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiCallBegan.type,
    payload: {
      url: "/cart",
      method: "GET",
      onStart: startAddToCartApi.type,
      onSuccess: addToCartResponse.type,
      onError: addToCartError.type,
      auth: true,
    },
  });
};

export const getCartTotalCount = () => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiCallBegan.type,
    payload: {
      url: "/cart/cart-count",
      method: "GET",
      onStart: startAddToCartApi.type,
      onSuccess: addToCartResponse.type,
      onError: addToCartError.type,
      auth: true,
    },
  });
};

export const deleteCartItem =
  (productId: string) => (dispatch: AppDispatch) => {
    return dispatch({
      type: apiCallBegan.type,
      payload: {
        url: `/cart/${productId}`,
        method: "DELETE",
        reducerData: { productId },
        onStart: startToDeleteCart.type,
        onSuccess: cartDeleteResponse.type,
        onError: cartDeleteError.type,
        auth: true,
      },
    });
  };

export const updateShippingInfo = (info: any) => (dispatch: AppDispatch) => {
  return dispatch({ type: addShippingInfo.type, payload: info });
};

export const getCartCount = createSelector(
  (state: any) => state.entities.cart,
  (cart) => cart?.totalCount || 0
);

export const getCartData = createSelector(
  (state: AppState) => state.entities.cart,
  (cart) => cart?.cartData || []
);

export const getShippingInfo = createSelector(
  (state: AppState) => state.entities.cart,
  (items) => items?.shippingInfo || {}
);
