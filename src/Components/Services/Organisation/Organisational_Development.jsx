import React from 'react';
import { FaSearch, FaLightbulb, FaPeopleCarry } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Organisation from './Organisation';
import organisationImg from '../../../assets/organisation.jpg';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';

function Organisational_Development() {
  const { t } = useTranslation();

  // Part 2: Features (approach phases)
  const devPhases = [
    {
      icon: <FaSearch className="text-secondary text-2xl" />,
      title: t('Analysis'),
      description: t(
        'We analyse your organisation from an external perspective, identifying strengths, weaknesses, and opportunities while also considering technical and economic aspects.'
      ),
    },
    {
      icon: <FaLightbulb className="text-secondary text-2xl" />,
      title: t('Conception'),
      description: t(
        'Based on the analysis, we create a concept collaboratively with your team — ensuring ownership, alignment, and broad acceptance across the organisation.'
      ),
    },
    {
      icon: <FaPeopleCarry className="text-secondary text-2xl" />,
      title: t('Implementation'),
      description: t(
        'We accompany you and your staff as coaches or project leaders, guiding the process step-by-step toward a successful transformation.'
      ),
    },
  ];

  // Part 3: Benefits
  const devBenefits = [
    {
      title: t('Future-ready organisation'),
      description: t('Your organisation is prepared for the challenges of the future.'),
    },
    {
      title: t('Learning organisation'),
      description: t('Your organisation becomes a “learning organisation” embracing continuous change.'),
    },
    {
      title: t('Efficient execution'),
      description: t('Efficient task execution saves time and reduces internal friction.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Organisation />}
      pageTitle={t('Organisational Development')}
      hero={{
        imageSrc: organisationImg,
        imageAlt: t('Organisational Development'),
        title: t('Controlled Change'),
        subtitle: t('That Empowers People & Performance'),
        body: (
          <p>
            {t(
              'Organisational development aims to increase productivity while encouraging personal and team growth. In today’s dynamic environment, adapting the organisation to new conditions is essential. Our experience shows that successful restructuring comes from involving everyone in the process — not just leading from the top.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('Our Approach')}
      features={devPhases}
      featuresCols="md:grid-cols-3 lg:grid-cols-3"
      benefitsTitle={t('Your Benefits')}
      benefits={devBenefits}
      benefitsCols="md:grid-cols-3"
      checkIconSrc={check}
      servicesTitle={t('Our Services')}
      servicesIntro={t(
        'With our extensive project experience, we guide change processes with structure and clarity — from analysis to implementation. We activate transformation in a controlled manner and support your organisation as a coach, enabler, or project leader. Our goal is to lead you toward a future-proof, efficient, and agile organisation.'
      )}
      // No servicesList on this page
    />
  );
}

export default Organisational_Development;
