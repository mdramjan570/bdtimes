import React from "react";
import { createContext } from "react";
const ramjan = "val";
const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const value = {
    ramjan,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
