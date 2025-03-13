"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductProps) => {
  return (
    <Link href={`/product/${id}`} className="group block">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all flex flex-col">
        
        {/* 🔹 Image (Perfectly Adjusted) */}
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🔹 Name & Price */}
        <div className="p-3 text-center flex-grow flex flex-col justify-between">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-green-600 font-bold">${price.toFixed(2)}</p>

          {/* 🔹 Button */}
          <button className="mt-2 w-full bg-cyan-400 text-black py-2 rounded-md font-bold hover:bg-cyan-500 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
