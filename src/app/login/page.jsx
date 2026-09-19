"use client";

import { useState } from "react";
import Link from "next/link";



const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");

    // User has not signed up
    if (!savedUser) {
      setMessage("Account not found. Please Sign Up first.");
      return;
    }

    const user = JSON.parse(savedUser);

    // Check email and password
    if (email === user.email && password === user.password) {
      setMessage(`Welcome back, ${user.name}! 🎉`);
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className='min-h-[70vh] flex items-center justify-center px-4 py-10'>
      <div className='w-full max-w-md'>
        <h1 className='text-4xl font-extrabold text-center mb-8'>
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className='space-y-4'>
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input input-bordered w-full'
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input input-bordered w-full'
          />

          <button
            type='submit'
            className='btn bg-orange-400 hover:bg-orange-500 w-full'>
            Login
          </button>
        </form>

        {message && <p className='text-center mt-4 font-semibold'>{message}</p>}

        <p className='text-center mt-4'>
          Don't have an account?{" "}
          <Link
            href='/signup'
            className='text-orange-400 font-semibold hover:underline'>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
