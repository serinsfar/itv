import React from 'react';
import organisation from '../../assets/organisation.jpg'
import company from '../../assets/company.jpg'
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
    { imageLink: rs,
      name: "Rudolf Schneeberger",
      title: "Senior Consultant" },
    { imageLink: son,
      name: "Peter Sonnenfeld",
      title: "Senior Consultant" },
    { imageLink: kle,
      name: "Christoph Kleiner",
      title: "Head of DCS" },
    { imageLink: bau,
      name: "Roland Baumann",
      title: "Senior Consultant"}, 
    { imageLink: pet,
      name: "Nicole Peter",
      title: "Assistant" },
    { imageLink: ger,
      name: "Raphaël Gerth",
      title: "DCS / Consultant " },
    { imageLink: ser,
        name: "Serin Sfar Chaabane",
        title: "DCS / Junior Consultant" },
  ];
import { useTranslation } from "react-i18next";


const Company = () => {
  const { t } = useTranslation();

    return (
                        
     <div className='container col-span-5 pb-20'>
     <h1 className='pt-20 text-3xl font-bold text-left '>{t('Company')}</h1>
     <div className='grid xl:grid-cols-2 gap-5 place-items-center py-10'>
        <div className='border-[3px] border-solid border-gray-200 shadow-sm rounded-lg '>
     <img className='w-[400px] p-2' src ={company} alt=""/>
     </div>
     <div className='mb:pl-12'>
        <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>{t('We Take Pride in Delivering')} <br /> <span className='text-secondary font-normal'>{t('High-values')}</span></div>
        <ul className="list-disc pl-5 space-x-0 space-y-3">
          <li>
          {t('Our specialty is the integration of the geospatial component in the information system or information management of an administration or a company. Thereby we are taking into account organisational, economical, and technical aspects.')}
          </li>
          <li>
          {t('The main focus is on the business areas: Spatial Data Infrastructures (SDI), transportation/traffic/supply and information management in the aviation sector (AIM).')}
          </li>
        </ul>
     </div>
      </div>
      
      <div>
      <h2 className=' pt-5 text-3xl font-bold text-left'>{t('Team')}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10'>
       
      {data.map(({ imageLink, name, title }, index) => (
      <div key={index} className="group relative items-center justify-center overflow-hidden cursor pointer rounded-lg shadow-lg  transition duration-300 ease-in-out">
        <img src={imageLink} alt="" className="rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center  bg-gradient-to-t opacity-0 from-gray-900 to-transparent group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className='absolute bottom-0 left-0 right-0 p-4'>
        <h3 className="text-white text-lg font-semibold pb-2">{name}</h3>
        <h6 className='text-white font-semibold'>{t(title)}</h6>
        </div>
        </div>

      </div>
       ))}
      </div>



    </div>    
     <h1 className='pt-20 text-3xl font-bold text-left '>{t('History')}</h1>
     <div className='grid xl:grid-cols-2 gap-8 place-items-center py-10'>
     <div className='mb:pl-12'>
        <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>{t('Abstract of')} <br /> <span className='text-secondary font-normal'>{t('the History of the Company')}</span></div>
        <p>
        <ul className="list-disc pl-5 space-y-3">
         <li>
          {t('1990 Gründung der ITV AG CAD für Ingenieurtechnik und Vermessung durch das Konsortium der Unternehmen Basler & Hofmann, Balzari und Schudel, CAD Rechenzentrum, und Swissair Photo + Vermessung (heute BSF Swissphoto AG).')}
         </li>
        <li>
          {t('Das DfA Projekt der SBB prägt die ersten Jahre der ITV und veranlasst 1991 die SBB fünfter Aktionär der ITV zu werden.')}
          </li>
        <li>
          {t('Der Geschäftsführer und seine Projektleiter bauen neben dem Bereich Lösungen auch die Beratung und internationale Projekte aus.')}
          </li>
        <li>
          {t('Um der Tätigkeit besser Ausdruck zu vermitteln wird das Unternehmen in die ITV Geomatik AG umfirmiert.')}
          </li>
        <li>
          {t('Seit 2002 ist die ITV Geomatik AG im Mehrheitsbesitz des Managements.')}
          </li>
        <li>
          {t('Seit Mitte 2013 tritt die ITV unter dem Namen ITV Consult AG auf.')}
          </li>
        <li>
          {t('Der langjährige Geschäftsführer Rudolf Schneeberger übergibt die Geschäftsleitung per 01.01.2019 an Dominik Angst, der seit 2010 als Senior Consultant bei der ITV Consult AG tätig ist.')}
        </li>
        </ul>
        </p>
     </div>
        <div className='border-[5px] border-solid border-gray-200 shadow-sm rounded-xl '>
     <img className='rounded-lg w-[500px]' src ={history} alt=""/>
     </div>
      </div>
    </div>
    );
};

export default Company;

