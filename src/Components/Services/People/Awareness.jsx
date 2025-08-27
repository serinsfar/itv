import React from 'react';
import people from '../../../assets/people.jpg';
import { FaGavel, FaInfoCircle, FaClock } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Peoplee from './Peoplee';
import { useTranslation } from 'react-i18next';
import FourPartPageTemplate from '../../Template/Services_Template';

const Awareness = () => {

  const { t } = useTranslation();

  const features = [
    {
      icon: <FaInfoCircle className="text-secondary text-2xl" />,
      title: t('awareness.features.0.title', 'Simplified Interpretation'),
      description: t(
        'We distill the essence of new laws and regulations, helping employees understand what matters and how it impacts their role.'
      ),
    },
    {
      icon: <FaGavel className="text-secondary text-2xl" />,
      title: t('Legal and Regulatory Expertise'),
      description: t(
        'Through active involvement in working groups and committees, we stay up to date with legal developments and their practical implications.'
      ),
    },
    {
      icon: <FaClock className="text-secondary text-2xl" />,
      title: t('Time-Saving Guidance'),
      description: t(
        'Employees no longer need to navigate lengthy documents. We deliver the key points clearly, efficiently, and in a format that supports daily operations.'
      ),
    },
  ];

  const benefits = [
    {
      title: t('Organisation-wide awareness'),
      description: t(
        'All employees are aware of new requirements and their impact on daily work.'
      ),
    },
    {
      title: t('Time saved'),
      description: t(
        'Employees save time by receiving the core message without having to study complex documents.'
      ),
    },
  ];


  return (
    <FourPartPageTemplate
      prelude={<Peoplee />}
      pageTitle={t('Legal & Regulatory Awareness')}
      hero={{
        imageSrc: people,
        imageAlt: t('Legal Awareness'),
        title: t('Clarity in Complexity'),
        subtitle: t('Understanding Rules That Matter'),
        body: (
          <p>
            {t(
              'In a constantly evolving environment, organisations face new rules, laws, and obligations. Often, this abundance overwhelms employees who lack the time or clarity to fully grasp what these changes mean. At ITV Consult, we make it our mission to translate complex regulations into actionable insights that empower your workforce and maintain compliance.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('Our Approach')}
      features={features}
      featuresCols="md:grid-cols-2 lg:grid-cols-3"
      benefitsTitle={t('Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      servicesTitle={t('Our Services')}
      servicesIntro={t(
        'From our long-standing practice in this branch and the active collaboration in working groups and committees we are familiar with the relevant conditions, rules and laws and we know their direction of impact and logic.'
      )}
    />
  );
};

export default Awareness;
