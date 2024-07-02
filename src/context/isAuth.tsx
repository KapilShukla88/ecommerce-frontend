"use client";
import { getLocalStorage } from "@service/localStorageService";
import { useAppDispatch } from "@store/configure-store";
import { updateLoginResponse } from "@store/splices/entities/auth";
import { redirect, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const protectedRoutes = ["/auth"];

const withAuth = (WrappedComponent: any) => {
  return function useAuth(props: any) {
    const pathname = usePathname();
    const isLoggedIn = getLocalStorage("isLoggedIn") || false;

    const handleAuth = useCallback(() => {
      if (protectedRoutes?.includes(pathname) && isLoggedIn) {
        redirect("/");
      }
    }, [isLoggedIn, pathname]);

    useEffect(() => {
      handleAuth();
    }, [handleAuth]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
