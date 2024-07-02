import React, { useEffect } from "react";
import withAuth from "./isAuth";
import { useAppDispatch } from "@store/configure-store";
import { localStorageServiceGet } from "@service/localStorageService";
import { updateLoginResponse } from "@store/splices/entities/auth";

const AuthGuard: React.FC<any> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = localStorageServiceGet("user") || false;

  useEffect(() => {
    if (user) {
      const userData = JSON.parse(user);
      if (userData.isLoggedIn) {
        dispatch(updateLoginResponse(userData));
      }
    }
  }, []);

  return <>{children}</>;
};

export default withAuth(AuthGuard);
