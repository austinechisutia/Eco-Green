"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Icons from "./icons";

const links = [
  { href: "/", label: "Shop" },
  { href: "/about", label: "BestSellers" },
  { href: "/contact", label: "Gallery" },
  { href: "/contact", label: "About" }
] as const;


export default function Nav() {
      const pathname = usePathname();
       const [menuOpen, setMenuOpen] = useState(false);

       const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 flex items-center justify-between bg-white/30 backdrop-blur-md border-b px-6 py-4 border-gray-200">
      <ul className="flex gap-6 text-sm font-medium ">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className={
                  isActive
                    ? "hidden sm:inline-block text-white border-b-2 border-black pb-1"
                    : "hidden sm:inline-block text-white hover:text-green-900 transition-colors"
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Logo />
      <Icons onMenuClick={toggleMenu} />
      {menuOpen && (
        <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 flex flex-col gap-2 p-4 md:hidden z-50">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "text-black font-medium"
                      : "text-gray-500 hover:text-black transition-colors"
                  }
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}