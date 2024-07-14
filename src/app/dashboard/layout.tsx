"use client";
import { useEffect } from "react";
import SideNav from "../components/SideNav";
import Cookies from "js-cookie";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Obtener todas las cookies
    const allCookies = Cookies.get();

    // Borrar todas las cookies
    Object.keys(allCookies).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
  }, []);
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
