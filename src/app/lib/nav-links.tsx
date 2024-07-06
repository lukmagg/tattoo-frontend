import {
  HomeIcon,
  UserIcon,
  CogIcon,
  LogoutIcon,
  DocumentIcon,
  CalendarIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalState } from "../context/GlobalState";

// Para agregar un linu nuevo al nav bar solo agregr un item en links
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Invoices", href: "/dashboard/invoices", icon: DocumentIcon },
  { name: "Customers", href: "/dashboard/customers", icon: CogIcon },
  { name: "Calendar", href: "/dashboard/calendar", icon: CalendarIcon },
  { name: "Site tattoo", href: "/dashboard/site", icon: UserIcon },
  { name: "Size tattoo", href: "/dashboard/size", icon: AdjustmentsIcon },
  { name: "Sign out", href: "/dashboard/signout", icon: LogoutIcon },
];

export default function NavLinks() {
  const { globalState, setGlobalState } = useGlobalState();

  const pathname = usePathname();

  let allow = "";

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
          default:
            allow = "";
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`p-4 hover:bg-gray-700 flex items-center ${active} ${allow}`}
          >
            <LinkIcon className="h-5 w-5 mr-2" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
