import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const HeaderTop: React.FC = () => {
  return (
    <div className="bg-red-950 py-2">
      <div className="max-w-screen-xl mx-auto flex justify-end items-center px-4 space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
          <BsFacebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
          <BsInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
          <BsLinkedin size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
          <BsTwitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;


