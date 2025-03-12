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
    <Link href={`/product/${id}`} className="block">
      <div className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition cursor-pointer">
        {/* Image */}
        <div className="w-full h-40 flex items-center justify-center overflow-hidden bg-gray-200 rounded-md">
          <Image src={image} alt={name} width={150} height={150} className="w-auto h-full object-contain" />
        </div>

        {/* Name & Price */}
        <h2 className="mt-2 text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">${price}</p>

        {/* Button */}
        <button className="mt-2 bg-cyan-500 text-white py-1 px-4 rounded hover:bg-cyan-600 transition">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
