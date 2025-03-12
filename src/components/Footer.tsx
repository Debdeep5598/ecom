"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Wave Effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-12 fill-current text-gray-800">
          <path d="M0,0V50C120,70,240,90,360,85S600,50,720,40s240,10,360,5,240-15,360-10V0Z"></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">NEXGN</h3>
          <p className="text-gray-400">
            Elevating your booking experience with innovation and excellence.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-cyan-400 text-2xl hover:text-cyan-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-cyan-400 text-2xl hover:text-cyan-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-cyan-400 text-2xl hover:text-cyan-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-cyan-400 text-2xl hover:text-cyan-300 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-cyan-400 mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-cyan-300 transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-cyan-400 mb-3">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-cyan-300 transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-cyan-400 mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-cyan-300 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Aim Digitalise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
