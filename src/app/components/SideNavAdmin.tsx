'use client';
import React, { useState } from 'react';
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import NavLinksAdmin from '../lib/nav-links-admin';
import { useStore } from '@/store';


const SideNavAdmin = () => {
  const { menuAdminIsOpen, setMenuAdminIsOpen } = useStore();


  const onClose = () => {
    setMenuAdminIsOpen(false)
  }

  return (
    <div className="md:flex">
      <div
        className={`fixed inset-0 z-50 bg-gray-800 text-white w-full md:w-64 md:static md:translate-x-0 transform ${menuAdminIsOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-lg font-bold flex justify-between items-center">
          <button className="md:hidden" onClick={onClose}>
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col h-full items-center">
          <div className="grow">
            <nav className="flex-1">
              <ul>
                <NavLinksAdmin />
              </ul>
            </nav>
          </div>

          <div className="pb-20">
            <Image
              src="/without-circle1009.png"
              alt="1009 Logo"
              className="" //dark:invert
              width={150}
              height={24}
              priority
            />
          </div>
        </div>
      </div>

      <button
        className={`md:hidden fixed top-4 left-4 z-50 ${menuAdminIsOpen && 'hidden'}`}
        onClick={() => setMenuAdminIsOpen(true)}
      >
        <MenuIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default SideNavAdmin;
