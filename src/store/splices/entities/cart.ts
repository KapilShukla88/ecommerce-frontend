import { createSelector, createSlice, current } from "@reduxjs/toolkit";
import {
  localStorageServiceGet,
  localStorageServiceSet,
  setUserLocalStorage,
} from "@service/localStorageService";
import { AppDispatch } from "@store/configure-store";

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
    localCartData: JSON.parse(localStorageServiceGet("@cartsData", "{}")),
  },
  reducers: {
    addToCartReducers: (cart, { payload }) => {
      // let cartItems = [];
      // if (Object.keys(cart.localCartData).length > 0) {
      //   cart.localCartData.count = cart.localCartData.count + 1;

      //   localStorage.removeItem("@cartsData");
      //   cartItems = cart.localCartData.cartItems;
      //   console.log("cartitems ==>>", current(cartItems), payload);
      //   let findItem = cartItems?.filter(
      //     (cart: any) => cart.productId === payload
      //   );
      //   let newCartObject = {};
      //   if (findItem[0]?.productId === payload) {
      //     cartItems = cartItems.filter(
      //       (cart: any) => cart.productId !== payload
      //     );

      //     findItem[0].no_of_times_added = findItem[0].no_of_times_added + 1;
      //     //   cartItems.push(findItem[0]);
      //     newCartObject = findItem[0];
      //   } else {
      //     newCartObject = {
      //       productId: payload,
      //       no_of_times_added: 1,
      //     };
      //   }
      //   cartItems = [...cartItems, newCartObject];

      //   const cartObject = {
      //     count: cart.localCartData.count,
      //     cartItems: cartItems,
      //   };
      //   cart.localCartData = cartObject;
      //   localStorageServiceSet("@cartsData", cartObject);
      // } else {
      //   const cartItemObject = {
      //     productId: payload,
      //     no_of_times_added: 1,
      //   };
      //   const cartObject = {
      //     count: 1,
      //     cartItems: [cartItemObject],
      //   };
      //   cartItems.push(cartItemObject);
      //   cart.localCartData = cartObject;
      //   localStorageServiceSet("@cartsData", cartObject);
      // }
    },
  },
});

export const { addToCartReducers } = cartSlice.actions;

export default cartSlice.reducer;

export const updateCartItem =
  (productId: string) => (dispatch: AppDispatch) => {
    return dispatch({ type: addToCartReducers.type, payload: productId });
  };

export const getCartCount = createSelector(
  (state: any) => state.entities.cart,
  (cart: any) => cart?.localCartData?.count || 0
);
