// app/inventory/page.tsx
"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import { Search } from "lucide-react";
import InventoryItem from "@/components/InventoryItem";

const Inventory = () => {
  const handleDeleteItem = (itemName: string) => {
    const confirmed = confirm(`Are you sure you want to delete "${itemName}"?`);
    if (confirmed) {
      console.log(`Deleting ${itemName}...`);
      alert(`${itemName} has been deleted!`);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 pt-20 lg:pt-6">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative font-Source flex items-center border border-black rounded-3xl w-full max-w-2xl bg-[#eeeeee] px-4 py-3 md:py-4">
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full bg-transparent outline-none pr-8 text-sm md:text-base placeholder-gray-500"
            />
            <Search className="absolute right-4 w-4 h-4 md:w-5 md:h-5 text-gray-600 pointer-events-none" />
          </div>
        </div>

        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 md:mb-6">
            <h1 className="font-Source text-xl md:text-2xl font-bold">Items</h1>
            <button className="bg-red-600 font-Source text-white text-sm md:text-base rounded-full px-4 md:px-6 py-2 w-[40%] sm:w-auto hover:bg-red-700 transition-colors">
              Date
            </button>
          </div>
          {/* Rand */}
          <hr className="border-gray-300 mb-4 md:mb-6" />

          {/* Inventory Items */}
          <div className="space-y-4 md:space-y-6">
            <InventoryItem
              itemName="Golden Morn"
              expiryDate="12-24-2025"
              category="Cereal"
              itemCount={130}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              imageSrc="/images/About2.png"
              onDelete={() => handleDeleteItem("Golden Morn")}
            />

            <InventoryItem
              itemName="Golden Morn"
              expiryDate="12-24-2025"
              category="Cereal"
              itemCount={130}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              imageSrc="/images/About2.png"
              onDelete={() => handleDeleteItem("Golden Morn")}
            />

            <InventoryItem
              itemName="Golden Morn"
              expiryDate="12-24-2025"
              category="Cereal"
              itemCount={130}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              imageSrc="/images/About2.png"
              onDelete={() => handleDeleteItem("Golden Morn")}
            />

            <InventoryItem
              itemName="Golden Morn"
              expiryDate="12-24-2025"
              category="Cereal"
              itemCount={130}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              imageSrc="/images/About2.png"
              onDelete={() => handleDeleteItem("Golden Morn")}
            />

            <InventoryItem
              itemName="Golden Morn"
              expiryDate="12-24-2025"
              category="Cereal"
              itemCount={130}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              imageSrc="/images/About2.png"
              onDelete={() => handleDeleteItem("Golden Morn")}
            />
          </div>

          {/* Pagination/Footer */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">Showing 5 items</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-100">
                1
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inventory;
