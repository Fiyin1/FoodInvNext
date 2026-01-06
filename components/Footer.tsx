"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-600 h-[40%] mt-20 shadow-sm overflow-hidden flex flex-col gap-10 pb-20 items-center justify-center">
      <div className="flex flex-col gap-10 mt-10">
        <h3 className="font-Source text-white text-3xl md:text-5xl text-center font-bold">
          Get started for free
        </h3>
        <span className="font-Source text-white text-sm  lg:text-2xl text-center">
          No payment needed. Start optimizing your food inventory today.
        </span>
      </div>
      <div className="flex gap-6 lg:gap-20">
        <button className="bg-black font-Source text-white rounded-full px-10 py-2 w-auto">
          Start Now
        </button>
        <Link
          href="/contact"
          className="bg-black font-Source text-white rounded-full px-10 py-2"
        >
          Contact Us
        </Link>
      </div>
    </footer>
  );
}
