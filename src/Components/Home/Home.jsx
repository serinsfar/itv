import React from 'react';
import Hero from '../Hero/Hero';
import BusinessUnit from '../BusinessUnit';
import ChooseUs from '../chooseUs/ChooseUs';
import Achievements from '../count/Achievements';
import CarouselData from '../carousel/Carousels';


const Home = () => {
  return (
    <>
      <Hero />
      <Achievements />
      <BusinessUnit />
      <ChooseUs />
      <CarouselData/>
    </>
  );
};

export default Home;
