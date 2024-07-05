import {
  HomeIcon,
  UserIcon,
  CogIcon,
  LogoutIcon,
  DocumentIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

// Para agregar un linu nuevo al nav bar solo agregr un item en links
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Invoices", href: "/dashboard/invoices", icon: DocumentIcon },
  { name: "Customers", href: "/dashboard/customers", icon: CogIcon },
  { name: "Site Tattoo", href: "/dashboard/site", icon: UserIcon },
  { name: "Calendar", href: "/dashboard/calendar", icon: CalendarIcon },
  { name: "Sign out", href: "/dashboard/signout", icon: LogoutIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="p-4 hover:bg-gray-700 flex items-center"
          >
            <LinkIcon className="h-5 w-5 mr-2" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
