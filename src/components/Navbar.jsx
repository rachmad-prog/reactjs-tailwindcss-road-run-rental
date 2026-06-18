import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-wider uppercase">
          Road<span className="text-amber-500">Run Rental</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="text-amber-500 transition-colors">
            Home
          </a>
          <a href="#cars" className="hover:text-amber-500 transition-colors">
            Cars
          </a>
          <a href="#about" className="hover:text-amber-500 transition-colors">
            About
          </a>
          <a
            href="#services"
            className="hover:text-amber-500 transition-colors">
            Services
          </a>
          <a
            href="#testimonial"
            className="hover:text-amber-500 transition-colors">
            Testimonial
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-5 py-2 rounded-md transition-all">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-4 space-y-3">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block text-amber-500 font-medium">
            Home
          </a>
          <a
            href="#cars"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-amber-500">
            Cars
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-amber-500">
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-amber-500">
            Services
          </a>
          <a
            href="#testimonial"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-amber-500">
            Testimonial
          </a>
          <button className="w-full bg-amber-500 text-black font-bold py-2 rounded-md">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
