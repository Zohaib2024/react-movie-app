import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md border-red-500 border rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="px-4 py-2 rounded-md bg-gray-800 border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition text-white py-2 rounded-md mt-4"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-400">
          Don't have an account?{" "}
          <span className="text-red-600 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
