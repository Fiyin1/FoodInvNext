// components/UserCard.tsx (simplified version)
"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoreHorizontal, Eye, Trash2 } from "lucide-react";

export default function UserCard({
  userName,
  userEmail,
  onViewInventory,
  onDeleteUser,
}: {
  userName: string;
  userEmail: string;
  onViewInventory?: () => void;
  onDeleteUser?: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50">
      <div className="flex-1">
        <div className="font-medium">{userName}</div>
        <div className="text-sm text-gray-500">{userEmail}</div>
      </div>

      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded"
          type="button"
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border z-10">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onViewInventory?.();
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
              type="button"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Inventory
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onDeleteUser?.();
              }}
              className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 flex items-center"
              type="button"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete User
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
