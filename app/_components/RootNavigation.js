"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "../context/RangeContext";

function RootNavigation() {
  const path = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cabins", label: "Cabin" },
    { href: "/about", label: "About" },

    { href: "/account", label: "Guest" },
  ];
  return (
    <nav>
      <ul className="flex  gap-4 pb-4">
        {navLinks.map((link) => {
          return (
            <li
              key={link.label}
              className={path === link.href ? "text-blue-500" : ""}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default RootNavigation;
