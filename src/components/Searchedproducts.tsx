"use client"; // Required for interactivity

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
    <div className="bg-white shadow-md p-4 rounded-md transition-transform transform hover:scale-105 w-[320px] mx-auto">
      {/* Fixed Image Size */}
      <div className="relative w-full h-[200px]">
        <Image 
          src={image} 
          alt={name} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md"
        />
      </div>

      {/* Product Name */}
      <h2 className="text-lg font-semibold mt-2">{name}</h2>

      {/* Price */}
      <p className="text-yellow-500 font-bold text-xl mt-1">${price.toFixed(2)}</p>

      {/* View Details Button */}
      <Link href={`/product/${id}`}>
        <button className="mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition w-full">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
