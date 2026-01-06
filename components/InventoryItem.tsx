// components/InventoryItem.tsx
"use client";

import React from "react";
import { Trash } from "lucide-react";

interface InventoryItemProps {
  itemName: string;
  expiryDate: string;
  category: string;
  itemCount: number | string;
  description: string;
  imageSrc: string;
  onDelete?: () => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({
  itemName,
  expiryDate,
  category,
  itemCount,
  description,
  imageSrc,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 md:gap-6">
        {/* Left section: Image */}
        <div className="w-full lg:w-1/5">
          <div className="rounded-xl w-full h-32 md:h-40 overflow-hidden">
            <img
              src={imageSrc}
              alt={itemName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Middle section: Item details */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3">
            <div className="font-Source">
              <span className="text-gray-600">Name: </span>
              <span className="text-gray-900 font-semibold">{itemName}</span>
            </div>
            <div className="font-Source">
              <span className="text-gray-600">Expiry: </span>
              <span className="text-gray-900">{expiryDate}</span>
            </div>
            <div className="font-Source">
              <span className="text-gray-600">Category: </span>
              <span className="text-gray-900 font-medium">{category}</span>
            </div>
            <div className="font-Source">
              <span className="text-gray-600">Count: </span>
              <span className="text-gray-900 font-medium">{itemCount}</span>
            </div>
          </div>

          <div className="font-Source">
            <span className="text-gray-600 font-medium">Description: </span>
            <span className="text-gray-700 text-sm md:text-base">
              {description}
            </span>
          </div>
        </div>

        {/* Right section: Delete button */}
        <div className="flex justify-end lg:justify-center items-start">
          <button
            onClick={onDelete}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-red-50 px-3 md:px-4 py-2 rounded-lg transition-colors border border-red-200"
            type="button"
            disabled={!onDelete}
            aria-label={`Delete ${itemName}`}
          >
            <Trash className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
