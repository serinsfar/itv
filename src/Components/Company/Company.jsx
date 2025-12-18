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
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";


const Company = () => {
  const { t } = useTranslation();
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
    const fetchTeams = async () => {
        try {
            setLoading(true);

            const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/team`;
            const response = await axios.get(apiUrl);

            // Transform API response to match component's data structure
            const transformedData = response.data.map(item => ({
                id: item.id,
                name: item.name,
                title: item.title,
                imageUrl: item.image_url,
            }));

            setTeamData(transformedData);
        } catch (error) {
            console.error('Error fetching team:', error);
            setTeamData([]);
        } finally {
            setLoading(false);
        }
    };

        fetchTeams();
      }, []);
      if (loading) {
          return (
              <div className="bg-light pt-12 pb-3">
                  <h1 className="container text-3xl font-bold mb-16">Team</h1>
                  <div className="container lg:max-w-[1324px] mx-auto md:max-w-[700px]">
                      <div className="flex items-center justify-center mb-10 px-2 w-full">
                          <p className="text-lg">Loading team...</p>
                      </div>
                  </div>
              </div>
          );
      }

    return (
                        
     <div className='container col-span-5 pb-20'>
     <h1 className='pt-20 text-3xl font-bold text-left '>{t('Company')}</h1>
     <div className='grid xl:grid-cols-2 gap-5 place-items-center py-10'>
        <div className='border-[3px] border-solid border-gray-200 shadow-sm rounded-lg '>
     <img className='w-[400px] p-2' src ={company} alt=""/>
     </div>
     <div className='mb:pl-12'>
        <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>{t('We Take Pride in Delivering')} <br /> <span className='text-secondary font-normal'>{t('High-Values')}</span></div>
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
            <h2 className="pt-5 text-3xl font-bold text-left">
              {t('Team')}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">

              {loading && (
                <div className="col-span-full text-center text-lg">
                  Loading team...
                </div>
              )}

              {!loading && teamData.length === 0 && (
                <div className="col-span-full text-center text-lg">
                  No team members available
                </div>
              )}

              {!loading && teamData.length > 0 &&
                teamData.map(({ id, imageUrl, name, title }) => (
                  <div
                    key={id}
                    className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg shadow-lg transition duration-300 ease-in-out"
                  >
                    <img
                      src={imageUrl || '/placeholder-user.jpg'}
                      alt={name}
                      className="rounded-lg w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white text-lg font-semibold pb-2">
                          {name}
                        </h3>
                        <h6 className="text-white font-semibold">
                          {t(title)}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>
  
     <h1 className='pt-20 text-3xl font-bold text-left '>{t('History')}</h1>
     <div className='grid xl:grid-cols-2 gap-8 place-items-center py-10'>
     <div className='mb:pl-12'>
        <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>{t('Abstract of')} <br /> <span className='text-secondary font-normal'>{t('the History of the Company')}</span></div>
        <p>
        <ul className="list-disc pl-5 space-y-3">
         <li>
          {t('1990, foundation of the "ITV AG - CAD für Ingeniertechnik und Vermessung" by the consortium of companies Basler & Hofmann, Balzari and Schudel, CAD Rechenzentrum, and Swissair Photo + Vermessung')}
         </li>
        <li>
          {t('The project "DfA" of the Swiss Federal Railways (SBB) shaping the early years of ITV and initiated in 1991, SBB to be the fifth shareholder of ITV')}
          </li>
        <li>
          {t('The general manager and his project managers expand the field of activities next to the business field "solutions", in consulting and international projects')}
          </li>
        <li>
          {t('To give a better expression of our activities the company changed its name to ITV Geomatik AG')}
          </li>
        <li>
          {t('Since 2002, the ITV Geomatik AG is majority-owned by the management')}
          </li>
        <li>
          {t('Since mid-2013, the ITV occurs under the name "ITV Consult AG"')}
          </li>
        <li>
          {t('Rudolf Schneeberger, managing director for many years, hands over the management to Dominik Angst on 01.01.2019.')}
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

