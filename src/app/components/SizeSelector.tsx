'use client'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useStore } from '@/store'

const SizeSelector = () => {
  const { setAllowArtist, setTattooSize } = useStore()

  const router = useRouter()

  const handleSizeChange = (size: string) => {
    setTattooSize(size)
  }

  const handleClick = () => {
    setAllowArtist(true)
    Cookies.set('allow-artist', '1')
    router.push('/dashboard/artist')
  }

  return (
    <>
      <div className="flex flex-col md:w-[32rem] m-auto pb-10 mt-10">
        <p className="">Pequeño: 5 cm x 10 cm</p>
        <button
          onClick={() => handleSizeChange('small')}
          className="mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Pequeño
        </button>
        <p className="mt-5">Mediano: 15 cm x 30 cm</p>
        <button
          onClick={() => handleSizeChange('medium')}
          className="mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Mediano
        </button>
        <p className="mt-5">Grande: 35 cm x 50 cm</p>
        <button
          onClick={() => handleSizeChange('large')}
          className="mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Grande
        </button>
        <button
          type="button"
          className="w-full mt-20 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default SizeSelector
