import React from 'react';

const About = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center" 
      style={{ backgroundImage: "url('brownbg\.jpg')" }} 
      id="about"
    >
      <div className="max-w-screen-xl mx-auto text-center bg-black bg-opacity-50 p-6 rounded" data-aos="zoom-out-down">
        <h2 className="text-3xl font-bold mb-4 text-white">About Us</h2>
        <p className="text-white mb-6">We are a family-run bakery with a passion for quality and freshness.</p>
        <p className="text-white">Our recipes are crafted with the finest ingredients.</p>
      </div>
    </section>
  );
};

export default About;

