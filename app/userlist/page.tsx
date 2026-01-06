// app/userslist/page.tsx (Alternative - closer to original)
"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import { Search } from "lucide-react";
import UserCard from "@/components/UserCard";

const UsersList = () => {
  const handleViewInventory = () => alert("Viewing inventory...");
  const handleDeleteUser = () => {
    if (confirm("Are you sure you want to delete this user?")) {
      alert("User deleted!");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 pt-20 lg:pt-6">
        {/* Search Bar with responsive width */}
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="relative font-Source flex items-center border border-black rounded-3xl w-full md:w-3/4 lg:w-[45%] bg-[#eeeeee] px-4 py-3 lg:py-4">
            <input
              type="text"
              placeholder="Search Bar"
              className="w-full bg-transparent outline-none pr-8 text-sm lg:text-base"
            />
            <Search className="absolute right-4 w-4 h-4 lg:w-5 lg:h-5 text-gray-600 pointer-events-none" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-Source text-xl lg:text-2xl font-bold">Users</h1>
            <span className="text-sm text-gray-500">Total: 5</span>
          </div>

          <hr className="border-gray-200 mb-4 lg:mb-6" />

          {/* Users list - simple layout */}
          <div className="space-y-0 bg-white rounded-xl border border-gray-200 overflow-hidden">
            {[1, 2, 3, 4, 5].map((item) => (
              <UserCard
                key={item}
                userName="Adeyemi Timilehin David"
                userEmail="Adeyemitimilehin@gmail.com"
                onViewInventory={handleViewInventory}
                onDeleteUser={handleDeleteUser}
              />
            ))}
          </div>

          {/* Simple footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            End of users list
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersList;
