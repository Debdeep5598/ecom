"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Dummy recently viewed products (replace with real local storage or API data)
const dummyRecentlyViewed = [
  { id: 1, name: "Smartphone", image: "/electronics.jpg", price: 199 },
  { id: 2, name: "Laptop", image: "/laptop.jpg", price: 899 },
  { id: 3, name: "Smartwatch", image: "/watch.jpg", price: 149 },
];

const RecentlyViewed = () => {
  const [recentProducts, setRecentProducts] = useState(dummyRecentlyViewed);

  useEffect(() => {
    // TODO: Replace with localStorage or API call to get recently viewed items
    setRecentProducts(dummyRecentlyViewed);
  }, []);

  return (
    <div className="mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">👀 Recently Viewed</h2>
      <div className="flex gap-4 overflow-x-auto">
        {recentProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="min-w-[120px]">
            <div className="border p-2 rounded hover:shadow-md transition">
              <Image src={product.image} alt={product.name} width={100} height={100} className="mx-auto" />
              <p className="text-center mt-2 font-semibold">{product.name}</p>
              <p className="text-center text-green-600 font-bold">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
