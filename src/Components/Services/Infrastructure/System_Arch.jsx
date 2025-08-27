import React from 'react';
import { FaServer, FaCogs, FaNetworkWired } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Infrastructure from './Infra';
import infraImg from '../../../assets/infrastruktur2.jpg';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';

function System_Arch() {
  const { t } = useTranslation();

  const architectureParts = [
    {
      icon: <FaNetworkWired className="text-secondary text-2xl" />,
      title: t('systemArch.features.Implementation.title1', 'Implementation Environment'),
      description: t(
        'systemArch.features.architecture.desc1',
        'Before launching any replacement, it’s crucial to define the implementation environment that suits the project requirements.'
      ),
    },
    {
      icon: <FaCogs className="text-secondary text-2xl" />,
      title: t('systemArch.features.architecture.title2', 'System Architecture'),
      description: t(
        'systemArch.features.architecture.desc2',
        'We elaborate a tailored system architecture based on your actual and planned activities to ensure efficient integration.'
      ),
    },
    {
      icon: <FaServer className="text-secondary text-2xl" />,
      title: t('systemArch.features.optimization.title3', 'Technical Optimization'),
      description: t(
        'systemArch.features.optimization.desc3','Our approach also includes optimizing your existing IT infrastructure for better performance and future scalability.'
      ),
    },
  ];

  const benefits = [
    {
      title: t('systemArch.benefits.cards.0.title', 'Improved data flows'),
      description: t('systemArch.benefits.cards.0.desc', 'Streamlined integrations and fewer bottlenecks'),
    },
    {
      title: t('systemArch.benefits.cards.1.title', 'Independent view on your software and hardware architecture'),
      description: t('systemArch.benefits.cards.1.desc', 'Neutral assessment from experienced consultants'),
    },
    {
      title: t('systemArch.benefits.cards.2.title', 'Experience from many other projects'),
      description: t('systemArch.benefits.cards.2.desc', 'We apply proven patterns and avoid common pitfalls'),
    },
    {
      title: t('systemArch.benefits.cards.3.title', 'No uncontrolled redundancies'),
      description: t('systemArch.benefits.cards.3.desc', 'Consolidated components and clear responsibilities'),
    },
    {
      title: t('systemArch.benefits.cards.4.title', 'Experts define the best fitting architecture for your needs'),
      description: t('systemArch.benefits.cards.4.desc', 'Future-ready, scalable and maintainable'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Infrastructure />}
      pageTitle={t('systemArch.pageTitle', 'System Architecture')}
      hero={{
        imageSrc: infraImg,
        imageAlt: t('systemArch.hero.alt', 'System Architecture'),
        // Uses template’s default sizing. To change, pass imageClassName/imageWrapperClassName.
        title: t('systemArch.hero.title', 'Defining Future-Ready'),
        subtitle: t('systemArch.hero.subtitle', 'System Architecture'),
        body: (
          <p>
            {t(
              'systemArch.hero.body',
              'Every system requires a certain IT infrastructure. For any system replacement, it is fundamental to define the implementation environment in advance. From our perspective, elaborating a clear and tailored system architecture is crucial. This ensures that data and system components are well-aligned, avoid duplication, and enable seamless communication between software and hardware layers.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('systemArch.features.title', 'System Architecture Overview')}
      features={architectureParts}
      featuresCols="md:grid-cols-2 lg:grid-cols-3"
      benefitsTitle={t('systemArch.benefits.title', 'Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      servicesTitle={t('systemArch.services.title', 'Our Services')}
      servicesIntro={t(
        'systemArch.services.intro',
        'In a first step, we analyze and describe your existing environment together with your team. Based on this analysis, we elaborate a future-ready system architecture that fits your technical and operational requirements. This analysis can also be used to optimize your existing setup. The newly defined architecture will be documented in both text and visual diagrams.'
      )}
       servicesLeadText={t('systemArch.services.lead', 'We offer the following services:')}
      servicesList={[
       t('systemArch.services.list.0', 'Discovery & environment assessment'),
       t('systemArch.services.list.1', 'Target architecture & principles'),
       t('systemArch.services.list.2', 'Integration blueprint'),
       t('systemArch.services.list.3', 'Documentation & diagrams')
      ]}
    />
  );
}

export default System_Arch;
