import React from 'react';
import './globals.css'; 
import HeaderTop from './components/HeaderTop';
import Header from './components/Header';  
import Footer from './components/Footer'; 

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <HeaderTop />
        <Header />  
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
