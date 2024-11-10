import React from 'react';
import Image from 'next/image';

const Menu = () => {
  return (
    <section className="py-20" id="menu">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Chocolate Cake */}
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 "data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700">
            <Image src="/chocolate-cake.jpg" alt="Chocolate Cake" width={300} height={200} className="w-full h-72 object-cover rounded-t-lg" />
            <h3 className="font-bold text-xl mt-4">Chocolate Cake</h3>
            <p className="text-gray-600 mt-2">$20</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-600">Add to Cart</button>
          </div>

          {/* Vanilla Cupcake */}
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700">
            <Image src="/vanilla.jpg" alt="Vanilla Cupcake" width={300} height={200} className="w-full h-72 object-cover rounded-t-lg" />
            <h3 className="font-bold text-xl mt-4">Vanilla Cupcake</h3>
            <p className="text-gray-600 mt-2">$3</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-600">Add to Cart</button>
          </div>

          {/* Croissant */}
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700">
            <Image src="/Perfect-Croissant.webp" alt="Croissant" width={300} height={200} className="w-full h-72 object-cover rounded-t-lg" />
            <h3 className="font-bold text-xl mt-4">Croissant</h3>
            <p className="text-gray-600 mt-2">$2</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-600">Add to Cart</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Menu;
