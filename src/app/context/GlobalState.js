"use client";
// context/GlobalState.js
import { createContext, useContext, useState } from "react";

// Crear el contexto
const GlobalStateContext = createContext();

// Crear un proveedor para el contexto
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    nextTab: false, // Define aquí tus estados iniciales
    tattooPlace: "original",
    allowSite: false,
    allowSize: false,
  });

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Crear un hook para usar el contexto fácilmente
export const useGlobalState = () => useContext(GlobalStateContext);
