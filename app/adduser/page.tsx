// app/adduser/page.tsx (Simplified version)
"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";

export default function AddUser() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 pt-20 lg:pt-6 ">
        <div className="flex flex-col lg:flex-row mb-10">
          {/* Image Section - First on mobile, second on desktop */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-first lg:order-last">
            <img
              src="/images/Adduser.png"
              alt="Add user illustration"
              className="w-full max-w-[384px] h-auto object-cover rounded-2xl"
              width={384}
              height={364}
            />
          </div>

          {/* Form Section - Second on mobile, first on desktop */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold font-Source mb-6 md:mb-8">
              Add User
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div className="flex flex-col gap-2 font-Source mt-4">
                <label htmlFor="name">Name</label>
                <input
                  className="rounded-3xl md:rounded-4xl px-4 py-3 md:py-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-100 text-sm md:text-base"
                  type="text"
                  id="name"
                  placeholder="Enter user's name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 font-Source mt-4">
                <label htmlFor="email">Email</label>
                <input
                  className="rounded-3xl md:rounded-4xl px-4 py-3 md:py-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-100 text-sm md:text-base"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter user's email"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 font-Source mt-4">
                <label htmlFor="password">Password</label>
                <input
                  className="rounded-3xl md:rounded-4xl px-4 py-3 md:py-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-100 text-sm md:text-base"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter user's password"
                  required
                />
              </div>
              <div className="flex mt-6">
                <button className="bg-red-600 lg:ml-[50%] font-Source text-white rounded-2xl px-10 py-3 w-full lg:w-auto">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
