import React from 'react';
import { FaClipboardList, FaUsers, FaFileContract, FaCheckDouble } from 'react-icons/fa';
import check from '../../../assets/check.png';
import infraImg from '../../../assets/infrastruktur2.jpg';
import Infrastructure from './Infra';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';
function Specification() {
  const { t } = useTranslation();
  // Part 2: Features (cards)
  const specificationParts = [
    {
      icon: <FaClipboardList className="text-secondary text-2xl" />,
      title: t('Requirements Engineering'),
      description: t('Identify and structure the requirements of your users clearly and completely.'),
    },
    {
      icon: <FaUsers className="text-secondary text-2xl" />,
      title: t('Use Case Definition'),
      description: t('Define how users will interact with the system to ensure expectations are aligned.'),
    },
    {
      icon: <FaFileContract className="text-secondary text-2xl" />,
      title: t('Specification Writing'),
      description: t('Establish precise descriptions of functionalities, forming the basis for the tender documentation.'),
    },
    {
      icon: <FaCheckDouble className="text-secondary text-2xl" />,
      title: t('Project Experience'),
      description: t('Leverage insights and best practices gained through many successfully completed projects.'),
    },
  ];

  // Part 3: Benefits (title + description)
  const specificationBenefits = [
    {
      title: t('Comprehensive coverage'),
      description: t('Covers all relevant aspects thanks to extensive experience.'),
    },
    {
      title: t('Clarity for suppliers'),
      description: t('Ensures clear understanding by suppliers.'),
    },
    {
      title: t('Reduced internal effort'),
      description: t('Minimizes your internal workload and resource needs.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Infrastructure />}
      pageTitle= {t("Specification & Requirements")}
      hero={{
        imageSrc: infraImg,
        imageAlt: t('Specification'),
        title: t('Clear & Consistent'),
        subtitle: t('Specifications that Deliver'),
        body: (
            t('Be it for the procurement of a new system, the purchase of services, or the acquisition of data, you always need a consistent and clear specification of your wishes and requirements. With our long-standing experience, we ensure that your specifications are complete, clearly understood by suppliers, and require minimal effort from your team.')
        ),
      }}
      featuresTitle={t("Specification Services")}
      features={specificationParts}
      featuresCols="md:grid-cols-2 lg:grid-cols-2"
      benefitsTitle={t("Your Benefits")}
      benefits={specificationBenefits}
      benefitsCols="md:grid-cols-3"
      checkIconSrc={check}
      servicesTitle={t("Our Service")}
      servicesIntro={t("Our services in establishing a specification include requirements engineering, use case definition, functionality description, and compiling the specification as part of your tender documentation. With our background and project experience, we translate user requirements into clear, actionable language that suppliers understand.")}
      // servicesLeadText="We offer the following services:"
      // servicesList={[
      //   'Requirements & scope workshops',
      //   'Use case & process modelling',
      //   'Functional specification drafting',
      //   'Tender documentation support'
      // ]}
    />
  );
}

export default Specification;
