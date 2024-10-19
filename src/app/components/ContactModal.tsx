'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Modal from 'react-modal';
import { OnRequestCloseType } from '@/Constants';
import { useStore } from '@/store';

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: OnRequestCloseType;
}

const ContactModal = ({ isOpen, onRequestClose }: ContactModalProps) => {
  const { setTattooSize, setAllowCalendar } = useStore();

  const [totalPrice, setTotalPrice] = useState(0);

  const router = useRouter();

  const handleAccept = (size: string) => {
    setTattooSize(size);
    setAllowCalendar(true);

    Cookies.set('allow-calendar', '1');
    router.push('/dashboard/calendar');
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
        style={{
          content: {
            //height: "550px",
            width: '550px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgb(31 41 55)',
            borderRadius: 10,
            opacity: 1,
          },
          overlay: {
            zIndex: 999,
          },
        }}
      >
        <div className="w-full h-full p-4">
          <p className="text-center">
            Su turno ha sido agendado, por ultimo, complete el formulario para
            poder ponernos en contacto con usted gracias por confiar en 1009
            Tattoo!
          </p>
          <form className="w-full bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Telefono
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="phone"
                placeholder="Phone"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;
