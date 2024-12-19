import React from 'react';
import Hero from '../Hero/Hero';
import Programs from '../Programs/Programs';
import HomeServices from '../homeServices/homeServices';
import BusinessUnit from '../BusinessUnit';
import ChooseUs from '../chooseUs/ChooseUs';
import Achievements from '../count/Achievements';

const Home = () => {
  return (
    <>
      <Hero />
      <Achievements />
      <BusinessUnit />
      <ChooseUs />
    </>
  );
};

export default Home;
