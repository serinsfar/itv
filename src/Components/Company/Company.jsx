import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

import company from '../../assets/company.jpg';
import historyImg from '../../assets/history.jpg';
import check from '../../assets/check.png';

import FourPartPageTemplate from '../Template/Services_Template';

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

  return (
    <>
      {/* INTRO SECTION — TEMPLATE */}
      <FourPartPageTemplate
        pageTitle={t('Company')}
        hero={{
          imageSrc: company,
          imageAlt: t('Company'),
          title: t('We Take Pride in Delivering'),
          subtitle: t('High-Values'),
          body: (
            <ul className="list-disc pl-5 space-y-3">
              <li>
                {t(
                  'Our specialty is the integration of the geospatial component in the information system or information management of an administration or a company. Thereby we are taking into account organisational, economical, and technical aspects.'
                )}
              </li>
              <li>
                {t(
                  'The main focus is on the business areas: Spatial Data Infrastructures (SDI), transportation/traffic/supply and information management in the aviation sector (AIM).'
                )}
              </li>
            </ul>
          ),
        }}
      />

      {/* TEAM SECTION — CUSTOM */}
      <div className="container pb-20">
        <h2 className="pt-10 text-3xl font-bold text-left">
          {t('Team')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">

          {loading && (
            <div className="col-span-full">
              <LoadingIndicator size="medium" text={t('Loading team...')} />
            </div>
          )}

          {!loading && teamData.length === 0 && (
            <div className="col-span-full text-center text-lg">
              {t('No team members available')}
            </div>
          )}

          {!loading && teamData.length > 0 &&
            teamData.map(({ id, imageUrl, name, title }) => (
              <div
                key={id}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={imageUrl || '/placeholder-user.jpg'}
                  alt={name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {name}
                    </h3>
                    <p className="text-white font-medium">
                      {t(title)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>

      {/* HISTORY SECTION — CUSTOM */}
      <div className="container pb-20">
        <h2 className="pt-10 text-3xl font-bold text-left">
          {t('History')}
        </h2>

        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div>
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-4">
              {t('Abstract of')}
              <br />
              <span className="text-secondary font-normal">
                {t('the History of the Company')}
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>{t('1990, foundation of the "ITV AG - CAD für Ingeniertechnik und Vermessung" by the consortium of companies Basler & Hofmann, Balzari and Schudel, CAD Rechenzentrum, and Swissair Photo + Vermessung')}</li>
              <li>{t('The project "DfA" of the Swiss Federal Railways (SBB) shaping the early years of ITV and initiated in 1991, SBB to be the fifth shareholder of ITV')}</li>
              <li>{t('The general manager and his project managers expand the field of activities next to the business field "solutions", in consulting and international projects')}</li>
              <li>{t('To give a better expression of our activities the company changed its name to ITV Geomatik AG')}</li>
              <li>{t('Since 2002, the ITV Geomatik AG is majority-owned by the management')}</li>
              <li>{t('Since mid-2013, the ITV occurs under the name "ITV Consult AG"')}</li>
              <li>{t('Rudolf Schneeberger, managing director for many years, hands over the management to Dominik Angst on 01.01.2019.')}</li>
            </ul>
          </div>

          <div className="border-[5px] border-gray-200 shadow-sm rounded-xl">
            <img
              src={historyImg}
              alt={t('Company history')}
              className="rounded-lg w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
