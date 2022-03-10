import React, { useState, createContext } from "react";
const initialState = {
  reactiveValue: "soy para todos",
};

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState({ value: "algo" });
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
