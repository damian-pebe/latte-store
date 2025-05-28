import React from "react";
import Image from "next/image";

export default function Coffee() {
  const products = [
    {
      name: "Espresso",
      description: "Rich and bold single shot of espresso.",
      price: 2.5,
    },
    {
      name: "Americano",
      description: "Espresso with hot water for a smooth, robust flavor.",
      price: 3.0,
    },
    {
      name: "Latte",
      description:
        "Espresso with steamed milk and a light layer of foam. Flavors: Vanilla, Caramel, Hazelnut, Mocha.",
      price: 4.0,
    },
    {
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and foam.",
      price: 4.0,
    },
    {
      name: "Flat White",
      description: "Silky microfoam over a double shot of espresso.",
      price: 4.0,
    },
    {
      name: "Macchiato",
      description: "Espresso marked with a dollop of frothy steamed milk.",
      price: 4.0,
    },
    {
      name: "Mocha",
      description:
        "Espresso, steamed milk, and rich chocolate syrup, topped with whipped cream.",
      price: 4.0,
    },
    {
      name: "Cold Brew",
      description: "Smooth and refreshing cold-brewed coffee, served over ice.",
      price: 4.0,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full gap-6 mt-10 px-10 pb-20 font-poppins">
      <div className="w-full md:w-1/2 bg-[#fef3df] p-8 rounded-[30px] shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-neutral-900">
          Coffee Selection
        </h2>
        <ul className="space-y-10">
          {products.map(({ name, description, price }, idx) => (
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
          src="/images/coffee8.jpg"
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
