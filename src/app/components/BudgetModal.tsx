'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Modal from 'react-modal';
import { OnRequestCloseType } from '@/Constants';
import { useStore } from '@/store';

interface BudgetModalProps {
  isOpen: boolean;
  selectedSize: string;
  onRequestClose: OnRequestCloseType;
}

const BudgetModal = ({
  isOpen,
  onRequestClose,
  selectedSize,
}: BudgetModalProps) => {
  const { setAllowCalendar, setTattooSize } = useStore();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;

    switch (selectedSize) {
      case 'small':
        total = 10;
        break;
      case 'medium':
        total = 20;
        break;
      case 'large':
        total = 50;
        break;
    }
    setTotalPrice(total);
  }, [selectedSize]);

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
        contentLabel="Budget Modal"
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
          },
        }}
      >
        <div className="p-4 h-[350px] max-w-sm bg-white shadow dark:bg-gray-800">
          <div className="flex h-full flex-col items-center">
            <div className="grow">
              <h2 className="text-white">El presupuesto es ${totalPrice}</h2>
            </div>
            <div className="">
              <button
                onClick={() => handleAccept(selectedSize)}
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
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BudgetModal;
