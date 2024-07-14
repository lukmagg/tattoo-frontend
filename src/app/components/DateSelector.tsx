"use client";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import makeDate from "../lib/utils/makeDate";
import hourFormatter from "../lib/utils/hourFormatter";
import dateIsDisponible from "../lib/utils/dateIsDisponible";
import dayjs, { Dayjs } from "dayjs";
import { eventNames } from "process";

const hours = [
  { date: "08:00", index: 8 },
  { date: "09:00", index: 9 },
  { date: "10:00", index: 10 },
  { date: "11:00", index: 11 },
  { date: "12:00", index: 12 },
  { date: "13:00", index: 13 },
  { date: "14:00", index: 14 },
  { date: "15:00", index: 15 },
  { date: "16:00", index: 16 },
  { date: "17:00", index: 17 },
  { date: "18:00", index: 18 },
  { date: "19:00", index: 19 },
  { date: "20:00", index: 20 },
  { date: "21:00", index: 21 },
  { date: "22:00", index: 22 },
];

const months = [
  { date: "Enero", index: 0 },
  { date: "Febrero", index: 1 },
  { date: "Marzo", index: 2 },
  { date: "Abril", index: 3 },
  { date: "Mayo", index: 4 },
  { date: "Junio", index: 5 },
  { date: "Julio", index: 6 },
  { date: "Agosto", index: 7 },
  { date: "Septiembre", index: 8 },
  { date: "Octubre", index: 9 },
  { date: "Noviembre", index: 10 },
  { date: "Diciembre", index: 11 },
];

const days = Array.from({ length: 30 }, (_, i) => ({
  date: (i + 1).toString(),
  index: i + 1,
}));

export default function DateSelector() {
  const router = useRouter();

  const { globalState, setGlobalState } = useGlobalState();

  const [day, setDay] = useState(1);
  const [monthValue, setMonthValue] = useState("Enero");
  const [monthIndex, setMonthIndex] = useState(0);

  const [hour, setHour] = useState("01:00 AM");
  const [date, setDate] = useState<Dayjs>();

  useEffect(() => {}, [monthIndex]);

  const handleClick = () => {
    const { HH, mm } = hourFormatter(hour);

    const newDate = makeDate(day, monthIndex, 2024, HH, mm);

    const dateToCompare = dayjs(newDate);

    if (dateIsDisponible(globalState.myEventsList, dateToCompare)) {
      const newEvent = {
        start: dateToCompare.toDate(),
        end: dateToCompare.add(2, "hour").toDate(),
        title: "tattoo 4",
      };

      setGlobalState((prevState: { myEventsList: any }) => ({
        ...prevState,
        myEventsList: [...prevState.myEventsList, newEvent],
        allowSite: true,
      }));

      Cookies.set("allow-site", JSON.stringify("true"));
      //router.push("/dashboard/site");
    } else {
      alert("Horario no disponible");
    }
  };

  const handleDay = (e: any) => {
    setDay(e.target.value);
  };

  const handleHour = (e: any) => {
    setHour(e.target.value);
  };

  const handleMonth = (e: any) => {
    setMonthValue(e.target.value);

    setMonthIndex(e.target.selectedIndex);
  };

  return (
    <div>
      <div className="text-3xl m-auto mb-10 flex-1 hidden-indications">
        <p className="text-center leading-loose">Seleccione una fecha</p>
      </div>

      <label
        htmlFor="months"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Seleccione mes
      </label>

      <select
        id="months"
        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={monthValue}
        onChange={(e) => handleMonth(e)}
      >
        {months.map((month) => (
          <option key={month.index}>{month.date}</option>
        ))}
      </select>

      <label
        htmlFor="months"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Seleccione dia
      </label>

      <select
        id="days"
        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={day}
        onChange={(e) => handleDay(e)}
      >
        {days.map((day) => (
          <option key={day.index}>{day.date}</option>
        ))}
      </select>

      <label
        htmlFor="hours"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Seleccione hora
      </label>

      <select
        id="hours"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={hour}
        onChange={(e) => handleHour(e)}
      >
        {hours.map((hour) => (
          <option key={hour.index}>{hour.date}</option>
        ))}
      </select>

      <button
        type="button"
        className="w-full mt-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  );
}
