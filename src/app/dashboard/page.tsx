'use client'
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function Page() {

  // TODO: cuando sepa como borrar las cookies desde el lado del servidor, 
  // quitar el use client y el useEffect en este componente y convertirlo
  // a un server component
  useEffect(() => {
    Cookies.remove('allow-calendar')
    Cookies.remove('allow-size')
    Cookies.remove('allow-site')
    Cookies.remove('allow-form-contact')
    Cookies.remove('allow-artist')
  }, [])

  return <div><div className='mt-20 flex flex-col items-center justify-center text-3xl m-auto flex-1 hidden-indications'>
    <p className='text-center leading-loose'>
      El sistema generara un presupuesto
    </p>
    <p className='text-center leading-loose'>aproximado</p>
    <p className='text-center leading-loose'>Siga las indicaciones...</p>
  </div></div>;
}
