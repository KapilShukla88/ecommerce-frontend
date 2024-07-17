import React, { createContext, useState } from "react";

export const CheckoutContext = createContext<any>({});

const CheckoutContextProvider: React.FC<any> = ({ children }) => {
  const [activePage, setActivePage] = useState<number>(0);
  return (
    <CheckoutContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
