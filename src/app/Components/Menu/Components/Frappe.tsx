import React from 'react'
import Image from "next/image";

export default function Frappe() {
    
      const frappes = [
        {
          name: "Vanilla Frappé",
          description: "Blended ice, espresso, and creamy vanilla syrup.",
          price: 4.5,
        },
        {
          name: "Mocha Frappé",
          description:
            "Rich chocolate blended with coffee and ice, topped with whipped cream.",
          price: 4.75,
        },
        {
          name: "Caramel Frappé",
          description: "Sweet caramel sauce with coffee and milk over crushed ice.",
          price: 4.75,
        },
        {
          name: "Hazelnut Frappé",
          description:
            "Nutty and smooth espresso blend with hazelnut syrup and ice.",
          price: 4.75,
        },
        {
          name: "Matcha Frappé",
          description: "Creamy green tea matcha blended with milk and ice.",
          price: 5.0,
        },
        {
          name: "Strawberry Cream Frappé",
          description: "Fruit-forward, creamy blend of strawberries and ice.",
          price: 4.5,
        },
      ];
    
  return (
<div className="flex flex-col md:flex-row-reverse w-full gap-6 mt-10 px-10 pb-20 font-poppins">
        <div className="w-full md:w-1/2 bg-[#fef3df] p-8 rounded-[30px] shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900">Delicious Frappés</h2>
          <ul className="space-y-10">
            {frappes.map(({ name, description, price }, idx) => (
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
            src="/images/coffee19.jpg"
            alt="Coffee"
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-[30px]"
          />
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-black p-3 rounded-full border-x-4 border-y-2 border-white ">
            <h2 className="text-xs font-bold">Our Special Coffee</h2>
          </div>
        </div>
      </div>  )
}
