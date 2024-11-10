'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="logo">
          <Image src="/store.jpeg" alt="Bakery Logo" width={70} height={100} className="h-12" />
        </div>
        
        {/* Hamburger Button */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navbar Links - Desktop */}
        <nav className="hidden md:flex md:space-x-4">
          <Link href="/" className="text-gray-700 hover:text-pink-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-pink-500">About</Link>
          <Link href="/shop" className="text-gray-700 hover:text-pink-500">Shop</Link> 
          <Link href="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link> 
        </nav>
        
       
        <div className="hidden md:block">
          <Link href="/shop">
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
              Order Now
            </button>
          </Link>
        </div>

       
        {isMenuOpen && (
          <div className="absolute top-full right-4 w-40 bg-white shadow-lg rounded-md py-2 mt-2">
            <nav className="flex flex-col space-y-2 px-4">
              <Link href="/" className="text-gray-700 hover:text-pink-500">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-500">About</Link>
              <Link href="/shop" className="text-gray-700 hover:text-pink-500">Shop</Link> 
              <Link href="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link> 
            </nav>
            <div className="mt-2 px-4">
              <button className="bg-pink-500 text-white w-full py-2 rounded hover:bg-pink-600">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
