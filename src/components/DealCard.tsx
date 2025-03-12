"use client";

import Image from "next/image";
import Link from "next/link";

interface DealProps {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
}

const DealCard = ({ id, name, originalPrice, discountedPrice, image }: DealProps) => {
  const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  return (
    <div className="bg-white shadow-md p-4 rounded-md transition-transform transform hover:scale-105 w-[250px] h-[350px] flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-[200px] rounded-md overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Product Name (Fixed Height) */}
        <h2 className="text-lg font-semibold mt-2 h-[48px] overflow-hidden line-clamp-2">
          {name}
        </h2>

        {/* Pricing */}
        <div>
          <p className="text-gray-500 line-through text-sm">${originalPrice.toFixed(2)}</p>
          <p className="text-cyan-500 font-bold text-xl">${discountedPrice.toFixed(2)}</p>
        </div>

        {/* Discount Badge */}
        <span className="text-white bg-red-500 px-2 py-1 text-xs font-bold rounded self-start">
          {discountPercentage}% OFF
        </span>

        {/* View Deal Button */}
        <Link href={`/product/${id}`}>
          <button className="mt-2 px-4 py-2 bg-cyan-400 text-black font-semibold rounded-md hover:bg-cyan-500 transition w-full">
            View Deal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DealCard;
