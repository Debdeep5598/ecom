"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      alert("Login Successful");
      router.push("/account");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* Header Placeholder (If Needed) */}
      <header className="py-4 text-center text-white font-semibold text-lg"></header>

      {/* Centered Form Section */}
      <div className="flex flex-grow justify-center items-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back 👋</h1>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="flex items-center justify-center w-full bg-white text-gray-700 border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-red-500" /> Sign in with Google
            </button>
            <button className="flex items-center justify-center w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
              <FaFacebook className="mr-2" /> Sign in with Facebook
            </button>
            <button className="flex items-center justify-center w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition">
              <FaInstagram className="mr-2" /> Sign in with Instagram
            </button>
            <button className="flex items-center justify-center w-full bg-black text-white p-3 rounded-lg hover:bg-gray-900 transition">
              <FaXTwitter className="mr-2" /> Sign in with X
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Email & Password Sign-In */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right text-sm">
              <Link href="/forgot-password" className="text-indigo-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-gray-700 mt-6">
            Don't have an account?{" "}
            <Link href="/signup" className="text-indigo-600 font-semibold hover:underline">
              Sign up
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

export default SignInPage;
