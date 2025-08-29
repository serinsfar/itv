import React from 'react';
import { FaProjectDiagram, FaRegListAlt, FaSitemap, FaFileSignature, FaServer, FaClipboardCheck, FaCogs } from 'react-icons/fa';
import check from '../../assets/check.png';
import Business from '../BusinessUnits/Business_units';
import areo from '../../assets/aero-top.jpg';
import FourPartPageTemplate from '../Template/Services_Template';
import { TbShoppingCartCog } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AIM() {
  const { t } = useTranslation();

  // --- Features (AIM services) ---
  const features = [
    {
      icon: <FaProjectDiagram className="text-secondary text-2xl" />,
      title: t('AIS→AIM roadmap'),
      description: t('Develop a roadmap for the transition from AIS to AIM.'),
    },
    {
      icon: <FaRegListAlt className="text-secondary text-2xl" />,
      title: t('AIM project plan'),
      description: t('Develop a project plan for the implementation of AIM.'),
    },
    {
      icon: <FaSitemap className="text-secondary text-2xl" />,
      title: t('Organisation design'),
      description: t('Design or redesign the AIS organisation to operate as AIM.'),
    },
    {
      icon: <FaFileSignature className="text-secondary text-2xl" />,
      title: t('Procedures & processes'),
      description: t('Define new procedures and processes for data origination, management and provision.'),
    },
    {
      icon: <FaServer className="text-secondary text-2xl" />,
      title: t('Service & technology'),
      description: t('Identify the required services and information technology needed for AIM.'),
    },
    {
      icon: <FaClipboardCheck className="text-secondary text-2xl" />,
      title: t('Use cases'),
      description: t('Prepare and validate the use cases for the AIM service.'),
    },
    {
      icon: <FaCogs className="text-secondary text-2xl" />,
      title: t('Implementation management'),
      description: t('Manage the implementation of the AIM service into operations.'),
    },
        {
      icon: <TbShoppingCartCog className="text-secondary text-2xl" />,
      title: t('Procurement and Specification'),
      description: t(
        'ITV supports public tenders with expertise in procurement, evaluation, and legal compliance - delivering tender docs, evaluations, and contract support as needed.'
      ),
    },
  ];

  // --- Benefits (title + description) ---
  const benefits = [
    {
      title: t('All change aspects addressed'),
      description: t('Organisation, procedures, processes and technology handled holistically for the AIS to AIM transition.'),
    },
    {
      title: t('Systematic implementation'),
      description: t('A structured, stage-gated approach to achieving AIM operations.'),
    },
    {
      title: t('Faster compliance'),
      description: t('Shorten the journey to meet ICAO Annex 15 and PANS-AIM requirements.'),
    },
    {
      title: t('Reduced risk'),
      description: t('Lower implementation risks with experienced guidance and proven methods.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Business />}
      pageTitle={t('Aeronautical Information Management')}
      hero={{
        imageSrc: areo,
        imageAlt: t('Aeronautical Information Management'),
        title: t('Your Partner for'),
        subtitle: t('Aeronautical Information Evolution'),
        body: (
          <p>
            {t(
              'The revision to ICAO Annex 15 and the introduction of PANS-AIM (Doc 10066) fundamentally changed how aeronautical data is originated, managed and provided. We guide you from document-centric AIS to data-centric AIM — and toward service-oriented SWIM — with a clear roadmap, fit-for-purpose organisation, and operational AIM services.'
              
            )}

          </p>
        ),
      }}
      featuresTitle={t('Our AIM Implementation Services')}
      features={features}
      featuresCols="grid-cols-2"
      benefitsTitle={t('Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      servicesTitle={t('Implementation Support')}
      servicesIntro={
        <>
          {t(
            'Our consultants have hands-on AIS to AIM experience with data originators, regulators and service providers. They have contributed to ICAO Annex 15 and PANS-AIM and are active in ICAO/EUROCONTROL working arrangements as well as CANSO and Global AIM events.'
          )}
          <span className="text-primary font-normal block mt-6">
            <a
              href="https://itv.aero/assets/cms/uploads/files/AIM_Implementation_Support_Flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:shadow-sm hover:bg-light rounded-md p-2"
            >
              {t('More about AIM Implementation ...')}
            </a>
          </span>
        </>
      }

    />
    
  );
}

export default AIM;
