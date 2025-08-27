import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import ContactUs from '../ContactUs/Contact_Us';
import FooterF from '../footer/FooterF';

const Layout = () => {
  const contactRef = useRef();
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg white text-primary">
      <Navbar contactRef={contactRef} />
      <main className="flex-grow">
        <Outlet />
        {location.pathname === '/' && (
          <div ref={contactRef}>
            <ContactUs />
          </div>
        )}
      </main>
      <FooterF />
    </div>
  );
};

export default Layout;
