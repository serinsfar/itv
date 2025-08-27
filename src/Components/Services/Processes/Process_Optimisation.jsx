import React from 'react'
import Processes from '../../Services/Processes/Processes'
import processes from '../../../assets/processe.jpg'
import { FaWrench, FaChartLine, FaSmile, FaTasks } from 'react-icons/fa';
import check from '../../../assets/check.png';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';

function Process_Optimisation() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaTasks className="text-secondary text-2xl" />,
      title: t('Process Documentation'),
      description: t('We begin by documenting your current processes clearly to create a solid base for optimization.'),
    },
    {
      icon: <FaChartLine className="text-secondary text-2xl" />,
      title: t('Analysis of Potential'),
      description: t('Together with your team, we identify strengths, weaknesses, and opportunities for improvement.'),
    },
    {
      icon: <FaWrench className="text-secondary text-2xl" />,
      title: t('Redesign of Workflows'),
      description: t('We design and describe improved workflows by eliminating, relocating, or adding steps where needed.'),
    },
    {
      icon: <FaSmile className="text-secondary text-2xl" />,
      title: t('Implementation & Enablement'),
      description: t('We support you throughout the implementation process — either as coach, enabler, or project leader — down to all levels of your organization.'),
    },
  ];

  const benefits = [
    {
      title: t('Cost efficiency'),
      description: t('Cost efficiency through simplified and more efficient workflows.'),
    },
    {
      title: t('Satisfied employees'),
      description: t('Satisfied employees through better coordinated process steps.'),
    },
    {
      title: t('Independent perspective'),
      description: t('External point of view through our independent consultants.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Processes />}
      pageTitle={t('Process Optimization & Implementation')}
      hero={{
        imageSrc: processes,
        imageAlt: t('Process Optimization'),
        title: t('Practical Process Changes'),
        subtitle: t('With Lasting Impact'),
        body: (
          <p>
            {t("To save costs, reduce effort, and improve effectiveness, it's essential to regularly analyze and optimize your processes. Optimization doesn’t always mean shortening — it means making workflows easier and more logical to execute. For the changes to be truly effective, they must be implemented all the way to the bottom of the organization. Only then can their full potential be realized.")}
          </p>
        ),
      }}
      featuresTitle={t('Our Optimization Approach')}
      features={features}
      featuresCols="md:grid-cols-2"
      benefitsTitle={t('Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-3"
      checkIconSrc={check}
      servicesTitle={t('Our Services')}
      servicesIntro={t('We support your process optimization efforts through all key phases: documenting your actual workflows, identifying weak spots and potential improvements, designing more effective processes, and supporting their successful implementation within your organization — whether as advisors, coaches, or project managers.')}
    />
  );
}

export default Process_Optimisation;
