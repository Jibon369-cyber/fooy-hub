"use client";

import { useState } from "react";



const SignUpPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));

    setMessage("Account created successfully! 🎉");
  };

  return (
    <div className='min-h-[70vh] flex items-center justify-center px-4 py-10'>
      <div className='w-full max-w-md'>
        <h1 className='text-4xl font-extrabold text-center mb-8'>
          Create Your Account
        </h1>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Your Name'
            className='input input-bordered w-full'
          />

          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Email Address'
            className='input input-bordered w-full'
          />

          <input
            type='tel'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder='Phone Number'
            className='input input-bordered w-full'
          />

          <input
            type='password'
            name='password'
            value={form.password}
            onChange={handleChange}
            placeholder='Password'
            className='input input-bordered w-full'
          />

          <textarea
            name='address'
            value={form.address}
            onChange={handleChange}
            placeholder='Mailing Address'
            className='textarea textarea-bordered w-full'
          />

          <button
            type='submit'
            className='btn bg-orange-400 hover:bg-orange-500 w-full'>
            Sign Up
          </button>
        </form>

        {message && (
          <p className='text-green-600 text-center mt-4 font-semibold'>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
