"use client";
import { useState } from "react";
import Image from "next/image";

const OrdersPage = () => {
  // Dummy Orders (Replace with API data)
  const [orders] = useState([
    { id: "A123", date: "March 5, 2025", total: "$99.99", status: "Shipped", image: "/smartphones.jpg" },
    { id: "B456", date: "March 10, 2025", total: "$49.99", status: "Processing", image: "/smartphones.jpg" },
    { id: "C789", date: "March 15, 2025", total: "$29.99", status: "Delivered", image: "/smartphones.jpg" },
  ]);

  // Status Colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "text-green-600 bg-green-100";
      case "Processing": return "text-orange-500 bg-orange-100";
      case "Shipped": return "text-blue-600 bg-blue-100";
      default: return "text-gray-600 bg-gray-100";
    }
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

        {/* Order Filters */}
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">🔍 Filter Orders</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-cyan-500">📦 All Orders</li>
            <li className="cursor-pointer hover:text-cyan-500">🚚 Shipped</li>
            <li className="cursor-pointer hover:text-cyan-500">⏳ Processing</li>
            <li className="cursor-pointer hover:text-cyan-500">✅ Delivered</li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">🛠 Help & Support</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-cyan-500">📞 Contact Support</li>
            <li className="cursor-pointer hover:text-cyan-500">📜 Return Policy</li>
            <li className="cursor-pointer hover:text-cyan-500">🔒 Privacy Policy</li>
          </ul>
        </div>
      </aside>

      {/* 🔹 Right Content (Orders List) */}
      <div className="w-3/4 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">📦 My Orders</h1>
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
              {/* 🔹 Order Image */}
              <Image src={order.image} alt="Product Image" width={80} height={80} className="rounded-md object-cover" />

              {/* 🔹 Order Details */}
              <div className="flex-grow">
                <p className="text-lg font-medium">Order ID: <span className="font-bold">{order.id}</span></p>
                <p className="text-sm text-gray-600">📅 Date: {order.date}</p>
                <p className="text-sm text-gray-600">💲 Total: {order.total}</p>
                <p className={`inline-block px-3 py-1 mt-1 rounded-full text-sm font-bold ${getStatusColor(order.status)}`}>
                  {order.status === "Delivered" ? "✅ " : order.status === "Processing" ? "⏳ " : "🚚 "}
                  {order.status}
                </p>
              </div>

              {/* 🔹 View Order Button */}
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrdersPage;
