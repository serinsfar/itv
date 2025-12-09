import React from 'react';
import Processes from './Processes';
import processesImg from '../../../assets/processe.jpg';
import { FaSitemap, FaLightbulb, FaUsers, FaRetweet } from 'react-icons/fa';
import check from '../../../assets/check.png';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';

function Process_Design() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaSitemap className="text-secondary text-2xl" />,
      title: t('Process Drivers Analysis'),
      description: t('We identify and analyse relevant parameters such as customer needs, supplier inputs, employee roles, and cross-organisation interfaces.'),
    },
    {
      icon: <FaUsers className="text-secondary text-2xl" />,
      title: t('Collaborative Workshops'),
      description: t('With your team, we design or redesign processes in iterative workshops by eliminating, relocating, or adding steps.'),
    },
    {
      icon: <FaLightbulb className="text-secondary text-2xl" />,
      title: t('Unconventional Thinking'),
      description: t('We challenge assumptions, ask critical questions, and bring fresh ideas based on our external perspective and experience.'),
    },
    {
      icon: <FaRetweet className="text-secondary text-2xl" />,
      title: t('Final Documentation'),
      description: t('We moderate and document all work steps so that we can provide you and your team with a complete, structured documentation of your processes.')
    },
  ];

  const benefits = [
    {
      title: t('Independent external view'),
      description: t('External view from independent consultants enables unconventional solutions.'),
    },
    {
      title: t('Focused facilitation'),
      description: t('Defined and focused leading of the team during process design.'),
    },
    {
      title: t('Fit-for-purpose operations'),
      description: t('Redesign or creation of operations that fit your real-world challenges.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Processes />}
      pageTitle={t('Process Design & Optimisation')}
      hero={{
        imageSrc: processesImg,
        imageAlt: t('Process Design'),
        title: t('Designing Better Workflows'),
        subtitle: t('Through Iteration & Insight'),
        body: (
          <p>
            {t('What is the best sequence of tasks? What can be done in parallel? Every organisation faces these questions. To find the right answers, we analyse a variety of influencing factors — from customer requirements to internal and external interfaces. Your employees are the most valuable source of insight in this process, and we work with them to create effective, optimised operations.')}
          </p>
        ),
      }}
      featuresTitle={t('Our Approach')}
      features={features}
      featuresCols="md:grid-cols-2"
      benefitsTitle={t('Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      servicesTitle={t('Our Services')}
      servicesIntro={t('We guide you and your team in identifying key process drivers, lead design workshops to (re)structure your workflows, and iterate until consensus is reached. Our job is to moderate, question, provoke new thinking, and help finalise your optimised processes through structured documentation.')}
    />
  );
}

export default Process_Design;
