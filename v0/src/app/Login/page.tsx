"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, category });
  };

  return (
    <div className="screenMiddleDiv">
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-[#0F6466]">Welcome</h2>

          <div className="mb-4">
            <label htmlFor="role" className="formLabel">Select Your Role</label>
            <select 
              id="role" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="bg-[#0F6466] text-white border border-[#0F6466] focus:outline-none"
              required
            >
              <option value="" disabled>Select Your Role</option>
              {["Admin", "Teacher", "Student", "Parents", "Guest"].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="email" className="formLabel">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white text-black border border-[#0F6466] focus:outline-none"
            />
          </div>

          <div className="my-6">
            <label htmlFor="password" className="formLabel">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white text-black border border-[#0F6466] focus:outline-none"
            />
          </div>

          <button type="submit" className="formButton bg-[#0F6466] text-white hover:bg-[#2C3532]">
            Login
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-sm hover:underline">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}