import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { Carousel } from "./Components/Carousel";

export default function Home() {
  const slideData = [
    { src: "/images/coffee1.jpg" },
    { src: "/images/coffee2.jpg" },
    { src: "/images/coffee3.jpg" },
    { src: "/images/coffee4.jpg" },
    { src: "/images/coffee5.jpg" },
    { src: "/images/coffee6.jpg" },
    { src: "/images/coffee7.jpg" },
    { src: "/images/coffee8.jpg" },
    { src: "/images/coffee9.jpg" },
  ];

  return (
    <div className="w-full h-full bg-[#fcf5e7] text-black">
      <Navbar />
      <Hero />
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}
