import React from 'react';
import {BrowserRouter ,Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/title';
import HomeServices from './Components/homeServices/homeServices';
import BusinessUnit from './Components/BusinessUnit';
import ChooseUs from './Components/chooseUs/ChooseUs';
import FooterF from './Components/footer/FooterF';
import Count from './Components/count/AchievementCounter';
import Achievements from './Components/count/Achievements';
import Data from './Components/Services/Data';

const App = () => {
  return (
    <main className='overflow-x-hidden bg wihte text-primary'>
      <Navbar />
      <Hero />
      <Achievements />
      <BusinessUnit />
      <ChooseUs />
      <FooterF />
    </main>
  );
};

export default App;
