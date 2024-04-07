"use client";
import { useEffect, useState } from "react";

const useNavbarController = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  return {isScrolled};
};

export default useNavbarController;
