"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  // Dummy Cart Items (Replace with API data)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Headphones", image: "/noisecan.jpg", price: 99.99, quantity: 1 },
    { id: 2, name: "Gaming Mouse", image: "/speaker.webp", price: 49.99, quantity: 2 },
  ]);

  // Increase Quantity
  const increaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Decrease Quantity
  const decreaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Remove Item
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate Total Price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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

        {/* Discount Section */}
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">🎟️ Available Discounts</h3>
          <ul className="space-y-2">
            <li className="bg-green-100 text-green-700 p-2 rounded-md text-sm">10% Off on Headphones</li>
            <li className="bg-blue-100 text-blue-700 p-2 rounded-md text-sm">5% Cashback on UPI</li>
            <li className="bg-yellow-100 text-yellow-700 p-2 rounded-md text-sm">Buy 1 Get 1 Free on Accessories</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">🚀 Quick Links</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-cyan-500">🏠 Home</li>
            <li className="cursor-pointer hover:text-cyan-500">💖 Wishlist</li>
            <li className="cursor-pointer hover:text-cyan-500">📦 My Orders</li>
          </ul>
        </div>
      </aside>

      {/* 🔹 Right Content (Cart Items) */}
      <div className="w-3/4 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">🛒 My Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="border-b py-4 flex items-center gap-4">
                {/* Product Image */}
                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-md">
                  <img src={item.image} alt={item.name} className="w-auto h-full object-contain" />
                </div>

                {/* Item Details */}
                <div className="flex-grow">
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-200 rounded">➖</button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-200 rounded">➕</button>
                </div>

                {/* Total Price for Item */}
                <p className="text-orange-500 font-bold">${(item.price * item.quantity).toFixed(2)}</p>

                {/* Remove Button */}
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">❌</button>
              </div>
            ))}

            {/* Checkout Section */}
            <div className="mt-6 p-4 bg-gray-100 rounded-md">
              <h3 className="text-xl font-semibold">🧾 Order Summary</h3>
              <div className="flex justify-between text-lg mt-2">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600 transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
