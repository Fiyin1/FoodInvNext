"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Camera } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AddItem() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <button
        onClick={() => router.back()}
        className="lex items-center gap-2 lg:ml-16 mt-6 text-gray-700 font-bold font-Source"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>
      <div className="flex flex-col lg:flex-row min-h-[70vh] mb-10 lg:mb-20 items-center">
        <div className="w-full lg:w-1/2 px-6 md:px-16 mt-10 lg:mt-0 text-center lg:text-left">
          <p className="font-bold px-14 font-Source">Add images</p>

          <div className="mt-4 rounded-2xl bg-gray-100 w-[85%] h-80 ml:auto lg:ml-14 flex items-center justify-center">
            <label className="flex flex-col items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800">
              <Camera className="w-10 h-10" />
              <span className="text-sm font-medium font-Source">
                Upload image
              </span>

              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
        </div>

        <div className="w-1/2 mt-6 mx-10">
          <span className="text-xl font-bold font-Source">Upload new item</span>
          <form className="mt-4" action="">
            <div className="flex flex-col gap-2 font-Source">
              <label htmlFor="name">Name</label>
              <input
                className="rounded-4xl border border-black/50 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Golden morn"
              />
            </div>
            <div className="flex flex-col gap-2 font-Source mt-2">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                className="rounded-4xl border border-black/50 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2 font-Source mt-2">
              <label htmlFor="expiryDate">Description</label>
              <textarea
                rows={4}
                className="rounded-2xl border border-black/50 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 font-Source mt-2">
              <select
                className="rounded-4xl border border-black/50 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                name=""
                id=""
              >
                <option value="category">Category</option>
              </select>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="bg-black font-Source text-white rounded-2xl px-10 py-2 w-full">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
