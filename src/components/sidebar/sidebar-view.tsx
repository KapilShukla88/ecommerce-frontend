"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { brands, categories } from "src/resources/constants";
import UICheckbox from "src/widgets/ui-checkbox";
import RangeSlider from "src/widgets/ui-range-slider";

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
    <div className="w-1/5 p-2 border-r-2 overflow-y-auto">
      <h2 className="text-2xl font-semibold">Filter Products</h2>
      <CategoriesFilterComponent handleTheFilters={handleTheFilters} />
      <BrandsFilterComponent handleTheFilters={handleTheFilters} />
      {/* <RangeFilterComponent
        priceRangeValue={priceRangeValue}
        handleOnChangePriceRange={handleOnChangePriceRange}
      /> */}
      <PriceFilterComponent handleTheFilters={handlePriceFilter} />
    </div>
  );
};

export default SidebarView;
