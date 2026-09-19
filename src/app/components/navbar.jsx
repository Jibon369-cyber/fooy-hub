"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();

  const list = (
    <>
      <li>
        <Link
          href='/'
          className={pathname === "/" ? "text-orange-400 font-bold" : ""}>
          Home
        </Link>
      </li>

      <li>
        <Link
          href='/foods'
          className={
            pathname.startsWith("/foods") ? "text-orange-400 font-bold" : ""
          }>
          Foods
        </Link>
      </li>

      <li>
        <Link
          href='/reviews'
          className={
            pathname === "/reviews" ? "text-orange-400 font-bold" : ""
          }>
          Reviews
        </Link>
      </li>

      <li>
        <Link
          href='/about'
          className={pathname === "/about" ? "text-orange-400 font-bold" : ""}>
          About
        </Link>
      </li>
    </>
  );

  return (
    <div className='navbar bg-base-100 shadow-sm sticky top-0 z-50'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              aria-label='Menu'
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {" "}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            {list}
          </ul>
        </div>
        <a className='text-2xl font-black tracking-tighter'>
          Foody<span className='text-orange-400'>Hub</span>
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{list}</ul>
      </div>
      <div className='navbar-end gap-2'>
        <Link
          href='/signup'
          className={`btn ${
            pathname === "/signup" ? "bg-orange-400 text-white" : ""
          }`}>
          Sign Up
        </Link>

        <Link
          href='/login'
          className={`btn ${
            pathname === "/login" ? "bg-orange-400 text-white" : ""
          }`}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
