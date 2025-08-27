import React from 'react';
import { FaBug, FaClipboardCheck, FaTasks, FaVial } from 'react-icons/fa';
import check from '../../../assets/check.png';
import infraImg from '../../../assets/infrastruktur2.jpg';
import Infrastructure from './Infra';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';

function Test_Management() {
  const { t } = useTranslation();
  // Part 2: Features
  const testingParts = [
    {
      icon: <FaTasks className="text-secondary text-2xl" />,
      title: t('Test Management'),
      description:
        t('Plan, control and monitor the entire testing process tailored to your organization’s resources and goals.'),
    },
    {
      icon: <FaClipboardCheck className="text-secondary text-2xl" />,
      title: t('Test Planning'),
      description:
        t('Define the strategy, scope, objectives and schedule of testing activities, including required resources.'),
    },
    {
      icon: <FaVial className="text-secondary text-2xl" />,
      title: t('Test Execution'),
      description:
        t('Run test cases and document results systematically to verify software against your requirements.'),
    },
    {
      icon: <FaBug className="text-secondary text-2xl" />,
      title: t('Proven Standards'),
      description:
        t('Apply established testing models such as the V-model with ISTQB-certified professionals for reliability.'),
    },
  ];

  // Part 3: Benefits (title + description)
  const testingBenefits = [
    {
      title: t('Higher software quality'),
      description: t('Independent test management increases reliability and user confidence.'),
    },
    {
      title: t('Right-sized support'),
      description: t('We help exactly where you need it, based on your internal resources.'),
    },
    {
      title: t('Traceable outcomes'),
      description: t('Consistent documentation of all testing activities and results.'),
    },
    {
      title: t('Proven methodology'),
      description: t('Well-known standards like the V-model reduce risk and rework.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Infrastructure />}
      pageTitle={t("Software Testing & Quality Assurance")}
      hero={{
        imageSrc: infraImg,
        imageAlt: t('Software Testing'),
        // (no custom imageClassName here; template default sizing applies)
        title: t('Systematic Testing'),
        subtitle: t('for Reliable Software'),
        body: (
          <p>
            {t("Many companies understand the critical dependency on software systems and actively work toward improved software quality. Frictionless processes rely on reliable, high-performance software. One of the most effective ways to achieve this is through systematic testing and auditing, ensuring the software aligns with your requirements and expectations.")}
          </p>
        ),
      }}
      featuresTitle={t("Testing Process & Focus Areas")}
      features={testingParts}
      featuresCols="md:grid-cols-2 lg:grid-cols-2"
      benefitsTitle={t("Your Benefits")}
      benefits={testingBenefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      servicesTitle={t("Our Services")}
      servicesIntro={t("We provide trustworthy and active support across the complete software testing process. Whether you're a producer, supplier, or purchaser of software modules, we assist with test management, planning and execution — aligned with standards such as the V-model. Our team includes Certified Testers (Advanced Level) accredited by ISTQB.")}
    />
  );
}

export default Test_Management;
