import React from 'react';
import organisation from '../../assets/organisation.jpg'
import company from '../../assets/company.png'
import process from '../../assets/processe.jpg'
import ang from '../../assets/ANG.jpg'
import bau from '../../assets/BAU.jpg'
import bol from '../../assets/BOL.jpg'
import ger from '../../assets/GER.jpg'
import kle from '../../assets/KLE_.jpg'
import pet from '../../assets/PET.jpg'
import rs from '../../assets/RS.jpg'
import son from '../../assets/SON.jpg'
import ser from '../../assets/Serin.jpg'
import history from '../../assets/history.jpg'
const data = [
    { imageLink: ang,
      name: "Dominik Angst",
      title: "Managing Director - Senior Consultant"
     },
    { imageLink: bau,
      name: "Roland Baumann",
      title: "Senior Consultant"}, 
    { imageLink: bol,
      name: "Roland Bolliger",
      title: "Senior Consultant" },
    { imageLink: ger,
      name: "Raphaël Gerth",
      title: "DCS / Consultant " },
    { imageLink: kle,
      name: "Christoph Kleiner",
      title: "Head of DCS" },
    { imageLink: pet,
      name: "Nicole Peter",
      title: "Assistant" },
    { imageLink: rs,
      name: "Rudolf Schneeberger",
      title: "Senior Consultant" },
    { imageLink: son,
      name: "Peter Sonnenfeld",
      title: "Senior Consultant" },
      { imageLink: ser,
        name: "Serin Sfar Chaabane",
        title: "DCS / Praktikantin " },
  ];
import { useTranslation } from "react-i18next";


const Company = () => {
    return (
                                          
     <div className='container col-span-5 pb-10'>
     <h1 className='pt-20 text-3xl font-bold text-left '>Company</h1>
     <div className='grid xl:grid-cols-2 gap-8 place-items-center py-20'>
     <div className=' border-[3px] border-solid border-gray-200 shadow-sm rounded-lg '>
     <img className='p-4' src ={company} alt=""/>
     </div>
     <div className='mb:pl-12'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>We take pride in delivering <br /> <span className='text-secondary font-normal'>high-values</span></div>
            <p>
              Our specialty is the integration of the geospatial component in the information system or information management of
              an administration or a company. Thereby we are taking into account organisational, economical, and technical aspects.

              The main focus is on the business areas: Spatial Data Infrastructures (SDI),
              transportation/traffic/supply and information management in the aviation sector (AIM).
            </p>
     </div>
      </div>
      
      <div>
      <h2 className=' pt-5 text-3xl font-bold text-left'>Team</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-20'>
       
        {data.map(({ imageLink, name, title }, index) => (
        <div key={index} className="group relative items-center justify-center overflow-hidden cursor pointer rounded-lg shadow-lg  transition duration-300 ease-in-out">
          <img src={imageLink} alt="" className="rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center  bg-gradient-to-t opacity-0 from-gray-900 to-transparent group-hover:opacity-100 transition duration-300 ease-in-out">
            <div className='absolute bottom-0 left-0 right-0 p-4'>
            <h3 className="text-white text-lg font-semibold pb-2">{name}</h3>
            <h6 className='text-white font-semibold'>{title}</h6>
            </div>
          </div>

        </div>
         ))}
      </div>



    </div>    
     <h1 className='pt-20 text-3xl font-bold text-left '>History</h1>
     <div className='grid xl:grid-cols-2 gap-8 place-items-center py-20'>
     <div className='mb:pl-12'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>Abstract of <br /> <span className='text-secondary font-normal'>the history of the company</span></div>
            <p>
              1990, foundation of the "ITV AG - CAD für Ingeniertechnik und Vermessung" by the consortium of companies Basler & Hofmann, Balzari and Schudel, CAD Rechenzentrum, and Swissair Photo + Vermessung
              The project "DfA" of the Swiss Federal Railways (SBB) shaping the early years of ITV and initiated in 1991, SBB to be the fifth shareholder of ITV
              The general manager and his project managers expand the field of activities next to the business field "solutions", in consulting and international projects
              To give a better expression of our activities the company changed its name to ITV Geomatik AG
              Since 2002, the ITV Geomatik AG is majority-owned by the management
              Since mid-2013, the ITV occurs under the name "ITV Consult AG"
              Rudolf Schneeberger, managing director for many years, hands over the management to Dominik Angst on 01.01.2019 
            </p>
     </div>
          <div className=' border-[3px] border-solid border-gray-200 shadow-sm rounded-lg '>
     <img className='p-4' src ={history} alt=""/>
     </div>
      </div>
    </div>
    );
};

export default Company;

//Images id: 2538348923 company//
//Image id: 1810624384 history//