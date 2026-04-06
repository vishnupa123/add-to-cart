import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rose-400 text-white w-full mt-16">

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold">Book Store</h2>
          <p className="mt-3 text-sm">
            Discover amazing books from different genres.
            Read and explore new worlds.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-200 cursor-pointer">Books</li>
            <li className="hover:text-gray-200 cursor-pointer">About</li>
            <li className="hover:text-gray-200 cursor-pointer">Cart</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-200 cursor-pointer">Contact</li>
            <li className="hover:text-gray-200 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-200 cursor-pointer">Privacy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-gray-200" />
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
            <FaTwitter className="cursor-pointer hover:text-gray-200" />
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-rose-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} Book Store. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
