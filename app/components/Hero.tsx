
import React from 'react';
import Link from 'next/link';
const Hero: React.FC = () => {
  return (
    <section 
      className="hero bg-cover bg-center h-screen flex items-center" 
      style={{ backgroundImage: "url('/bg-brown.jpg')" }}
    >
      <div className="container mx-auto text-center py-20 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-5xl font-bold text-white">Welcome to Our Bakery</h1>
        <p className="text-xl text-white mt-4">Delicious cakes and pastries made with love!</p>
        <Link href='shop'>
        <button className="bg-white text-pink-500 px-6 py-3 rounded mt-6 hover:bg-gray-200">
          View Our Products
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
