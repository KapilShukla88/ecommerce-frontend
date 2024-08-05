import React, { useEffect } from "react";
import withAuth from "./isAuth";
import { useAppDispatch } from "@store/configure-store";
import { localStorageServiceGet } from "@service/localStorageService";
import {
  reduxLogoutAction,
  updateLoginResponse,
} from "@store/splices/entities/auth";
import { EVENT_BUS_OAUTH_LOGOUT } from "src/resources/constants";
import { eventBus } from "@service/eventService";
import { useRouter } from "next/navigation";

const AuthGuard: React.FC<any> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = localStorageServiceGet("user") || false;

  useEffect(() => {
    eventBus.on(EVENT_BUS_OAUTH_LOGOUT, () => {
      dispatch({ type: reduxLogoutAction.type, payload: {} });
      localStorage.clear();
      router.push("/");
    });
    return () => eventBus.remove(EVENT_BUS_OAUTH_LOGOUT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      const userData = JSON.parse(user);
      if (userData.isLoggedIn) {
        const payload = {
          ...userData,
          refreshToken: userData.refresh_token || "",
          accessToken: userData?.token || "",
        };
        dispatch(updateLoginResponse(payload));
      }
    }
  }, []);

  return <>{children}</>;
};

export default withAuth(AuthGuard);
