import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = ({ isActive }) =>
    isActive ? "text-red-500 font-bold" : "text-white hover:text-red-500";
  return (
    <header className="bg-black">
      <div className="flex justify-between items-center h-20 px-4 md:px-10 lg:justify-around ">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-red-600">FILMY</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white">
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
          <NavLink to="/Movies" className={activeClass}>
            Movies
          </NavLink>
          <NavLink to="/Pricing" className={activeClass}>
            Pricing
          </NavLink>
          <NavLink to="/Contact" className={activeClass}>
            Contact
          </NavLink>
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <NavLink to="/login">
            <button className="bg-red-600 w-32 h-10 rounded-lg font-bold text-white">
              Log in
            </button>
          </NavLink>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-4">
          <NavLink
            to="/"
            className="block hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Movies"
            className="block hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Movies
          </NavLink>
          <NavLink
            to="/Pricing"
            className="block hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/Contact"
            className="block hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink to="/login">
            <button className="bg-red-600 w-full h-10 rounded-lg font-bold text-white">
              Log in
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
