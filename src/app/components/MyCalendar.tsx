"use client";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGlobalState } from "../context/GlobalState";
import "dayjs/locale/es";
import { TattooEvent } from "../constants";
import { useState } from "react";
import CalendarModal from "./CalendarModal";

interface SlotCalendar {
  start: Date;
  end: Date;
  title: string;
}

dayjs.locale("es");
const localizer = dayjsLocalizer(dayjs);


function MyCalendar() {
  const { globalState, setGlobalState } = useGlobalState();
  const [view, setView] = useState<'month' | 'day'>('month');
  const [date, setDate] = useState(new Date())

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSelectEvent = (event) => {
    setDate(event.start)
    setView("day")


    const startHours = event.start.getHours();
    const startMinutes = event.start.getMinutes();
    const startSeconds = event.start.getSeconds();

    // Formatear el horario como "HH:mm:ss"
    const formattedTime = `${String(startHours).padStart(2, '0')}:${String(startMinutes).padStart(2, '0')}:${String(startSeconds).padStart(2, '0')}`;

  };

  const handleSelectSlot = ({ start }: SlotCalendar) => {

    const end = dayjs(start).add(2, 'hour').toDate();

    const startHour = start.getHours()
    const startMin = start.getMinutes()

    const endHour = end.getHours()
    const endMin = end.getMinutes()

    // TODO: preguntar al cliente si quiere reservar en tal fecha,
    // si elije que si agendar, si elige que no, no agendar y volver al calendario.
    // openModal()


    const newEvent = {
      start: start,
      end: end,
      title: `${startHour}hs / ${endHour}hs`,
    };

    setGlobalState((prevState: { myEventList: [TattooEvent] }) => ({
      ...prevState,
      myEventList: [...prevState.myEventList, newEvent],
      //allowContact: true,
    }));


  };

  const components = {
    event: props => {
      return <div className="bg-red-500">
        {props.title}
      </div>
    }
  }

  const handleOnView = (view: any) => {
    setView(view)
  }

  return (
    <>
      <CalendarModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedDay={date}
      />
      <div style={{ height: "85vh", width: "120vh" }}>
        <Calendar
          selectable={true}
          localizer={localizer}
          events={globalState.myEventList}
          startAccessor="start"
          endAccessor="end"
          date={date}
          views={["month", "day"]}
          defaultView="month"
          view={view}
          onView={handleOnView}
          formats={{
            dayHeaderFormat: (date) => {
              return dayjs(date).format("DD/MM/YYYY");
            },
          }}
          components={components}
          onNavigate={(newDate) => {
            // Esto permite que los botones Today, Next, y Back actualicen la fecha
            setDate(newDate);
          }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
        />
      </div>
    </>

  );
}

export default MyCalendar;
