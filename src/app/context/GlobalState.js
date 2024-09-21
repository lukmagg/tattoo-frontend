"use client";
import { createContext, useContext, useState } from "react";
import dayjs from "dayjs";
import Cookies from 'universal-cookie';

// Context
const GlobalStateContext = createContext();

// Context provider
export const GlobalStateProvider = ({ children }) => {
 
  const cookies = new Cookies();
 
  const token = cookies.get('token')

  let isLogged = false

  if(token){
    isLogged = true
  }
  


  const [globalState, setGlobalState] = useState({
    logged: isLogged,
    nextTab: false, // Initial state
    tattooPlace: "",
    tattooSize: "",
    allowSite: true,
    allowSize: false,
    allowCalendar: false,
    allowContact: true,
    myEventsList: [
      {
        start: dayjs("2024-07-18T11:00:00").toDate(),
        end: dayjs("2024-07-18T14:10:00").toDate(),
        title: "tattoo 1",
      },
      {
        start: dayjs("2024-07-23T08:00:00").toDate(),
        end: dayjs("2024-07-23T10:00:00").toDate(),
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

// Crear un hook para usar el contexto facilmente
export const useGlobalState = () => useContext(GlobalStateContext);
