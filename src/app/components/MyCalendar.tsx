"use client";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGlobalState } from "../context/GlobalState";
import "dayjs/locale/es";

dayjs.locale("es");
const localizer = dayjsLocalizer(dayjs);

function MyCalendar() {
  const { globalState, setGlobalState } = useGlobalState();

  return (
    <div style={{ height: "80vh", width: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={globalState.myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        formats={{
          dayHeaderFormat: (date) => {
            console.log(date);
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
      />
    </div>
  );
}

export default MyCalendar;
