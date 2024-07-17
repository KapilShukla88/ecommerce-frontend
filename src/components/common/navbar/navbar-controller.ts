"use client";
import { useAppDispatch, useAppSelector } from "@store/configure-store";
import { getCartCount, getCartTotalCount } from "@store/splices/entities/cart";
import { useEffect, useState } from "react";

const useNavbarController = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const cartCount = useAppSelector(getCartCount);
  const dispatch = useAppDispatch();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    dispatch(getCartTotalCount());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolled, cartCount };
};

export default useNavbarController;
