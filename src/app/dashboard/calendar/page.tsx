"use client";
import DateSelector from "@/app/components/DateSelector";
import MyCalendar from "@/app/components/MyCalendar";
import dayjs from "dayjs";
import { useEffect } from "react";

function page() {
  useEffect(() => {
    // const day1 = dayjs("2024-08-18T12:00:00").toDate();
    // const day2 = dayjs("2024-07-18T12:00:00").toDate();
    // console.log(day1.getTime() === day2.getTime());
  }, []);

  return (
    <div className="flex justify-around mx-10 mt-10">
      <div className="mt-20">
        <DateSelector />
      </div>

      <MyCalendar />
    </div>
  );
}

export default page;
