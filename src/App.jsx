import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Data from './Components/Services/Data';
import Infrastructure from './Components/Services/Infrastructure';
import People from './Components/Services/People';
import Process from './Components/Services/Process';
import Organization from './Components/Services/Organization';
import SDI from './Components/BusinessUnits/SDI';
import AIM from './Components/BusinessUnits/AIM';
import DCS from './Components/BusinessUnits/DCS';
import Company from './Components/Company/Company';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="data" element={<Data />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="people" element={<People />} />
        <Route path="process" element={<Process />} />
        <Route path="organization" element={<Organization />} />
        <Route path="sdi" element={<SDI />} />
        <Route path="aim" element={<AIM />} />
        <Route path="dcs" element={<DCS />} />
        <Route path="company" element={<Company />} />
      </Route>
    </Routes>
  );
};

export default App;
