'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import Modal from 'react-modal'
import { BudgetModalProps } from '@/Constants'
import { useStore } from '@/store'

const BudgetModal = ({
  isOpen,
  onRequestClose,
  selectedSize,
}: BudgetModalProps) => {
  const { tattooPlace, tattooSize, setAllowCalendar, setTattooSize } =
    useStore()

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let total = 0

    switch (selectedSize) {
      case 'small':
        total = 100
        break
      case 'medium':
        total = 200
        break
      case 'large':
        total = 500
        break
    }

    setTotalPrice(total)
  }, [selectedSize])

  const router = useRouter()

  const handleAccept = (size: string) => {
    setTattooSize(size)
    setAllowCalendar(true)
    Cookies.set('allow-calendar', '1')
    router.push('/dashboard/calendar')
  }

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
            <div className="grow">
              <p>Lugar del cuerpo: {tattooPlace}</p>
              <p>Tamaño del tattoo: {tattooSize}</p>
              <br />
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
  )
}

export default BudgetModal
