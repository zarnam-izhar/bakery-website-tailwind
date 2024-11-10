import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Kawai Bakery. All rights reserved.</p>
        <div className="social-links mt-2">
          <a href="#" className="text-white mx-2 hover:text-pink-500">Facebook</a>
          <a href="#" className="text-white mx-2 hover:text-pink-500">Instagram</a>
          <a href="#" className="text-white mx-2 hover:text-pink-500">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
