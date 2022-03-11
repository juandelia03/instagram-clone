import React, { useState, createContext } from "react";

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState({ value: "algo", valor: 2 });
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
