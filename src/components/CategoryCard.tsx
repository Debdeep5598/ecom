"use client";

import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  name: string;
  image: string;
}

const CategoryCard = ({ name, image }: CategoryProps) => {
  return (
    <Link href={`/category/${name.toLowerCase()}`} className="text-center">
      <div className="bg-white shadow-md rounded-md hover:shadow-lg transition w-[150px] mx-auto overflow-hidden">
        {/* Image Container with No Cropping */}
        <div className="relative w-full h-[100px] bg-white flex items-center justify-center overflow-hidden">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-contain"
          />
        </div>

        {/* Category Name */}
        <h2 className="mt-2 text-lg font-semibold">{name}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
