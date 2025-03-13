"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account created successfully!");
    router.push("/account");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-500 to-blue-500">
      {/* Header Placeholder */}
      <header className="py-4 text-center text-white font-semibold text-lg"></header>

      {/* Centered Form Section */}
      <div className="flex flex-grow justify-center items-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Create an Account 🚀</h1>

          {/* Social Signup Buttons */}
          <div className="space-y-3">
            <button className="flex items-center justify-center w-full bg-white text-gray-700 border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-red-500" /> Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
              <FaFacebook className="mr-2" /> Sign up with Facebook
            </button>
            <button className="flex items-center justify-center w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition">
              <FaInstagram className="mr-2" /> Sign up with Instagram
            </button>
            <button className="flex items-center justify-center w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900 transition">
              <FaXTwitter className="mr-2" /> Sign up with X
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Email Sign-Up Form */}
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-700 mt-6">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Footer with Proper Spacing */}
      <footer className="py-6 text-center text-white text-sm">
      </footer>
    </div>
  );
};

export default SignUpPage;
