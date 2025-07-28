"use client";

import { createContext, useContext, useState } from "react";
const userContext = createContext();

const initialRange = {
  from: undefined,
  to: undefined,
};

function RangeProvider({ children }) {
  const [range, setRange] = useState(initialRange);

  const reset = () => {
    setRange(null);
  };

  return (
    <userContext.Provider value={{ range, setRange, reset }}>
      {children}
    </userContext.Provider>
  );
}
function useRange() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useRange must be used within a RangeProvider");
  }
  return context;
}
export { RangeProvider, useRange };
