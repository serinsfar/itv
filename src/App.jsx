import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Data from './Components/Services/Data/Data';
import Company from './Components/Company/Company';
import Metadata from './Components/Services/Data/Metadata';
import Data_Organisation from './Components/Services/Data/Data_Organisation';
import Infrastructure from './Components/Services/Infrastructure/Infra';
import System_Arch from './Components/Services/Infrastructure/System_Arch';
import Data_Modeling from './Components/Services/Data/Data_Modeling';
import Specification from './Components/Services/Infrastructure/Specification';
import Procurment_System from './Components/Services/Infrastructure/Procurment_System'
import Test_Management from './Components/Services/Infrastructure/Test_Management'
import Awareness from './Components/Services/People/Awareness';
import Training from './Components/Services/People/Training';
import Peoplee from './Components/Services/People/Peoplee';
import Processes from './Components/Services/Processes/Processes';
import Process_Design from './Components/Services/Processes/Process_Design'
import Process_Optimisation from './Components/Services/Processes/Process_Optimisation'
import Process_Documentation from './Components/Services/Processes/Process_Documentation'
import Organisation from './Components/Services/Organisation/Organisation';
import Organisational_Development from './Components/Services/Organisation/Organisational_Development';
import Strategy from './Components/Services/Organisation/Strategy';
import AIM from './Components/BusinessUnits/AIM';
import SDI from './Components/BusinessUnits/SDI';
import DCS from './Components/BusinessUnits/DCS';
import References from './Components/References/References';
import Contact_Us from './Components/ContactUs/Contact_Us';
import Pop from './Components/alert/pop';


const App = () => {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Infrastructure" element={<Infrastructure />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Metadata" element={<Metadata />} />
        <Route path="/Data_organisation" element={<Data_Organisation />} />
        <Route path="/System_arch" element={<System_Arch />} />
        <Route path="/Data_modeling" element={<Data_Modeling />} />
        <Route path="/Specification" element={<Specification />} />
        <Route path="/Procurment_System" element={<Procurment_System />} />
        <Route path="/Test_Management" element={<Test_Management/>} />
        <Route path="/Awareness" element={<Awareness/>} />
        <Route path="/Training" element={<Training/>} />
        <Route path="/People" element={<Peoplee/>} />
        <Route path="/Process" element={<Processes/>} />
        <Route path="/Process_Documentation" element={<Process_Documentation/>} />
        <Route path="/Process_Design" element={<Process_Design/>} />
        <Route path="/Process_Optimisation" element={<Process_Optimisation/>} />
        <Route path="/Organisation" element={<Organisation/>} />
        <Route path="/Organisational_Development" element={<Organisational_Development/>} />
        <Route path="/Strategy" element={<Strategy/>} />
        <Route path="/AIM" element={<AIM />} />
        <Route path="/SDI" element={<SDI />} />
        <Route path="/DCS" element={<DCS/>} />
        <Route path="/References" element={<References/>} />
        <Route path="/Contact_Us" element={<Contact_Us/>} />
        <Route path="/Pop" element={<Pop/>} />
      </Route>
    </Routes>
  );
};

export default App;
