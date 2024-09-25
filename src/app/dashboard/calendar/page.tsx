"use client";
import DateSelector from "@/app/components/DateSelector";
import MyCalendar from "@/app/components/MyCalendar";
import { useGlobalState } from "@/app/context/GlobalState";
import dayjs from "dayjs";
import { useEffect } from "react";

function page() {
  const { globalState, setGlobalState } = useGlobalState();

  useEffect(() => {
    // alert("Seleccione una fecha disponible para el turno");
    console.log(globalState.tattooSize);
  }, []);

  return (
    <div className="flex justify-around mx-10 mt-10">

      {/* <div className="mt-20">
        <DateSelector />
      </div> */}

      <MyCalendar />
    </div>
  );
}

export default page;
