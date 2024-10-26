'use client';
import {
  HomeIcon,
  UserIcon,
  CalendarIcon,
  PencilIcon,
  PhotographIcon
} from '@heroicons/react/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { useStore } from '@/store';

const links = [
  { name: 'Inicio', href: '/dashboard', icon: HomeIcon },
  { name: 'Lugar tattoo', href: '/dashboard/site', icon: UserIcon },
  { name: 'Tamaño tattoo', href: '/dashboard/size', icon: PhotographIcon },
  { name: 'Artista', href: '/dashboard/artist', icon: PencilIcon },
  { name: 'Calendario', href: '/dashboard/calendar', icon: CalendarIcon },
];

export default function NavLinks() {
  const { allowArtist, allowSite, allowCalendar, allowSize } = useStore();

  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  const pathname = usePathname();
  const cookies = new Cookies();

  // Asegura que el componente se ha montado
  useEffect(() => {
    setMounted(true);
  }, []);

  let allow = '';

  const token = cookies.get('token');

  let isLogged = false;

  if (token) {
    isLogged = true;
  }

  if (!mounted) {
    // Mientras no esté montado, no aplicamos clases condicionales
    return null;
  }

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        const active = pathname === link.href && 'text-blue-500';

        switch (link.href) {
          case '/dashboard/site':
            allow = allowSite === true ? '' : 'disabled-link';
            break;
          case '/dashboard/size':
            allow = allowSize === true ? '' : 'disabled-link';
            break;
          case '/dashboard/calendar':
            allow = allowCalendar === true ? '' : 'disabled-link';
            break;
          case '/dashboard/artist':
            allow = allowArtist === true ? '' : 'disabled-link';
            break;
          default:
            allow = '';
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center justify-center md:justify-start p-6 md:p-4 hover:bg-gray-700 ${active} ${allow} text-3xl md:text-xl font-semibold`}
          >
            <LinkIcon className="h-5 w-5 mr-2 hidden-mobile" />
            {link.name}
          </Link>
        )
      })}
    </>
  );
}
