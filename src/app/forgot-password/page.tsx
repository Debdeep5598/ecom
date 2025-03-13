"use client";

import { useState } from "react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("If this email is registered, you'll receive a password reset link.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6 9.5 7.12 9.5 8.5 10.62 11 12 11zm0 2c-2.5 0-5 1.12-5 3v1h10v-1c0-1.88-2.5-3-5-3z" />
          </svg>
        </div>
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">Forgot Password?</h1>
        <p className="text-gray-600 text-sm text-center mb-6">
          Enter your email and we'll send you a password reset link.
        </p>

        {/* Success Message */}
        {message && <p className="text-green-600 text-sm text-center mb-2">{message}</p>}

        {/* Form */}
        <form onSubmit={handleResetPassword} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Sign-in */}
        <div className="mt-4 text-center">
          <Link href="/signin" className="text-sm text-blue-500 hover:underline">
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
