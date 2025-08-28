"use client";

import axios from "axios";
import { useState } from "react";

export const AuthForm = () => {
  // Register state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("accessToken", res.data.authorization.token);
      console.log("Register success:", res.data);
      alert("Registered successfully!");
    } catch (err) {
      console.error(err);
      alert("Registration failed!");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email: loginEmail,
        password: loginPassword,
      });
      console.log("Login success:", res.data);

      // Save tokens in localStorage for now
      localStorage.setItem("accessToken", res.data.authorization.token);
      //localStorage.setItem("refreshToken", res.data.refreshToken);

      alert("Logged in successfully!");
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-md mx-auto">
      {/* Register */}
      <div>
        <h1 className="text-xl font-bold mb-2">Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border p-2 w-full mb-2"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 w-full mb-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 w-full mb-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">
            Register
          </button>
        </form>
      </div>

      {/* Login */}
      <div>
        <h1 className="text-xl font-bold mb-2">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 w-full mb-2"
          />
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 w-full mb-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
