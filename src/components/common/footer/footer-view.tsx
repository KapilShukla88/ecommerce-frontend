import Image from "next/image";
import React from "react";

const FooterView: React.FC<{}> = () => {
  return (
    <div className="bg-[#12463C] p-3 flex justify-center flex-col items-center">
      <div className="container flex justify-between items-center">
        <div>
          <Image
            src="/assets/mini-logo.png"
            alt="finest deals"
            width={100}
            height={100}
          />
        </div>
        <div className="flex gap-1">
          <p className="text-md text-white">About Us</p>
          <p className="text-md text-white">|</p>
          <p className="text-md text-white">Blog</p>
          <p className="text-md text-white">|</p>
          <p className="text-md text-white">FAQ</p>
        </div>
      </div>
      <p className="text-xs text-white text-center">© All copyright 2024</p>
    </div>
  );
};

export default FooterView;
