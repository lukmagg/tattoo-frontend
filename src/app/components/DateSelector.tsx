'use client';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import makeDate from '../lib/utils/makeDate';
import hourFormatter from '../lib/utils/hourFormatter';
import dateIsDisponible from '../lib/utils/dateIsDisponible';
import dayjs, { Dayjs } from 'dayjs';
import notify from '../lib/utils/Notifications';
import nameMonthToNumber from '../lib/utils/nameMonthToNumber';


import ContactModal from './ContactModal';
import { useStore } from '@/store';
import { hours, months } from '@/Constants';

const days = Array.from({ length: 30 }, (_, i) => ({
  date: (i + 1).toString(),
  index: i + 1,
}));

export default function DateSelector() {
  const { myEventList, setMyEventList, setAllowContact } = useStore();

  const router = useRouter();

  const [stringHour, setStringHour] = useState('08:00 AM');

  const [hour, setHour] = useState(8);

  const [minutes, setMinutes] = useState(0);

  const [day, setDay] = useState(1);
  const [monthValue, setMonthValue] = useState('Enero');
  const [monthNumber, setMonthNumber] = useState(0);

  const [date, setDate] = useState<Dayjs>(dayjs());

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    const { HH, mm } = hourFormatter(stringHour);
    setHour(HH);
    setMinutes(mm);
    const newDate = makeDate(day, monthNumber, 2024, hour, minutes);
    setDate(newDate);
  }, [stringHour, day, hour, minutes, monthNumber]);

  const handleClick = () => {
    if (dateIsDisponible(myEventList, date)) {
      const newEvent = {
        start: date.toDate(),
        end: date.add(2, 'hour').toDate(),
        title: 'tattoo 4',
      };

      setMyEventList([...myEventList, newEvent]);
      setAllowContact(true);

      Cookies.set('allow-form-contact', '1');

      notify('success', 'Horario agendado!');

      openModal();
    } else {
      notify('error', 'Horario no disponible');
    }
  };

  const handleDay = (e: any) => {
    setDay(e.target.value);
  };

  const handleHour = (e: any) => {
    setStringHour(e.target.value);
  };

  const handleMonth = (e: any) => {
    setMonthValue(e.target.value);
    setMonthNumber(nameMonthToNumber(e.target.value));
  };

  return (
    <>
      <ContactModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <div className="text-3xl m-auto mb-10 flex-1 hidden-mobile">
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
          <option key={month.number}>{month.date}</option>
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
        value={stringHour}
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
    </>
  );
}
