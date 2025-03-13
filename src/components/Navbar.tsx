"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const accountRef = useRef<HTMLDivElement | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    timeoutId = setTimeout(() => {
      const isStillInside =
        accountRef.current?.contains(event.relatedTarget as Node) ||
        dropdownRef.current?.contains(event.relatedTarget as Node);

      if (!isStillInside) {
        setDropdownOpen(false);
      }
    }, 300);
  };

  const handleProtectedNavigation = (path: string) => {
    if (!isLoggedIn) {
      router.push("/signin");
    } else {
      router.push(path);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-md p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <img src="/our-logo.jpeg" alt="NEXGN Logo" width={150} height={50} />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex bg-transparent border border-cyan-500 rounded-full overflow-hidden w-1/3 backdrop-blur-md">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 flex-grow outline-none bg-transparent text-gray-900 px-4 placeholder:text-gray-500"
          />
          <button className="bg-cyan-500 px-4 hover:bg-cyan-700 transition rounded-r-full text-white">
            <FaSearch />
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-900">
          
          {/* Account Dropdown */}
          <div 
            className="relative group"
            ref={accountRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center cursor-pointer hover:text-cyan-600 transition">
              <FaUser />
              <span className="ml-2">Account</span>
            </div>

            {dropdownOpen && (
              <div 
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded-md p-2 border border-gray-200"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ul className="py-2">
                  {isLoggedIn ? (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-cyan-500/10 cursor-pointer transition"
                        onClick={() => {
                          setIsLoggedIn(false);
                          setDropdownOpen(false);
                        }}
                      >
                        Sign Out
                      </li>
                      <Link href="/account" className="block px-4 py-2 hover:bg-cyan-500/10 transition">Your Account</Link>
                      <Link href="/orders" className="block px-4 py-2 hover:bg-cyan-500/10 transition">Your Orders</Link>
                      <Link href="/wishlist" className="block px-4 py-2 hover:bg-cyan-500/10 transition">Wish List</Link>
                    </>
                  ) : (
                    <>
                      <Link href="/signin" className="block px-4 py-2 hover:bg-cyan-500/10 transition">Sign In</Link>
                      <Link href="/signin" className="block px-4 py-2 hover:bg-cyan-500/10 transition">Your Orders</Link>
                      <Link href="/signin" className="block px-4 py-2 hover:bg-cyan-500/10 transition">Wish List</Link>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Orders Link */}
          <button
            onClick={() => handleProtectedNavigation("/orders")}
            className="cursor-pointer hover:text-cyan-600 transition"
          >
            Orders
          </button>

          {/* Cart Link */}
          <button
            onClick={() => handleProtectedNavigation("/cart")}
            className="flex items-center cursor-pointer hover:text-cyan-600 transition"
          >
            <FaShoppingCart />
            <span className="ml-2">Cart</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-600">
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-900 p-4 flex flex-col space-y-4 rounded-b-lg shadow-md backdrop-blur-lg">
          <button onClick={() => handleProtectedNavigation("/account")} className="hover:text-cyan-600 transition">Account</button>
          <button onClick={() => handleProtectedNavigation("/orders")} className="hover:text-cyan-600 transition">Orders</button>
          <button onClick={() => handleProtectedNavigation("/cart")} className="hover:text-cyan-600 transition">Cart</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
