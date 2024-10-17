'use client';
import { useEffect } from 'react';
import SideNav from '../components/SideNav';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import Loading from './loading';
import Footer from '../components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // borrar las cookies pero no el token
  }, []);

  return (
    <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
      <SideNav />
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col justify-between flex-grow p-2">
          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
