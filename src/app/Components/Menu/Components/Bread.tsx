import React from "react";
import Image from "next/image";

export default function Bread() {
  const breads = [
    {
      name: "Croissant",
      description: "Buttery, flaky, and golden French pastry.",
      price: 2.5,
    },
    {
      name: "Chocolate Croissant",
      description: "Classic croissant filled with rich chocolate.",
      price: 3.0,
    },
    {
      name: "Banana Bread",
      description: "Moist and dense loaf with ripe banana and cinnamon.",
      price: 3.25,
    },
    {
      name: "Blueberry Muffin",
      description: "Soft muffin bursting with fresh blueberries.",
      price: 3.0,
    },
    {
      name: "Cinnamon Roll",
      description: "Sweet rolled dough with cinnamon sugar and glaze.",
      price: 3.75,
    },
    {
      name: "Butter Toast",
      description: "Thick-cut toast topped with melted butter.",
      price: 2.0,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full gap-6 mt-10 px-10 pb-20 font-poppins">
      <div className="w-full md:w-1/2 bg-[#fef3df] p-8 rounded-[30px] shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-neutral-900">
          Delightful Pastries
        </h2>
        <ul className="space-y-10">
          {breads.map(({ name, description, price }, idx) => (
            <li key={idx} className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-neutral-900">{name}</p>
                <p className="text-sm text-neutral-600">{description}</p>
              </div>
              <span className="font-semibold text-neutral-800">
                ${price.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-1/2 rounded-[30px] overflow-hidden shadow-lg relative">
        <Image
          src="/images/coffee20.jpg"
          alt="Coffee"
          width={800}
          height={800}
          className="w-full h-full object-cover rounded-[30px]"
        />
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-black p-3 rounded-full border-x-4 border-y-2 border-white ">
          <h2 className="text-xs font-bold">Our Special Coffee</h2>
        </div>
      </div>
    </div>
  );
}
