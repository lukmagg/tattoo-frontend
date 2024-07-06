"use client";

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";
import { useGlobalState } from "../context/GlobalState";

export default function Calendar() {
  const { globalState, setGlobalState } = useGlobalState();

  const handleAccept = (value: dayjs.Dayjs | null) => {
    if (value) {
      setGlobalState({ ...globalState, allowSite: true });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        value={dayjs("2022-04-17T15:27")}
        // onAccept={(value) => console.log(value)}
        onAccept={(value) => handleAccept(value)}
        sx={[{ borderRadius: 2 }]}
      />
    </LocalizationProvider>
  );
}
