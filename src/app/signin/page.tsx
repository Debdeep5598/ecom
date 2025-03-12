"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy authentication (Replace with real auth logic)
    if (email === "user@example.com" && password === "password") {
      alert("Login Successful");
      router.push("/account"); // Redirect to account page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
