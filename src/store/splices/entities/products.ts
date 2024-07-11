import { createSelector, createSlice, current } from "@reduxjs/toolkit";
import { setUserLocalStorage } from "@service/localStorageService";
import { AppDispatch, AppState } from "@store/configure-store";
import { apiCallBegan } from "@store/middlewares/api-middleware-actions";

interface iProductParams {
  popularProducts: any;
  allProducts: any;
  productDetails: any;
}

const productSlice = createSlice({
  name: "products",
  initialState: {
    popularProducts: [],
    allProducts: [],
    productDetails: {},
  } as iProductParams,
  reducers: {
    startToGetAllPopularProducts: (product, { payload }) => {},
    allPopularProductsReducer: (product, { payload }) => {
      product.popularProducts = payload?.data || [];
    },
    onFailedGetAllPopularProducts: (product, { payload }) => {},
    allProductsStart: (product, { payload }) => {},
    allProductsResponseReducer: (product, { payload }) => {
      product.allProducts = payload.data;
    },
    allProductApiError: (product, { payload }) => {},
    startToGetProductDetails: (product, { payload }) => {},
    productDetailResponseReducer: (product, { payload }) => {
      product.productDetails = payload.data;
    },
    errorToGetProductDetails: (product, { payload }) => {},
  },
});

const {
  startToGetAllPopularProducts,
  allPopularProductsReducer,
  onFailedGetAllPopularProducts,
  allProductsStart,
  allProductsResponseReducer,
  allProductApiError,
  startToGetProductDetails,
  productDetailResponseReducer,
  errorToGetProductDetails,
} = productSlice.actions;

export default productSlice.reducer;

export const callToGetAllPopularProducts = () => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiCallBegan.type,
    payload: {
      url: "/products/popular-products",
      method: "GET",
      onStart: startToGetAllPopularProducts.type,
      onSuccess: allPopularProductsReducer.type,
      onError: onFailedGetAllPopularProducts.type,
      auth: false,
    },
  });
};

export const callToGetAllProducts = () => (dispatch: AppDispatch) => {
  return dispatch({
    type: apiCallBegan.type,
    payload: {
      url: "/products",
      method: "GET",
      onStart: allProductsStart.type,
      onSuccess: allProductsResponseReducer.type,
      onError: allProductApiError.type,
      auth: false,
    },
  });
};

export const callToGetProductDetail =
  (productId: string) => (dispatch: AppDispatch) => {
    return dispatch({
      type: apiCallBegan.type,
      payload: {
        url: `/products/${productId}`,
        method: "GET",
        onStart: startToGetProductDetails.type,
        onSuccess: productDetailResponseReducer.type,
        onError: errorToGetProductDetails.type,
        auth: false,
      },
    });
  };

export const getAllPopularProducts = createSelector(
  (state: AppState) => state.entities.productReducer,
  (products) => products?.popularProducts || []
);

export const getAllProducts = createSelector(
  (state: AppState) => state.entities.productReducer,
  (products) => products?.allProducts || []
);

export const getProductDetail = createSelector(
  (state: AppState) => state.entities.productReducer,
  (product) => product?.productDetails || {}
);
