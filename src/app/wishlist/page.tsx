"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const WishlistPage = () => {
  // Sample wishlist items
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Wireless Headphones", image: "/noisecan.jpg", price: "$59.99" },
    { id: 2, name: "Smartwatch", image: "/watch.jpg", price: "$129.99" },
    { id: 3, name: "Gaming Mouse", image: "/speaker.webp", price: "$39.99" },
  ]);

  // Remove item from wishlist
  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <section className="container mx-auto my-10 px-4 flex gap-6">
      {/* 🔹 Left Sidebar */}
      <aside className="w-1/4 bg-white shadow-md rounded-lg p-4 h-fit">
        {/* User Info */}
        <div className="text-center border-b pb-4">
          <Image src="/user.jpg" alt="User Avatar" width={80} height={80} className="rounded-full mx-auto" />
          <h2 className="text-lg font-semibold mt-2">John Doe</h2>
          <p className="text-sm text-gray-600">johndoe@example.com</p>
        </div>

        {/* Wishlist Categories */}
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">🎯 Wishlist Categories</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-cyan-500">🎧 Electronics</li>
            <li className="cursor-pointer hover:text-cyan-500">⌚ Wearables</li>
            <li className="cursor-pointer hover:text-cyan-500">🖥️ Accessories</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">🚀 Quick Links</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-cyan-500">🛒 View Cart</li>
            <li className="cursor-pointer hover:text-cyan-500">📦 My Orders</li>
            <li className="cursor-pointer hover:text-cyan-500">🔧 Settings</li>
          </ul>
        </div>
      </aside>

      {/* 🔹 Right Content (Wishlist Items) */}
      <div className="w-3/4 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">💖 Your Wish List</h1>

        {wishlistItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="border border-gray-300 rounded-md p-4 shadow-sm bg-white">
                {/* Image with Improved Styling */}
                <div className="w-full h-40 flex items-center justify-center overflow-hidden bg-gray-200 rounded-md">
                  <img src={item.image} alt={item.name} className="w-auto h-full object-contain" />
                </div>

                {/* Item Details */}
                <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                  <Link href="/cart" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WishlistPage;
