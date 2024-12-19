import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import FooterF from '../footer/FooterF';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg white text-primary">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterF />
    </div>
  );
};

export default Layout;
