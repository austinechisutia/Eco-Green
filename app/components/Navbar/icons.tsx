"use client";

import {
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Search from "./Search"

type IconsProps = {
  userClick?: () => void;
  cartClick?: () => void;
  onMenuClick?: () => void;
};

export default function Icons({ userClick, cartClick, onMenuClick }: IconsProps) {
  return (
    <div className="flex items-center gap-4">
      <Search />
      <UserIcon
        className="w-6 h-6 text-white hover:text-green-900 cursor-pointer transition"
        onClick={userClick}
      />
      <ShoppingCartIcon
        className="w-6 h-6 text-white hover:text-green-900 cursor-pointer transition"
        onClick={cartClick}
      />

      <button className="md:hidden focus:outline-none" onClick={onMenuClick}>
        <Bars3Icon className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}
