import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import productReducer from "./products";
import cartReducer from "./cart";

export default combineReducers({
  cart: cartReducer,
  auth: authReducer,
  productReducer: productReducer,
});
