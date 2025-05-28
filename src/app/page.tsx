import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { Carousel } from "./Components/Carousel";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer";

export default function Home() {
  const slideData = [
    { src: "/images/coffee3.jpg" },
    { src: "/images/coffee20.jpg" },
    { src: "/images/coffee17.jpg" },
    { src: "/images/coffee4.jpg" },
    { src: "/images/coffee2.jpg" },
    { src: "/images/coffee6.jpg" },
    { src: "/images/coffee7.jpg" },
    { src: "/images/coffee8.jpg" },
    { src: "/images/coffee9.jpg" },
    { src: "/images/coffee10.jpg" },
    { src: "/images/coffee11.jpg" },
    { src: "/images/coffee12.jpg" },
    { src: "/images/coffee13.jpg" },
    { src: "/images/coffee14.jpg" },
    { src: "/images/coffee15.jpg" },
    { src: "/images/coffee16.jpg" },
    { src: "/images/coffee5.jpg" },
    { src: "/images/coffee18.jpg" },
    { src: "/images/coffee19.jpg" },
    { src: "/images/coffee1.jpg" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-[#fcf5e7] text-black">
      <Navbar />
      <Hero />
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
      <Menu />
      <Footer/>
{/* 
      <div className="py-56 text-6xl font-plaster text-center">
        Latte <br/>Heaven
      </div> */}
    </div>
  );
}
