"use client";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import Loading from "../dashboard/loading";
import SideNavAdmin from "../components/SideNavAdmin";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideNavAdmin />
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
      <Suspense fallback={<Loading />}>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </Suspense>
    </div>
  );
}
