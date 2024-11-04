'use client'
import { useState } from 'react'
import { Calendar, dayjsLocalizer, SlotInfo } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'dayjs/locale/es'
import { TattooEvent } from '@/Constants'
import CalendarModal from './CalendarModal'
import { useStore } from '@/store'

dayjs.locale('es')
const localizer = dayjsLocalizer(dayjs)

const MyCalendar = () => {
  const { myEventList, selectedDate, setMyEventList, setSelectedDate } =
    useStore()

  const [view, setView] = useState<'month' | 'day'>('month')
  //const [date, setDate] = useState(new Date())

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  const handleSelectEvent = (event: TattooEvent) => {
    setDate(event.start)
    setView('day')

    const startHours = event.start.getHours()
    const startMinutes = event.start.getMinutes()
    const startSeconds = event.start.getSeconds()

    // Formatear el horario como "HH:mm:ss"
    const formattedTime = `${String(startHours).padStart(2, '0')}:${String(
      startMinutes
    ).padStart(2, '0')}:${String(startSeconds).padStart(2, '0')}`
  }

  // Esta funcion se ejecuta cuando seleccionamos un slot vacio
  const handleSelectSlot = ({ start }: SlotInfo) => {
    setSelectedDate(start)

    openModal()
  }

  const eventComponent = {
    event: (props: TattooEvent) => {
      return <div className="bg-red-500">{props.title}</div>
    },
  }

  const handleOnView = (view: any) => {
    setView(view)
  }

  return (
    <>
      <CalendarModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedDate={selectedDate}
        // TODO: aca van los horarios disponibles del artista seleccionado anteriormente
      />

      <div style={{ height: '85vh', width: '120vh' }}>
        <Calendar
          selectable={true}
          localizer={localizer}
          events={myEventList}
          startAccessor="start"
          endAccessor="end"
          date={selectedDate}
          views={['month', 'day']}
          defaultView="month"
          view={view}
          onView={handleOnView}
          formats={{
            dayHeaderFormat: (date: Date) => {
              return dayjs(date).format('DD/MM/YYYY')
            },
          }}
          //components={eventComponent}
          onNavigate={(newDate) => {
            // Esto permite que los botones Today, Next, y Back actualicen la fecha
            setSelectedDate(newDate)
          }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
        />
      </div>
    </>
  )
}

export default MyCalendar
