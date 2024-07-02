import React from "react";
import Link from "next/link";

import ChevronDown from "src/resources/icons/chevron-down";

const NavCategoriesDropdownLink = () => {
  return (
    <>
      <div className="flex flex-row-reverse items-center gap-1 cursor-pointer">
        <ChevronDown />
        <p className="font-semibold">Categories</p>
      </div>
    </>
  );
};

const NavTabsComponentView = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-row gap-6 items-center relative">
        <Link href="/" className="font-semibold">
          Home
        </Link>
        <Link href="/products" className="font-semibold">
          Products
        </Link>
        {/* categories dropdown */}
        <NavCategoriesDropdownLink />
      </div>
    </div>
  );
};

export default NavTabsComponentView;
