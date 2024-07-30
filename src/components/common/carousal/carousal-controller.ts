'use client';
import { useEffect, useState } from "react";
import carousalData from "../../../utils/configs/carsousal.json";

const fadeOutClassName = "";
const fadeInClassName = "delay-75 ease-in-out duration-75";

const useCarousalController = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [bannerClassName, setBannerClassName] = useState<string>("");

  const banners = Array(carousalData?.length)?.fill(0);
  
  const bannerAnimation = () => {
    if (banners && banners.length > 1) {
      setBannerClassName("");
      setTimeout(() => {
        setSelectedIndex((selectedIndex) =>
          selectedIndex >= banners.length - 1 ? 0 : selectedIndex + 1
        );
        setBannerClassName(fadeInClassName);
      }, 2000);
    }
  };

  useEffect(() => {
    const interval = setInterval(bannerAnimation, 10000);
    return () => clearInterval(interval);
  }, []);

  return { selectedIndex, bannerClassName, carousalData };
};

export default useCarousalController;
