import React from 'react';
import { useTranslation } from 'react-i18next';

import Data from '../../Services/Data/Data';
import geodata from '../../../assets/geodata.jpg';
import check from '../../../assets/check.png';

import {
  FaSearch,
  FaSitemap,
  FaProjectDiagram,
  FaFileSignature,
  FaBullseye,
  FaUserTie,
  FaPuzzlePiece,
  FaTasks,
} from 'react-icons/fa';

import FourPartPageTemplate from '../../Template/Services_Template';

function Metadata() {
  const { t } = useTranslation(); 

  // Build arrays on each render (cheap + always correct on language change)
  const metadataFeatures = [
    {
      icon: <FaSearch className="text-secondary text-2xl" />,
      title: t('features.requirements.title', 'Requirements & Governance'),
      description: t('features.requirements.desc', 'Define ownership, roles, and lifecycle rules aligned with business goals.'),
    },
    {
      icon: <FaSitemap className="text-secondary text-2xl" />,
      title: t('features.iso.title', 'ISO 19115 Profile & Mapping'),
      description: t('features.iso.desc', 'Map existing fields to ISO 19115 and controlled vocabularies for interoperability.'),
    },
    {
      icon: <FaProjectDiagram className="text-secondary text-2xl" />,
      title: t('features.catalog.title', 'Catalog & Workflows'),
      description: t('features.catalog.desc', 'Select/configure catalog, editors, and harvesters; automate creation and validation.'),
    },
    {
      icon: <FaFileSignature className="text-secondary text-2xl" />,
      title: t('features.quality.title', 'Quality & Publishing'),
      description: t('features.quality.desc', 'Apply validation/completeness checks and publish searchable records to portals/APIs.'),
    },
  ];

  const benefits = [
    {
      icon: <FaBullseye className="text-secondary text-3xl" />,
      title: t('benefits.result.title', 'Result-Focused Support'),
      description: t('benefits.result.desc', 'We work toward measurable outcomes that matter for your organisation.'),
    },
    {
      icon: <FaPuzzlePiece className="text-secondary text-3xl" />,
      title: t('benefits.tailored.title', 'Tailored to Your Needs'),
      description: t('benefits.tailored.desc', 'Our approach is adapted to your specific context, constraints, and goals.'),
    },
    {
      icon: <FaUserTie className="text-secondary text-3xl" />,
      title: t('benefits.independent.title', 'Independent Expertise'),
      description: t('benefits.independent.desc', 'An experienced, neutral team brings an external point of view.'),
    },
    {
      icon: <FaTasks className="text-secondary text-3xl" />,
      title: t('benefits.endtoend.title', 'End-to-End Delivery'),
      description: t('benefits.endtoend.desc', 'From recommendations and action plans to an implemented system — one partner.'),
    },
  ];

  const servicesList = [
    t('services.list.0', 'Analysis of your requirements with regard to metadata.'),
    t('services.list.1', 'Mapping your requirements to ISO 19115:2003.'),
    t('services.list.2', 'Establishment of a concept for your metadata system.'),
    t('services.list.3', 'Specification, tender documentation, and evaluation of the best-fitting metadata system.'),
  ];

  return (
    <FourPartPageTemplate
      prelude={<Data />}
      pageTitle={t('pageTitle', 'Metadata ')}
      hero={{
        imageSrc: geodata,
        imageAlt: t('hero.alt', 'Metadata'),
        title: t('hero.title', 'Smart Geodata Needs'),
        subtitle: t('hero.subtitle1', 'Smart Metadata'),
        body: (
          <p>
            {t(
              'hero.body',
              'Metadata describing your (geo-) data are needed to better administrate, actualise, and document your data and much more. The necessity of metadata is well acknowledged by a wide circle of persons. With the norm 19115:2003 published by the ISO, the guidelines how to deal with metadata for geoinformation is given.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('features.title', 'Metadata & Process Areas')}
      features={metadataFeatures}
      benefitsTitle={t('benefits.title', 'Your Benefits')}
      benefits={benefits}
      checkIconSrc={check}
      servicesTitle={t('services.title', 'Our Services')}
      servicesIntro={t(
        'services.intro',
        'We have defined a significant part of the Swiss Metadata Model and helped establish the corresponding Swiss standard. We have supported many implementations, and this know-how can benefit you.'
      )}
      servicesLeadText={t('services.lead', 'We offer the following services:')}
      servicesList={servicesList}
      featuresCols="md:grid-cols-2 lg:grid-cols-2"
      benefitsCols="md:grid-cols-2"
    />
  );
}

export default Metadata;
