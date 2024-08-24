import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg relative z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Agri Forecast</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links - Dropdown for Mobile */}
        <div
          className={`absolute top-full left-0 w-full md:static md:flex md:w-auto transition-transform transform ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="bg-blue-600 md:flex md:space-x-6 space-y-2 md:space-y-0 md:items-center md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-center hover:bg-blue-700 hover:text-gray-200 hover:rounded-lg rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-2 px-4 text-center hover:bg-blue-700 hover:text-gray-200 hover:rounded-lg rounded-md"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/input"
                className="block py-2 px-4 text-center hover:bg-blue-700 hover:text-gray-200 hover:rounded-lg rounded-md"
              >
                Enter Data
              </Link>
            </li>
            <li>
              <Link
                to="/forecast-report"
                className="block py-2 px-4 text-center hover:bg-blue-700 hover:text-gray-200 hover:rounded-lg rounded-md"
              >
                Forecast Report
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 text-center hover:bg-blue-700 hover:text-gray-200 hover:rounded-lg rounded-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-4 text-center bg-green-500 hover:bg-green-600 hover:rounded-lg text-white rounded-md"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block py-2 px-4 text-center bg-green-500 hover:bg-green-600 hover:rounded-lg text-white rounded-md"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
