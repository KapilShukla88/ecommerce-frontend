"use client";
import React from "react";

import HomeIcon from "@rsuite/icons/legacy/Home";
import CityIcon from "@rsuite/icons/legacy/Building";
import LocationIcon from "@rsuite/icons/Location";
import PhoneIcon from "@rsuite/icons/PhoneFill";
import GlobeIcon from "@rsuite/icons/Global";
import { Country, State } from "country-state-city";

/**
 * 
 *   border: none;
  background-color: tomato;
  color: #fff;
  font: 300 0.9vmax "Roboto";
  width: 100%;
  padding: 0.8vmax;
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 4px;
  outline: none;
  margin: 2vmax;

 */

const ShippingDetailsView: React.FC<any> = ({
  getFormValues,
  handleOnChange,
  shippingSubmit,
}) => {
  return (
    <div className="w-screen max-w-full flex justify-center items-center flex-col">
      <div className="bg-white md:w-[25vw] border-box h-[90vh] overflow-hidden">
        <h2 className="text-center text-[rgba(0,0,0,0.664) text-lg p-[1.3vmax] border-b-[1px] md:w-1/2 m-auto">
          Shipping Details
        </h2>
        <form
          className="flex flex-col items-center m-auto p-[2vmax] justify-evenly h-[80%] transition-all delay-700"
          encType="multipart/form-data"
          onSubmit={shippingSubmit}
        >
          <div className="flex w-full items-center relative">
            <HomeIcon className="absolute md:left-6 left-2" style={{ fontSize: 23 }} />
            <input
              type="text"
              placeholder="Address"
              className="text-sm outline-none border-box py-[1vmax] px-[5vmax] md:px-[5vmax] md:px-[4vmax] pr-[1vmax] w-full border-1 border-[rgba(0,0,0,0.267)] rounded-md"
              required
              value={getFormValues("address")}
              onChange={(e) => handleOnChange("address", e.target.value)}
            />
          </div>
          <div className="flex w-full items-center relative">
            <CityIcon className="absolute md:left-6 left-2" style={{ fontSize: 23 }} />
            <input
              type="text"
              placeholder="City"
              className="text-sm outline-none border-box py-[1vmax] px-[5vmax] md:px-[4vmax] pr-[1vmax] w-full border-1 border-[rgba(0,0,0,0.267)] rounded-md"
              required
              value={getFormValues("city")}
              onChange={(e) => handleOnChange("city", e.target.value)}
            />
          </div>
          <div className="flex w-full items-center relative">
            <LocationIcon
              className="absolute md:left-6 left-2"
              style={{ fontSize: 23 }}
            />
            <input
              type="number"
              placeholder="Pin code"
              className="text-sm outline-none border-box py-[1vmax] px-[5vmax] md:px-[4vmax] pr-[1vmax] w-full border-1 border-[rgba(0,0,0,0.267)] rounded-md"
              required
              value={getFormValues("pinCode")}
              onChange={(e) => handleOnChange("pinCode", e.target.value)}
            />
          </div>
          <div className="flex w-full items-center relative">
            <PhoneIcon className="absolute md:left-6 left-2" style={{ fontSize: 23 }} />
            <input
              type="number"
              placeholder="Phone number"
              className="text-sm outline-none border-box py-[1vmax] px-[5vmax] md:px-[4vmax] pr-[1vmax] w-full border-1 border-[rgba(0,0,0,0.267)] rounded-md"
              required
              value={getFormValues("phoneNo")}
              onChange={(e) => handleOnChange("phoneNo", e.target.value)}
            />
          </div>
          <div className="flex w-full items-center relative">
            <GlobeIcon className="absolute md:left-6 left-2" style={{ fontSize: 23 }} />
            <select
              required
              value={getFormValues("country")}
              className="text-sm outline-none border-box py-[1vmax] px-[5vmax] md:px-[4vmax] pr-[1vmax] w-full border-1 border-[rgba(0,0,0,0.267)] rounded-md"
              onChange={(e) => handleOnChange("country", e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country?.getAllCountries()?.map((item) => {
                  return (
                    <option key={item?.isoCode} value={item?.isoCode}>
                      {item?.name}
                    </option>
                  );
                })}
            </select>
          </div>
          {getFormValues("country") && (
            <div className="flex w-full items-center relative">
              <CityIcon className="absolute md:left-6 left-2" style={{ fontSize: 23 }} />
              <select
                required
                value={getFormValues("state")}
                className="text-sm outline-none border-box py-[1vmax] px-[5vmax] md:px-[4vmax] pr-[1vmax] w-full border-1 border-[rgba(0,0,0,0.267)] rounded-md"
                onChange={(e) => handleOnChange("state", e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(getFormValues("country"))?.map(
                    (item) => {
                      return (
                        <option key={item?.isoCode} value={item?.isoCode}>
                          {item?.name}
                        </option>
                      );
                    }
                  )}
              </select>
            </div>
          )}
          <input
            type="submit"
            value="Continue"
            className="border-none bg-red-500 text-white w-full p-[0.8vmax] cursor-pointer rounded-md outline-none m-[2vmax]"
            disabled={getFormValues("state") ? false : true}
          />
        </form>
      </div>
    </div>
  );
};

export default ShippingDetailsView;
