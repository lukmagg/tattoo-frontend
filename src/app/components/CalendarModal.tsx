'use client'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Modal from 'react-modal'
import {
  Artist,
  ARTIST,
  CalendarModalProps,
  OnRequestCloseType,
  TattooEvent,
  UPDATE_EVENT_LIST,
} from '@/Constants'
import { capitalizeFirstLetter } from '../lib/utils/capitalizeFirstLetter'
import generateTimeOptions from '../lib/utils/generateTimeOptions'
import { useStore } from '@/store'
import createNewEvent from '../lib/utils/createNewEvent'
import { useMutation } from '@apollo/client'

const CalendarModal = ({ isOpen, onRequestClose }: CalendarModalProps) => {
  const {
    tattooSize,
    selectedArtist,
    selectedDate,
    currentArtistList,
    setSelectedDate,
  } = useStore()

  const [updateEventList, { data, loading, error }] =
    useMutation(UPDATE_EVENT_LIST)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate: Date = selectedDate
    const hour = event.target.value.slice(0, 2)
    const min = event.target.value.slice(3, 5)

    newDate.setHours(parseInt(hour), parseInt(min))

    // actualizo selectedDate del store
    setSelectedDate(newDate)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // crear nuevo evento (cita) para tatuarse
    const newEvent: TattooEvent = createNewEvent(tattooSize, selectedDate)

    // obtener el id del artista seleccionado por el cliente
    const idArtist = selectedArtist

    // agendar el nuevo evento en el eventList del artista
    try {
      await updateEventList({
        variables: {
          updateArtistInput: {
            id: idArtist,
            eventList: newEvent,
          },
        },
      })
    } catch (err) {
      console.error('Error en la mutación:', err)
    }
  }

  const dayOptions = { weekday: 'long' }
  const monthOptions = { month: 'long' }

  const timeOptions = generateTimeOptions()

  const title = `${capitalizeFirstLetter(
    selectedDate.toLocaleDateString('es-ES', dayOptions)
  )}, ${selectedDate.getDate()} ${selectedDate.toLocaleDateString(
    'es-ES',
    monthOptions
  )}`
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Calendar Modal"
        style={{
          content: {
            height: '400px',
            width: '400px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgb(31 41 55)',
            borderRadius: 10,
            zIndex: 100,
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
            zIndex: 90, // capa debajo del modal
          },
        }}
      >
        <div className="p-4 h-[350px] max-w-sm bg-white shadow dark:bg-gray-800">
          <div className="flex h-full flex-col items-center">
            <form
              onSubmit={onSubmit}
              className="text-black max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
            >
              {/* Field Selected Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  {title}
                </label>
              </div>

              {/* Field Horario */}
              <div>
                <label
                  htmlFor="color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Horario
                </label>
                <select
                  id="time"
                  name="time"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleChange}
                >
                  <option value="">Seleccione una hora</option>
                  {timeOptions.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Aceptar y Cerrar Buttons */}
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Aceptar
              </button>
              <button
                onClick={() => onRequestClose()}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Cerrar
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CalendarModal
