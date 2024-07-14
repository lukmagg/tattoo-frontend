"use client";
import { createContext, useContext, useState, useEffect } from "react";
import dayjs from "dayjs";

// Crear el contexto
const GlobalStateContext = createContext();

// Crear un proveedor para el contexto
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    nextTab: false, // Define aquí tus estados iniciales
    tattooPlace: "original",
    tattooDate: "",
    allowSite: false,
    allowSize: false,
    myEventsList: [
      {
        start: dayjs("2024-07-18T11:00:00").toDate(),
        end: dayjs("2024-07-18T14:10:00").toDate(),
        title: "tattoo 1",
      },
      {
        start: dayjs("2024-07-23T06:00:00").toDate(),
        end: dayjs("2024-07-23T09:00:00").toDate(),
        title: "tattoo 2",
      },
      {
        start: dayjs("2024-07-23T15:00:00").toDate(),
        end: dayjs("2024-07-23T17:00:00").toDate(),
        title: "tattoo 3",
      },
    ],
  });

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Crear un hook para usar el contexto fácilmente
export const useGlobalState = () => useContext(GlobalStateContext);
