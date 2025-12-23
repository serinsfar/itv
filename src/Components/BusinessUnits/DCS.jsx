import React from 'react';
import { FaCloudUploadAlt, FaMapMarkedAlt, FaShieldAlt, FaTools } from 'react-icons/fa';
import check from '../../assets/check.png';
import dcslogo from '../../assets/dcsLogo.png';
import Business from '../BusinessUnits/Business_units';
import { useTranslation } from 'react-i18next';
import FourPartPageTemplate from '../Template/Services_Template';

const DCS = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaCloudUploadAlt className="text-secondary text-2xl" />,
      title: t('Digital Submission'),
      description: t(
        'Seamless digital delivery and handling of aeronautical data, including obstacles.'
      ),
    },
    {
      icon: <FaMapMarkedAlt className="text-secondary text-2xl" />,
      title: t('Obstacle Assessment'),
      description: t(
        'Automated evaluation to determine if an object constitutes an air navigation obstacle.'
      ),
    },
    {
      icon: <FaShieldAlt className="text-secondary text-2xl" />,
      title: t('Regulatory Compliance'),
      description: t(
        'Ensures adherence to FOCA and international regulations registration and approval of aeronautical data.'
      ),
    },
    {
      icon: <FaTools className="text-secondary text-2xl" />,
      title: t('User-Friendly Portal'),
      description: t(
        'Intuitive interface for registering and managing obstacle data efficiently.'
      ),
    },
  ];

  const benefits = [
    {
      title: t('Streamlined process'),
      description: t(
        'Streamlined process for registration and approval of aeronautical data, including obstacles.'
      ),
    },
    {
      title: t('Data accuracy'),
      description: t('Enhanced data accuracy and consistency.'),
    },
    {
      title: t('Aviation safety'),
      description: t(
        'Improved aviation safety through up-to-date aeronautical information.'
      ),
    },
    {
      title: t('Lower administrative effort'),
      description: t(
        'Reduced administrative burden for stakeholders.'
      ),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Business />}
      pageTitle={t('Data Collection Service (DCS)')}
      hero={{
        imageSrc: dcslogo,
        imageAlt: t('Data Collection Service'),
        title: t('Modernising Aeronautical Data Management'),
        subtitle:<a
                href="https://obstacleportal.ch/#/changes/1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:shadow-sm hover:bg-light rounded-md px-2 py-1"
              >{t('with DCS')} </a>,
        body: (
          <p>
            {t(
              'The Data Collection Service (DCS) is a digital platform operated by ITV Consult AG on behalf of the Swiss Federal Office of Civil Aviation (FOCA). It facilitates the efficient submission and management of aeronautical data, particularly concerning air navigation obstacles. By leveraging modern technology, DCS enhances data quality and ensures compliance with aviation safety regulations.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('Key Features')}
      features={features}
      featuresCols="md:grid-cols-2"
      benefitsTitle={t('Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
    />
  );
};

export default DCS;
