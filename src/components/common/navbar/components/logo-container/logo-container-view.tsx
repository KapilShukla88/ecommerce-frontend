"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LogoContainerView: React.FC<{}> = () => {
  return (
    <div>
      <Link href="/" className="hidden md:block">
        <Image
          src={require("@assets/images/popular/logo-2.png")}
          width={150}
          height={50}
          alt="finestdeals"
          priority
        />
      </Link>
      <Link href="/" className="block md:hidden">
        <Image
          src={require("@assets/images/popular/logo-1.jpeg")}
          width={40}
          height={40}
          alt="finestdeals"
          priority
        />
      </Link>
    </div>
  );
};

export default LogoContainerView;
