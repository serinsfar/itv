import React from 'react'
import Processes from '../../Services/Processes/Processes'
import processes from '../../../assets/processe.jpg'
import { FaFileAlt, FaProjectDiagram, FaUsers, FaClipboardList } from 'react-icons/fa';
import check from '../../../assets/check.png';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';

function Process_Documentation() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaProjectDiagram className="text-secondary text-2xl" />,
      title: t('Process Mapping'),
      description: t('We analyse your daily operations with your team and convert them into structured process diagrams and documentation.'),
    },
    {
      icon: <FaClipboardList className="text-secondary text-2xl" />,
      title: t('Clear & Transparent Descriptions'),
      description: t('We describe each process clearly and understandably to make workflows transparent for all employees.'),
    },
    {
      icon: <FaUsers className="text-secondary text-2xl" />,
      title: t('Team Collaboration'),
      description: t('Your team is actively involved in the documentation process, ensuring accuracy, acceptance, and ownership.'),
    },
    {
      icon: <FaFileAlt className="text-secondary text-2xl" />,
      title: t('Instruction & KPI Definition'),
      description: t('Where needed, we define work instructions and relevant key performance indicators for each step.'),
    },
  ];

  const benefits = [
    {
      title: t('Documented actual processes'),
      description: t('Your actual processes are documented and the base for optimisation is set.'),
    },
    {
      title: t('Clarity & transparency'),
      description: t('The processes are described clearly and transparently, and are understandable for everyone.'),
    },
    {
      title: t('Staff engagement'),
      description: t('Process documentation enables all staff to form an informed opinion and contribute to improvement.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Processes />}
      pageTitle={t('Process Documentation')}
      hero={{
        imageSrc: processes,
        imageAlt: t('Process Documentation'),
        title: t('Transparent Workflows'),
        subtitle: t('Enable Efficient Operations'),
        body: (
          <p>
            {t('Process documentation is a key factor for enabling employees to truly understand their daily work. With a common understanding of workflows, your team can operate efficiently and consistently. Moreover, comprehensive and accessible documentation forms the foundation for identifying optimisation opportunities.')}
          </p>
        ),
      }}
      featuresTitle={t('Our Documentation Approach')}
      features={features}
      featuresCols="md:grid-cols-2"
      benefitsTitle={t('Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-3"
      checkIconSrc={check}
      servicesTitle={t('Our Services')}
      servicesIntro={t('In collaboration with your staff, we document real work processes using diagrams and descriptions. When needed, we create detailed work instructions and define key performance indicators for each step. This not only sets the foundation for improvement but also empowers your team to fully understand, own, and refine their workflows.')}
    />
  );
}

export default Process_Documentation;
