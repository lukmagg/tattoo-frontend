'use client'
import {
  HomeIcon,
  UserIcon,
  LogoutIcon,
  DocumentIcon,
  CogIcon,
  CalendarIcon,
  AdjustmentsIcon,
  MailIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import Cookies from 'universal-cookie';
import { useEffect, useState } from "react";


const links = [
  // { name: "User", href: "/dashboard/profile-client", icon: CalendarIcon },

  { name: "Inicio", href: "/dashboard", icon: HomeIcon },
  { name: "Lugar tattoo", href: "/dashboard/site", icon: UserIcon },
  { name: "Tamaño tattoo", href: "/dashboard/size", icon: AdjustmentsIcon },
  { name: "Artista", href: "/dashboard/artist", icon: CalendarIcon },

  { name: "Calendario", href: "/dashboard/calendar", icon: CalendarIcon },

  // { name: "Facturas", href: "/dashboard/invoices", icon: DocumentIcon },
  // { name: "Clientes", href: "/dashboard/customers", icon: CogIcon },
  { name: "Sign out", href: "/logout", icon: LogoutIcon },
  { name: "Sign in", href: "/login", icon: LoginIcon },

];

export default function NavLinks() {
  const { globalState, setGlobalState } = useGlobalState();
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  const pathname = usePathname();
  const cookies = new Cookies();


  // Asegura que el componente se ha montado
  useEffect(() => {
    setMounted(true);
  }, []);

  let allow = "";

  const token = cookies.get('token')

  let isLogged = false

  if (token) {
    isLogged = true
  }

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    router.push("/login");
  };

  if (!mounted) {
    // Mientras no esté montado, no aplicamos clases condicionales
    return null;
  }

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        const active = pathname === link.href && "text-blue-500";

        switch (link.href) {
          case "/dashboard/site":
            allow = globalState.allowSite === true ? "" : "disabled-link";
            break;
          case "/dashboard/size":
            allow = globalState.allowSize === true ? "" : "disabled-link";
            break;
          case "/dashboard/calendar":
            allow = globalState.allowCalendar === true ? "" : "disabled-link";
            break;
          case "/login":
            allow = isLogged === true ? "hidden" : "";
            break;
          case "/logout":
            allow = isLogged === true ? "" : "hidden";
            break;
          default:
            allow = "";
        }

        return link.href === "/logout" ? (
          // Llama a handleLogout si el link es "Sign out"
          <button
            key={link.name}
            onClick={handleLogout}
            className={`p-4 hover:bg-gray-700 flex items-center ${allow} text-xl font-semibold`}
          >
            <LinkIcon className="h-5 w-5 mr-2" />
            {link.name}
          </button>
        ) : (
          <Link
            key={link.name}
            href={link.href}
            className={`p-4 hover:bg-gray-700 flex items-center ${active} ${allow} text-xl font-semibold`}
          >
            <LinkIcon className="h-5 w-5 mr-2" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
