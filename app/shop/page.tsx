import React from 'react';
import Image from 'next/image';

const Shop = () => {
  const bakeryItems = [
    { id: 1, name: 'Chocolate Cake', price: 20, image: '/chocolate-cake.jpg' },
    { id: 2, name: 'Vanilla Cupcake', price: 3, image: '/vanilla.jpg' },
    { id: 3, name: 'Croissant', price: 2, image: '/Perfect-Croissant.webp' },
    { id: 4, name: 'Orange Cake', price: 25, image: '/orange-cake.jpg' },
    { id: 5, name: 'Strawberry Tart', price: 15, image: '/tarts.jpg' },
    { id: 6, name: 'Blueberry Muffin', price: 3, image: '/Blueberry2.jpg' },
  ];

  return (
    <section className="py-20" id="shop">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Shop Our Bakery Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {bakeryItems.map((item) => (
            <div key={item.id} className="bg-orange-200 p-5 rounded shadow-md border-4 border-b-rose-500" data-aos="zoom-in-up">
              <div className="relative w-full h-80"> 
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded" 
                />
              </div>
              <h3 className="font-bold mt-2">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
