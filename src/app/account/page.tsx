"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AccountPage = () => {
  // Dummy User Data (Replace with API Data Later)
  const [user] = useState({
    name: "Raj Verma",
    email: "rajverma@gmail.com",
    profilePic: "/user.jpg", // Replace with actual image path
  });

  return (
    <section className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">👤 My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block bg-gray-100 p-6 rounded-lg shadow-md h-full min-h-[500px]">
          <h2 className="text-xl font-semibold mb-4">Account Menu</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/account" className="block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/orders" className="block py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/settings" className="block py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Settings
              </Link>
            </li>
            <li>
              <button className="block w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600">
                Logout
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content (Centered) */}
        <div className="md:col-span-3 lg:col-span-3 flex justify-center">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl mx-auto">
            {/* User Info */}
            <div className="flex flex-col items-center">
              <Image
                src={user.profilePic}
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-full border border-gray-300"
              />
              <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>

            {/* Account Actions */}
            <div className="mt-6 space-y-4">
              <button className="block w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                Edit Profile
              </button>
              <button className="block w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition">
                Change Password
              </button>
              <Link
                href="/orders"
                className="block w-full text-center bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                View Order History
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions Panel */}
        <aside className="hidden lg:block bg-gray-100 p-6 rounded-lg shadow-md h-full min-h-[500px]">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/wishlist" className="block py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
                Saved Items
              </Link>
            </li>
            <li>
              <Link href="/support" className="block py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                Customer Support
              </Link>
            </li>
            <li>
              <Link href="/help" className="block py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                FAQs & Help
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default AccountPage;
