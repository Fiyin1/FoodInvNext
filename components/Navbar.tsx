"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm overflow-hidden">
      <div className="flex h-16 items-center px-4 md:px-0">
        {/* LOGO */}
        <div className="ml-0 md:ml-20 mt-1">
          <img
            src="/images/Navbar .png"
            alt="Logo"
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex w-1/2 items-center gap-4 ml-6">
          <Link href="/home" className="text-black">
            Welcome To
          </Link>
          <Link href="/additem" className="text-black">
            Add Items
          </Link>
          <Link href="/about" className="text-black">
            About
          </Link>
          <Link href="/contact" className="text-black">
            Contact
          </Link>
        </div>

        {/* DESKTOP LOGIN */}
        <div className="hidden md:flex w-1/4 items-center justify-end ml-auto mr-6">
          <Link
            href="/login"
            className="text-white rounded-3xl px-6 py-2 bg-red-600"
          >
            Login
          </Link>
        </div>

        {/* HAMBURGER */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <Link href="/home" className="block text-black">
            Welcome To
          </Link>
          <Link href="/additem" className="block text-black">
            Add Items
          </Link>
          <Link href="/about" className="block text-black">
            About
          </Link>
          <Link href="/contact" className="block text-black">
            Contact
          </Link>

          <Link
            href="/login"
            className="block text-center text-white rounded-3xl px-6 py-2 bg-red-600"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
