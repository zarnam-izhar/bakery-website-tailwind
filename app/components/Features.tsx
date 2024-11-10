import React from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
  return (
    <section className="features py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6" data-aos="zoom-in">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="feature-card bg-white shadow-md rounded-lg p-6" data-aos="zoom-in">
            <Image
              src="/ingrediants.jpeg"
              alt="Quality Ingredients"
              width={500}
              height={192}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Quality Ingredients</h3>
            <p className="text-gray-600">We use only the best ingredients for our baked goods.</p>
          </div>
          <div className="feature-card bg-white shadow-md rounded-lg p-6" data-aos="zoom-in">
            <Image
              src="/Orange-.jpg"
              alt="Custom Designs"
              width={500}
              height={192}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Custom Designs</h3>
            <p className="text-gray-600">Get a cake designed just for your special occasion!</p>
          </div>
          <div className="feature-card bg-white shadow-md rounded-lg p-6" data-aos="zoom-in">
            <Image
              src="/fast.jpg"
              alt="Fast Delivery"
              width={500}
              height={192}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4"data-aos="zoom-in">Fast Delivery</h3>
            <p className="text-gray-600">We deliver your orders promptly and safely.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
