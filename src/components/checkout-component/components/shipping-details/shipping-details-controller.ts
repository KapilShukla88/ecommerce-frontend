"use client";

import { CheckoutContext } from "@components/checkout-component/context";
import { useAppDispatch, useAppSelector } from "@store/configure-store";
import {
  getShippingInfo,
  updateShippingInfo,
} from "@store/splices/entities/cart";
import { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const useShippingDetailsController = () => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [pinCode, setPinCode] = useState<number>();
  const [phoneNo, setPhoneNo] = useState<string | undefined>();

  const shippingInfo = useAppSelector(getShippingInfo);

  const dispatch = useAppDispatch();

  const { setActivePage } = useContext(CheckoutContext);

  useEffect(() => {
    if (Object.keys(shippingInfo)?.length > 0) {
      setAddress(shippingInfo?.address || "");
      setCity(shippingInfo.city);
      setState(shippingInfo.state);
      setCountry(shippingInfo.country);
      setPinCode(shippingInfo.pinCode);
      setPhoneNo(shippingInfo.phoneNo);
    }
  }, [shippingInfo]);

  const handleOnChange = useCallback((type: string, value: any) => {
    switch (type) {
      case "address": {
        setAddress(value);
        break;
      }
      case "city": {
        setCity(value);
        break;
      }
      case "state": {
        setState(value);
        break;
      }
      case "country": {
        setCountry(value);
        break;
      }
      case "pinCode": {
        setPinCode(value);
        break;
      }
      case "phoneNo": {
        setPhoneNo(value);
        break;
      }
      default: {
      }
    }
  }, []);

  const getFormValues = useCallback(
    (type: string) => {
      switch (type) {
        case "address":
          return address;
        case "city":
          return city;
        case "state":
          return state;
        case "country":
          return country;
        case "pinCode":
          return pinCode;
        case "phoneNo":
          return phoneNo;
        default:
          null;
      }
    },
    [address, city, country, phoneNo, pinCode, state]
  );

  const shippingSubmit = (e: any) => {
    e.preventDefault();

    if (phoneNo && (phoneNo.length < 10 || phoneNo.length > 10)) {
      toast.error("Phone number should be of 10 digits.");
      return;
    }

    dispatch(
      updateShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );

    // navigate("/order/confirm");
    setActivePage(1);
  };

  return { getFormValues, handleOnChange, shippingSubmit };
};

export default useShippingDetailsController;
