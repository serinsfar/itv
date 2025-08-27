import React, { useEffect, useRef } from 'react';
import Hero from '../Hero/Hero';
import BusinessUnit from '../BusinessUnit';
import ChooseUs from '../chooseUs/ChooseUs';
import Achievements from '../count/Achievements';
import CarouselData from '../carousel/Carousels';
import { useLocation } from 'react-router-dom';



const Home = () => {
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Achievements />
      <BusinessUnit />
      <ChooseUs />
      <CarouselData />
      <div ref={contactRef} id="contact" className="mt-20">
      </div>
    </>
  );
};

export default Home;
