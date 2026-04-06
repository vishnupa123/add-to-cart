import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBook, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

import { useSelector } from "react-redux";


const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

const totalQuantity = useSelector((state) => state.cart.totalQuantity); // from redux state

  return (
    <nav className="bg-rose-400 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Book Store
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">

          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-gray-200">
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="flex items-center gap-1 hover:text-gray-200">
              <FaInfoCircle />
              About
            </Link>
          </li>

          <li>
            <Link to="/books" className="flex items-center gap-1 hover:text-gray-200">
              <FaBook />
              Books
            </Link>
          </li>

          <li>
  <Link to="/cart" className="flex items-center gap-1 hover:text-gray-200 relative">
    
    <div className="relative">
      <FaShoppingCart className="text-xl" />

      {/* Cart Count Badge */}
      <span className="absolute -top-1 -right-1 bg-blue-400  text-xs font-bold px-1 rounded-full text-white">
         {totalQuantity}
      </span>
    </div>

    Cart

  </Link>
</li>


        </ul>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden">

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 outline-none"
          />

          <button className="px-3 text-gray-600">
            <FaSearch />
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-rose-500">

          <ul className="flex flex-col items-center gap-4 py-4 text-white">

            <li>
              <Link to="/" className="flex items-center gap-2">
                <FaHome /> Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="flex items-center gap-2">
                <FaInfoCircle /> About
              </Link>
            </li>

            <li>
              <Link to="/books" className="flex items-center gap-2">
                <FaBook /> Books
              </Link>
            </li>

            <li>
              <Link to="/cart" className="flex items-center gap-2">
                <FaShoppingCart /> Cart
              </Link>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Nav;
