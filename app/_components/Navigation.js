"use client";

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathName = usePathname();

  const links = [
    {
      label: "Home",
      href: "/account",
    },
    {
      label: "Guest",
      href: "/account/guest",
    },
    {
      label: "Reservations",
      href: "/account/reservations",
    },
  ];
  return (
    <nav className="flex flex-col p-3 items-start justify-between shadow-md h-full border-r border-gray-200 ">
      <ul className="grid gap-4  ">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                link.href === pathName ? "text-blue-500 hover:underline" : ""
              }`}
            >
              {link.label} <span className="text-gray-500"></span>
            </Link>
          </li>
        ))}
      </ul>
      <SignOutButton />
    </nav>
  );
}

export default Navigation;
