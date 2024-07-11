"use client";
import { useAppSelector } from "@store/configure-store";
import { getCartCount } from "@store/splices/entities/cart";
import { useEffect, useState } from "react";

const useNavbarController = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const cartCount = useAppSelector(getCartCount);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolled, cartCount };
};

export default useNavbarController;
