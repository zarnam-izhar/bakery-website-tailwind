import React from 'react';

const About: React.FC = () => {
  return (
    <div
      className="container mx-auto py-12 px-4 bg-cover bg-center"
      style={{ backgroundImage: 'url(/pink1.jpg)' }}
    >
      <div className="bg-pink-100 bg-opacity-70 rounded-lg shadow-lg p-8 text-center" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-pink-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-900 mb-4">
          Welcome to <span className="font-semibold text-pink-700">Kawai Bakery!</span> We&apos;re a family-owned bakery dedicated to bringing you the finest, freshly-baked treats with love and passion. 
          Our journey began in 2010 with a simple mission: to create mouth-watering pastries and bread that would make our customers smile.
        </p>
        <p className="text-lg text-gray-900 mb-4">
          From our signature cupcakes to artisanal bread, everything we bake is made from scratch using the best ingredients. Our skilled bakers pour 
          their hearts into every recipe, ensuring that each bite is a delightful experience. We believe in quality, tradition, and innovation.
        </p>
        <p className="text-lg text-gray-900 mb-4">
          Whether you are here for your daily croissant or a custom cake for a special occasion, we take pride in being part of your life’s moments, both big and small. 
          Come visit us at Sweet Crumbs Bakery and treat yourself to something delicious!
        </p>
        <h2 className="text-2xl font-bold text-pink-700 mt-8 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-900 mb-4">
          At Sweet Crumbs Bakery, our mission is to deliver happiness one bite at a time. We strive to create baked goods that are not only delicious but also made with care and integrity.
        </p>
        <h2 className="text-2xl font-bold text-pink-700 mt-8 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-900 mb-4">
          We envision a world where everyone can enjoy the simple pleasures of freshly baked bread and pastries, no matter where they are. That&apos;s why we are expanding our menu, introducing new flavors, and always looking for ways to better serve our community.
        </p>
      </div>
    </div>
  );
};

export default About;
