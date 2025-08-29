import React from 'react';
import { FaCloudUploadAlt, FaMapMarkedAlt, FaShieldAlt, FaTools } from 'react-icons/fa';
import check from '../../assets/check.png';
import dcslogo from '../../assets/dcsLogo.png';
import Business from '../BusinessUnits/Business_units';
import { useTranslation } from 'react-i18next';

function DCS() {
  const { t } = useTranslation();

  // Build arrays inside the component so translations re-render on language change
  const dcsFeatures = [
    {
      icon: <FaCloudUploadAlt className="text-secondary text-2xl" />,
      title: t('Digital Submission'),
      description: t('Seamless digital delivery and handling of aeronautical data, including obstacles.'),
    },
    {
      icon: <FaMapMarkedAlt className="text-secondary text-2xl" />,
      title: t('Obstacle Assessment'),
      description: t('Automated evaluation to determine if an object constitutes an air navigation obstacle.'),
    },
    {
      icon: <FaShieldAlt className="text-secondary text-2xl" />,
      title: t('Regulatory Compliance'),
      description: t('Ensures adherence to FOCA regulations for obstacle registration and approval.'),
    },
    {
      icon: <FaTools className="text-secondary text-2xl" />,
      title: t('User-Friendly Portal'),
      description: t('Intuitive interface for registering and managing obstacle data efficiently.'),
    },
  ];

  const dcsBenefits = [
    {
      title: t('Streamlined process'),
      description: t('Streamlined process for obstacle registration and approval.'),
    },
    {
      title: t('Data accuracy'),
      description: t('Enhanced data accuracy and consistency.'),
    },
    {
      title: t('Aviation safety'),
      description: t('Improved aviation safety through up-to-date aeronautical information.'),
    },
    {
      title: t('Lower administrative effort'),
      description: t('Reduced administrative burden for stakeholders.'),
    },
  ];

  return (
    <div className="container row-start-2 row-span-5 mb-20">
      <Business />
      <h1 className="pt-16 pb-10 text-3xl font-bold text-left">
        {t('Data Collection Service (DCS)')}
      </h1>

      <div className="grid xl:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
          <a href="https://obstacleportal.ch/#/changes/1" target="_blank" rel="noopener noreferrer">
            <img className="p-4" src={dcslogo} alt={t('Data Collection Service')} />
          </a>
        </div>
        <div className="mb:pl-12">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
            {t('Modernising Aeronautical Data Management')}
            <br />
            <span className="text-secondary font-normal">
              {t('with')}{' '}
              <a
                href="https://obstacleportal.ch/#/changes/1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:shadow-sm hover:bg-light rounded-md"
              >
                {t('DCS')}
              </a>
            </span>
          </div>
          <p>
            {t(
              'The Data Collection Service (DCS) is a digital platform operated by ITV Consult AG on behalf of the Swiss Federal Office of Civil Aviation (FOCA). It facilitates the efficient submission and management of aeronautical data, particularly concerning air navigation obstacles. By leveraging modern technology, DCS enhances data quality and ensures compliance with aviation safety regulations.'
            )}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold pt-16 pb-10 text-left">{t('Key Features')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dcsFeatures.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start"
          >
            <div className="mt-1">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold pt-16 mb-10 text-left">{t('Your Benefits')}</h2>
      <div className="grid lg:grid-cols-2 gap-5 lg:mb-0">
        {dcsBenefits.map((benefit, i) => (
          <div
            key={i}
            className="p-5 rounded-xl shadow-md bg-light border-l-4 flex flex-auto items-start gap-4 max-w-[655px]"
          >
            <img src={check} alt="check" className="w-6 h-6 mb-1" />
            <div className="w-full">
              <p className="text-gray-900 font-semibold">{benefit.title}</p>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DCS;
