'use client'

import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 w-full">
      <h1 className="text-2xl font-bold font-plaster tracking-widest">Latte Heaven</h1>
      <div className="flex items-center justify-between p-4 text-black font-plaster">
        <button
          onClick={() => {}}
          className="flex justify-between items-center py-4 px-2 transform hover:-translate-y-1.5 duration-1000 hover:cursor-pointer"
        >
          Menu
        </button>
        <button
          onClick={() => {}}
          className="flex justify-between items-center py-4 px-2 transform hover:-translate-y-1.5 duration-1000 hover:cursor-pointer"
        >
          News
        </button>
      </div>
    </div>
  );
}
