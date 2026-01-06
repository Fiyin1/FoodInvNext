// app/components/Sidebar.jsx
"use client";

import {
  Box,
  LayoutDashboard,
  LogOut,
  UserPlus,
  Users,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check for mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true); // Keep sidebar open on desktop by default
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [pathname, isMobile]);

  // Helper function to determine if link is active
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/");
  };

  // Class generator based on active state
  const linkClasses = (path: string) => {
    const active = isActive(path);
    return `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-Source font-medium ${
      active
        ? "bg-gray-800 text-white shadow-md"
        : "text-gray-700 hover:bg-gray-300"
    }`;
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-gray-200 z-40 transition-transform duration-300 ease-in-out
          w-64 lg:translate-x-0 lg:static lg:h-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Main navigation"
      >
        <div className="p-6 pt-20 lg:pt-6">
          <nav className="space-y-2">
            {/* Dashboard Link */}
            <Link
              href="/dashboard"
              className={linkClasses("/dashboard")}
              onClick={() => isMobile && setIsOpen(false)}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>

            {/* View Users Link */}
            <Link
              href="/userlist"
              className={linkClasses("/userlist")}
              onClick={() => isMobile && setIsOpen(false)}
            >
              <Users className="w-5 h-5" />
              <span>View Users</span>
            </Link>

            {/* Add User Link */}
            <Link
              href="/adduser"
              className={linkClasses("/adduser")}
              onClick={() => isMobile && setIsOpen(false)}
            >
              <UserPlus className="w-5 h-5" />
              <span>Add User</span>
            </Link>

            {/* Inventory Link */}
            <Link
              href="/inventory"
              className={linkClasses("/inventory")}
              onClick={() => isMobile && setIsOpen(false)}
            >
              <Box className="w-5 h-5" />
              <span>Inventory</span>
            </Link>

            {/* Logout Link */}
            <div className="pt-10">
              <Link
                href="/adminlogin"
                className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-Source font-medium"
                onClick={() => isMobile && setIsOpen(false)}
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
