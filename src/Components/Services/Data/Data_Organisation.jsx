import React from 'react';
import { useTranslation } from 'react-i18next';

import Data from '../../Services/Data/Data';
import dataorg from '../../../assets/dataOrganisation.jpg';
import check from '../../../assets/check.png';
import { FaUsers, FaSitemap, FaProjectDiagram, FaCogs } from 'react-icons/fa';

import FourPartPageTemplate from '../../Template/Services_Template';

function Data_Organisation() {
  const { t } = useTranslation(); // using a single file with namespaced keys like "dataOrg.*"

  // Build arrays on each render (cheap + always correct on language change/refresh)
  const organisationFeatures = [
    {
      icon: <FaUsers className="text-secondary text-2xl" />,
      title: t('dataOrg.features.roles.title', 'Roles & Governance'),
      description: t('dataOrg.features.roles.desc', 'Define responsibilities, ownership and decision paths across units.'),
    },
    {
      icon: <FaSitemap className="text-secondary text-2xl" />,
      title: t('dataOrg.features.flow.title', 'Data Flow Blueprint'),
      description: t('dataOrg.features.flow.desc', 'Design streamlined data flows to avoid duplication and friction.'),
    },
    {
      icon: <FaProjectDiagram className="text-secondary text-2xl" />,
      title: t('dataOrg.features.integration.title', 'Integration & Interfaces'),
      description: t('dataOrg.features.integration.desc', 'Specify how systems exchange data reliably and consistently.'),
    },
    {
      icon: <FaCogs className="text-secondary text-2xl" />,
      title: t('dataOrg.features.ops.title', 'Operations & Ownership'),
      description: t('dataOrg.features.ops.desc', 'Clarify lifecycle, stewardship and publishing from a single source.'),
    },
  ];

  const benefits = [
    { title: t('dataOrg.benefits.innovation.title', 'Innovation'), description: t('dataOrg.benefits.innovation.desc', 'Foster creative thinking and explore new ideas.') },
    { title: t('dataOrg.benefits.collab.title', 'Team Collaboration'), description: t('dataOrg.benefits.collab.desc', 'Empower your team with better communication tools.') },
    { title: t('dataOrg.benefits.dataDriven.title', 'Data-Driven Decisions'), description: t('dataOrg.benefits.dataDriven.desc', 'Leverage analytics to make better strategic choices.') },
    { title: t('dataOrg.benefits.efficiency.title', 'Efficiency'), description: t('dataOrg.benefits.efficiency.desc', 'Automate routine tasks and save valuable time.') },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Data />}
      pageTitle={t('dataOrg.pageTitle', 'Data Organisation')}
      hero={{
        imageSrc: dataorg,
        imageClassName: 'rounded-md max-w-[450px] max-h-[300px]',
        imageAlt: t('dataOrg.hero.alt', 'Data organisation'),
        title: t('dataOrg.hero.title', 'Organization-wide'),
        subtitle: t('dataOrg.hero.subtitle', 'Geodata Management'),
        body: (
          <p className="text-gray-700">
            {t(
              'dataOrg.hero.body',
              'Today, not only specialists use geodata, but different business areas in an organisation originate, process, publish and use geodata. The definition of an organisation-wide data organisation is needed in a way, that the geodata is not bought several times, the data storage is built up easily and efficiently, the data transfer between business areas is without frictions and data will be published from one hand only.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('dataOrg.features.title', 'Data Governance & Process Areas')}
      features={organisationFeatures}
      featuresCols="md:grid-cols-2 lg:grid-cols-2"
      benefitsTitle={t('dataOrg.benefits.title', 'Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      servicesTitle={t('dataOrg.services.title', 'Our Services')}
      servicesIntro={t(
        'dataOrg.services.intro',
        'We help you design an organisation-wide operating model for geodata: clarify roles and responsibilities, define governance, and select the right tools and interfaces. From architecture to change management, we align processes and systems so data flows without friction across your business.'
      )}
      // servicesLeadText={t('dataOrg.services.lead', 'We offer the following services:')}
      // servicesList={[ t('dataOrg.services.list.0', '...'), t('dataOrg.services.list.1', '...') ]}
    />
  );
}

export default Data_Organisation;
