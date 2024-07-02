import { createSelector, createSlice, current } from "@reduxjs/toolkit";
import { setUserLocalStorage } from "@service/localStorageService";
import { AppDispatch } from "@store/configure-store";

interface iProductParams {
  popularProducts: any;
  allProducts: any;
}

const productSlice = createSlice({
  name: "products",
  initialState: {} as any,
  reducers: {
    startToGetAllPopularProducts: (product, { payload }) => {},
    getAllPopularProducts: (product, { payload }) => {},
    onFailedGetAllPopularProducts: (product, { payload }) => {},
  },
});
