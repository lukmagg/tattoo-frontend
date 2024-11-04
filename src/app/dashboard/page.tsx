'use client'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store'

export default function Page() {
  const { setAllowSite } = useStore()
  const router = useRouter()

  // TODO: cuando sepa como borrar las cookies desde el lado del servidor,
  // quitar el use client y el useEffect en este componente y convertirlo
  // a un server component
  // useEffect(() => {
  //   const myCookies = [
  //     'allow-calendar',
  //     'allow-size',
  //     'allow-site',
  //     'allow-form-contact',
  //     'allow-artist',
  //   ];
  //   myCookies.forEach((cookie) => Cookies.remove(cookie));
  // }, []);

  const handleClick = () => {
    setAllowSite(true)
    router.push('/dashboard/site')
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[200px] md:mt-[240px] text-3xl m-auto flex-1">
        <p className="text-center leading-loose">
          El sistema generara un presupuesto
        </p>
        <p className="text-center leading-loose">aproximado</p>
        <p className="text-center leading-loose">Siga las indicaciones...</p>
      </div>

      <div className="flex flex-col md:w-[32rem] m-auto pb-10 mt-10">
        <button
          onClick={handleClick}
          className="mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Empezar
        </button>
      </div>
    </>
  )
}
