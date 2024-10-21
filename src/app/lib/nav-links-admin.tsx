'use client';
import {
  HomeIcon,
  UserIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { useStore } from '@/store';

const links = [
  { name: 'Inicio', href: '/admin', icon: HomeIcon },
  { name: 'Artistas', href: '/admin/artists', icon: UserIcon },
  { name: "Sign out", href: "/logout", icon: LogoutIcon },
];

export default function NavLinksAdmin() {
  const { menuAdminIsOpen, setMenuAdminIsOpen } = useStore()

  const [mounted, setMounted] = useState(false)

  const router = useRouter()

  const pathname = usePathname()
  const cookies = new Cookies()

  // Asegura que el componente se ha montado
  useEffect(() => {
    setMounted(true)
  }, []);

  let allow = ''

  const token = cookies.get('token')

  let isLogged = false

  if (token) {
    isLogged = true
  }

  const handleLogout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'
    router.push('/login')
  };

  const handleSelect = () => {
    setMenuAdminIsOpen(false)
  }

  if (!mounted) {
    // Mientras no esté montado, no aplicamos clases condicionales
    return null;
  }

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon

        const active = pathname === link.href && 'text-blue-500'


        return link.href === '/logout' ? (
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
            onClick={handleSelect}
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
