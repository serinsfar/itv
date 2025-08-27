import React from 'react';
import { FaLightbulb, FaBullseye, FaPeopleArrows, FaClipboardCheck } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Organisation from './Organisation';
import organisationImg from '../../../assets/organisation.jpg';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';

function Strategy() {
  const { t } = useTranslation();

  // Part 2: Features (approach steps)
  const strategySteps = [
    {
      icon: <FaLightbulb className="text-secondary text-2xl" />,
      title: t('Workshop-Based Approach'),
      description: t(
        'We work with a core team across multiple workshops, each focused on a specific strategic topic tailored to your needs.'
      ),
    },
    {
      icon: <FaBullseye className="text-secondary text-2xl" />,
      title: t('Clear Vision & Direction'),
      description: t(
        'Together we develop a documented vision and concrete measures to achieve it, aligned with your organizations values and goals.'
      ),
    },
    {
      icon: <FaPeopleArrows className="text-secondary text-2xl" />,
      title: t('Inclusive Review & Commitment'),
      description: t(
        'The broader organization is involved in reviewing the strategy to ensure understanding, support, and readiness for implementation.'
      ),
    },
    {
      icon: <FaClipboardCheck className="text-secondary text-2xl" />,
      title: t('Implementation Readiness'),
      description: t(
        'We support you from concept to implementation by facilitating buy-in, setting roles, and aligning resources with clear priorities.'
      ),
    },
  ];

  // Part 3: Benefits (title + description)
  const strategyBenefits = [
    {
      title: t('Leadership & shared vision'),
      description: t('Improved leadership and a clearly documented vision understood by all.'),
    },
    {
      title: t('Simplified processes'),
      description: t('Simplified processes through clear analysis of critical points and roles.'),
    },
    {
      title: t('No duplication'),
      description: t('Elimination of duplication via defined responsibilities.'),
    },
    {
      title: t('Better coordination'),
      description: t('Better coordination of business units and their tasks.'),
    },
    {
      title: t('Daily guidance'),
      description: t('Increased efficiency with daily business guidelines in place.'),
    },
    {
      title: t('Focused budgets'),
      description: t('Focused use of limited budgets for essential actions.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Organisation />}
      pageTitle={t('Strategy Development')}
      hero={{
        imageSrc: organisationImg,
        imageAlt: t('Strategy Development'),
        title: t('Aligning Vision with Action'),
        subtitle: t('Strategic Clarity for Your Future'),
        body: (
          <p>
            {t(
              'We apply recognized strategic planning methods and tailor them to your unique needs. Based on our extensive experience, the best results are achieved by working closely with a core team in workshops, each focusing on a specific theme. The resulting strategy is then reviewed by a wider group to ensure organization-wide support, which is key for successful implementation.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('Our Approach')}
      features={strategySteps}
      featuresCols="md:grid-cols-2 lg:grid-cols-2"
      benefitsTitle={t('Your Benefits')}
      benefits={strategyBenefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      servicesTitle={t('Our Services')}
      servicesIntro={t(
        'Strategy development has a long tradition at ITV Consult AG and is one of our core competencies. Our experienced consultants accompany and coach you through the entire process, taking a leadership role while collaborating closely with you. We ensure the strategy is practical, accepted, and ready to drive long-term success.'
      )}
      // No servicesList on this page
    />
  );
}

export default Strategy;
