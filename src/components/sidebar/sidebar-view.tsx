"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { brands, categories } from "src/resources/constants";
import UICheckbox from "src/widgets/ui-checkbox";
import RangeSlider from "src/widgets/ui-range-slider";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

/**
 *
 * @returns the ui of the categories filter component - it is use to filter out products based on the categories
 */
const CategoriesFilterComponent = ({ handleTheFilters }: any) => {
  return (
    <div className="p-2">
      <div>
        <p className="text-md font-semibold">Categories</p>
        <div className="ml-2">
          {categories?.map((category) => {
            return (
              <div className="flex gap-2 items-center" key={category?.id}>
                <UICheckbox
                  name={category?.name}
                  id={category?.id}
                  onChange={(value: string) =>
                    handleTheFilters("categories", value)
                  }
                />
                <p>{category?.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @returns the ui of the brands filter component - it is use to filter out products based on the brands
 */
const BrandsFilterComponent = ({ handleTheFilters }: any) => {
  return (
    <div className="p-2">
      <div>
        <p className="text-md font-semibold">Brands</p>
        <div className="ml-2">
          {brands?.map((brand) => {
            return (
              <div className="flex gap-2 items-center" key={brand?.id}>
                <UICheckbox
                  name={brand?.name}
                  id={brand?.id}
                  onChange={(value: string) =>
                    handleTheFilters("brands", value)
                  }
                />
                <p>{brand?.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const RangeFilterComponent = ({
  priceRangeValue,
  handleOnChangePriceRange,
}: any) => {
  return (
    <div className="p-2">
      <RangeSlider
        label="Price"
        minValue={0}
        maxValue={100}
        parentVal={priceRangeValue}
        sliderValueChanged={handleOnChangePriceRange}
      />
    </div>
  );
};

const PriceFilterComponent = ({ handleTheFilters }: any) => {
  const priceTextClassName = "hover:text-[#FF914D] cursor-pointer min-w-max";
  return (
    <div className="p-2">
      <div>
        <p className="text-md font-semibold">Price</p>
        <div className="ml-2">
          <p
            className={priceTextClassName}
            onClick={() => handleTheFilters({ highPrice: 1000 })}
          >
            Under ₹1000
          </p>
          <p
            className={priceTextClassName}
            onClick={() =>
              handleTheFilters({ lowPrice: 1000, highPrice: 5000 })
            }
          >
            ₹1000 - ₹5000
          </p>
          <p
            className={priceTextClassName}
            onClick={() =>
              handleTheFilters({ lowPrice: 5000, highPrice: 10000 })
            }
          >
            ₹5000 - ₹10000
          </p>
          <p
            className={priceTextClassName}
            onClick={() =>
              handleTheFilters({ lowPrice: 10000, highPrice: 20000 })
            }
          >
            ₹10000 - ₹20000
          </p>
          <p
            className={priceTextClassName}
            onClick={() => handleTheFilters({ lowPrice: 20000 })}
          >
            Above ₹20000
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileSidebarComponent = ({ handleTheFilters }: any) => {
  return (
    <div className="md:hidden p-2 mt-4">
      <div className="flex items-center gap-5 relative">
        <div className="relative">
          <Dropdown
            title="Categories"
            className="bg-gray-200 rounded-full px-4"
            style={{ fontSize: 16, fontWeight: 500 }}
          >
            {categories?.map((item, index) => {
              return (
                <Dropdown.Item key={index}>
                  <div className="text-gray-500 flex gap-2 items-center">
                    <UICheckbox
                      name={item?.name}
                      id={item?.id}
                      onChange={(value: string) =>
                        handleTheFilters("categories", value)
                      }
                    />
                    <p>{item?.name}</p>
                  </div>
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>

        <Dropdown
          title="Brands"
          className="bg-gray-200 rounded-full px-4"
          style={{ fontSize: 16, fontWeight: 500 }}
        >
          {brands?.map((brand) => {
            return (
              <Dropdown.Item key={brand?.id}>
                <div className="text-gray-500 flex gap-2 items-center">
                  <UICheckbox
                    name={brand?.name}
                    id={brand?.id}
                    onChange={(value: string) =>
                      handleTheFilters("brands", value)
                    }
                  />
                  <p>{brand?.name}</p>
                </div>
              </Dropdown.Item>
            );
          })}
        </Dropdown>
      </div>
    </div>
  );
};

/**
 * TODO: 1. apply discount filter
 * 2. Reviews
 * 3. New Arrivals
 */

const SidebarView: React.FC<any> = ({
  priceRangeValue = 0,
  handleOnChangePriceRange = (f: any) => f,
  handleTheFilters,
  handlePriceFilter,
}) => {
  const params = useSearchParams();
  const routeCategory = params.get("category");
  if (routeCategory) {
    return <></>;
  }
  return (
    <>
      <MobileSidebarComponent handleTheFilters={handleTheFilters} />
      <div className="w-1/5 p-2 border-r-2 overflow-y-auto hidden md:block">
        <h2 className="text-2xl font-semibold">Filter Products</h2>
        <CategoriesFilterComponent handleTheFilters={handleTheFilters} />
        <BrandsFilterComponent handleTheFilters={handleTheFilters} />
        {/* <RangeFilterComponent
        priceRangeValue={priceRangeValue}
        handleOnChangePriceRange={handleOnChangePriceRange}
      /> */}
        <PriceFilterComponent handleTheFilters={handlePriceFilter} />
      </div>
    </>
  );
};

export default SidebarView;
