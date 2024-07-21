import "./nav-tabs-styles.css";
import React, { useCallback } from "react";

import Link from "next/link";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import ChevronDown from "src/resources/icons/chevron-down";
import { categories } from "src/resources/constants";
import { useRouter } from "next/navigation";

const NavCategoriesDropdownLink = ({ handleCategories }: any) => {
  return (
    <>
      {/* <div className="flex flex-row-reverse items-center gap-1 cursor-pointer">
        <ChevronDown />
        <p className="font-semibold">Categories</p>
      </div> */}
      <Dropdown title="Categories">
        {categories?.map((item, index) => {
          return (
            <Dropdown.Item
              key={index}
              className="text-gray-500"
              onClick={() => handleCategories(item?.id)}
            >
              {item.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown>
    </>
  );
};

const NavTabsComponentView = () => {
  const router = useRouter();

  const handleCategories = useCallback((category: string) => {
    router.push(`/products?category=${category}`);
  }, []);
  return (
    <div className="hidden md:block">
      <div className="flex flex-row gap-6 items-center relative">
        <Link href="/" className="font-semibold text-gray-500">
          Home
        </Link>
        <Link href="/products" className="font-semibold text-gray-500">
          Products
        </Link>
        {/* categories dropdown */}
        <NavCategoriesDropdownLink handleCategories={handleCategories} />
      </div>
    </div>
  );
};

export default NavTabsComponentView;
