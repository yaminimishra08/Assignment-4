import { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [defaultFrom, setDefaultFrom] = useState("USD");
  const [defaultTo, setDefaultTo] = useState("INR");

  return (
    <CurrencyContext.Provider
      value={{ defaultFrom, defaultTo, setDefaultFrom, setDefaultTo }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};