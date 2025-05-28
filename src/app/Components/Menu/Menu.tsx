import React from "react";
import Coffee from "./Components/Coffee";
import Bread from "./Components/Bread";
import Frappe from "./Components/Frappe";

export default function Menu() {

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl">
      <h1 className="w-full text-6xl font-careny text-black md:text-start text-center md:pl-10">
        Menu
      </h1>
      <Coffee />
      <Frappe />
      <Bread />
    </div>
  );
}
