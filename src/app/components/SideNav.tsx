"use client";
import React, { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import NavLinks from "../lib/nav-links";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:flex">
      <div
        className={`fixed inset-0 z-50 bg-gray-800 text-white md:static md:translate-x-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-lg font-bold flex justify-between items-center">
          1009 TATTOO
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1">
          <ul>
            <NavLinks />
          </ul>
        </nav>
      </div>

      <button
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default SideNav;
