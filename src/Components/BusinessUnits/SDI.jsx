import React from 'react';
import { FaSearch, FaLightbulb, FaUsers, FaCogs } from 'react-icons/fa';
import check from '../../assets/check.png';
import Business from '../BusinessUnits/Business_units';
import geo from '../../assets/geo-top.jpg';
import FourPartPageTemplate from '../Template/Services_Template';
import { useTranslation } from 'react-i18next';

function SDI() {
  const { t } = useTranslation();

  // Features (project phases)
  const projectPhases = [
    {
      icon: <FaSearch className="text-secondary text-2xl" />,
      title: t('Analysis'),
      description: t(
        'We analyse your organisation with an external, neutral point of view — identifying strengths, weaknesses and optimisation potential, considering organisational, technical and economic aspects.'
      ),
    },
    {
      icon: <FaLightbulb className="text-secondary text-2xl" />,
      title: t('Conception'),
      description: t(
        'Based on our findings, we collaboratively develop a concept that provides a clear direction for your organisation’s development. Involvement from you and your team is essential for acceptance and success.'
      ),
    },
    {
      icon: <FaUsers className="text-secondary text-2xl" />,
      title: t('Implementation'),
      description: t(
        'We guide and support your team throughout the implementation — acting as coaches or leading figures — to ensure real change is embedded within your organisation.'
      ),
    },
    {
      icon: <FaCogs className="text-secondary text-2xl" />,
      title: t('Strategic Development'),
      description: t(
        'Before organisational change, we recommend aligning on a common strategy to clarify the focus and direction of transformation across the entire organisation.'
      ),
    },
  ];

  // Benefits (short title + description)
  const spatialBenefits = [
    {
      title: t('Future-ready organisation'),
      description: t('Your organisation is prepared for the challenges of the future.'),
    },
    {
      title: t('Learning organisation'),
      description: t('Your organisation becomes a learning organisation, embracing change.'),
    },
    {
      title: t('Efficient execution'),
      description: t('Your organisation executes tasks more efficiently and effectively.'),
    },
    {
      title: t('Cost & friction reduction'),
      description: t('You reduce costs and internal frictions.'),
    },
    {
      title: t('Decades of experience'),
      description: t('You benefit from our decades of experience in spatial information management and GIS consulting.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Business />}
      pageTitle={t('Spatial Data Infrastructure')}
      hero={{
        imageSrc: geo,
        imageAlt: t('Spatial Management'),
        title: t('Your Partner for'),
        subtitle: t('Spatial Information Management'),
        body: (
          <p>
            {t(
              'The core business of ITV Consult AG is consulting and delivering solutions in the field of Spatial Information Management. We specialise in integrating spatially related components into the broader information management of administrations or companies — always considering organisational, economic, and technical dimensions.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('Our Project Approach')}
      features={projectPhases}
      featuresCols="md:grid-cols-2 lg:grid-cols-2"
      benefitsTitle={t('Your Benefits')}
      benefits={spatialBenefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      // No services section for this page
    />
  );
}

export default SDI;
