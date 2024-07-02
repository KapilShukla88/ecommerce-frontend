import { createSelector, createSlice, current } from "@reduxjs/toolkit";
import { setUserLocalStorage } from "@service/localStorageService";
import { AppDispatch } from "@store/configure-store";

const authReducerSlice = createSlice({
  name: "auth",
  initialState: <iUser>{
    user_id: null,
    first_name: null,
    last_name: null,
    user_name: null,
    mobile_number: null,
    email: null,
    token: null,
    refresh_token: null,
    isLoggedIn: false,
  },
  reducers: {
    setAuthenticatedResponse: (auth: iUser, { payload }) => {
      // setLocalStorage("isLoggedIn", payload);
      const {
        first_name,
        last_name,
        email,
        avatar,
        refreshToken,
        accessToken,
        isLoggedIn,
      } = payload;

      const userData = {
        first_name,
        last_name,
        email,
        avatar,
        refresh_token: refreshToken,
        token: accessToken,
        isLoggedIn: isLoggedIn,
        mobile_number: "0",
      };

      auth.first_name = userData.first_name;
      auth.last_name = userData.last_name;
      auth.mobile_number = "0";
      auth.email = userData.email;
      auth.isLoggedIn = userData.isLoggedIn;
      auth.avatar = userData.avatar;
      auth.token = userData.token;
      auth.refresh_token = userData.refresh_token;

      // setUserLocalStorage(userData);

      // auth.first_name = payload.first_name;
      // auth.last_name = payload.last_name;
      // auth.isLoggedIn = payload.isLoggedIn;
    },
  },
});

const { setAuthenticatedResponse } = authReducerSlice.actions;

export const updateLoginResponse =
  (payload: any) => (dispatch: AppDispatch) => {
    dispatch({ type: setAuthenticatedResponse.type, payload });
  };

export default authReducerSlice.reducer;

export const getUserIsLoggedInStatus = createSelector(
  (state: any) => state.entities.auth,
  (auth: iUser) => auth?.isLoggedIn || false
);

export const getUserDetails = createSelector(
  (state: any) => state.entities.auth,
  (auth: iUser) => ({
    userName: (auth?.first_name || "") + " " + (auth?.last_name || ""),
    email: auth?.email || "",
    isLoggedIn: auth?.isLoggedIn || false,
  })
);
