import React from 'react';
import people from '../../../assets/people.jpg';
import { FaChalkboardTeacher, FaUsersCog, FaBookOpen } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Data from '../../Services/Data/Data';
import { useTranslation } from 'react-i18next';
import dataModelImg from '../../../assets/datamodel.png';
import FourPartPageTemplate from '../../Template/Services_Template';
import Peoplee from './Peoplee';

const Training = () => {
  const { t } = useTranslation(); // single file, namespaced keys like "dataModel.*"
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-secondary text-2xl" />,
      title: t('Tailored Content Delivery'),
      description:
       t('We prepare relevant topics so they are clearly understood by all participants. We prioritize clarity and context-driven explanations.'),
    },
    {
      icon: <FaUsersCog className="text-secondary text-2xl" />,
      title: t('Interactive Learning'),
      description:
        t('Our trainings include a balance of tutorials, group work, and real-world case studies to ensure practical understanding.'),
    },
    {
      icon: <FaBookOpen className="text-secondary text-2xl" />,
      title: t('Participant Involvement'),
      description:
        t('We encourage participants to get involved early — even during preparation — which leads to stronger engagement and better results.',)
    },
  ];

  const benefits = [
    {
      title: t('Focused & customized'),
      description: t('Focused and customized training aligned to your needs.',
      )
      },
    {
      title: t('Reduced training time'),
      description: t('Targeting only critical and relevant themes shortens training effort.',
    )},
    {
      title: t('Experienced trainers'),
      description: t('Knowledge transfer from experienced, professional trainers.',
    )},
  ];

  return (
    <FourPartPageTemplate
      prelude={<Peoplee />}
      pageTitle={t("Training & Knowledge Transfer")}
      hero={{
        imageSrc: people,
        imageAlt: t('Training'),
        title: t('Targeted Learning'),
        subtitle: t('with Expert-Led Sessions'),
        body: (
          <p>
           {t("We ensure that complex topics are prepared and presented in a way that every team member can understand and relate to. Our training sessions combine hands-on exercises, participant collaboration, and theory in a balanced, engaging manner. Involving participants early — even in preparation — is a key factor in making knowledge transfer successful and sustainable.")}
          </p>
        ),
      }}
      featuresTitle={t("Our Training Approach")}
      features={features}
      featuresCols="md:grid-cols-2 lg:grid-cols-3"
      benefitsTitle={t("Your Benefits")}
      benefits={benefits}
      benefitsCols="md:grid-cols-3"
      checkIconSrc={check}
      servicesTitle={t("Our Services")}
      servicesIntro={
        t('We are visiting lecturers of the Swiss Federal Institute of Technology Zurich and instructors of different trainings and educations. We know how to communicate complex themes in an understandable way. Moreover we have the agility to react very fast on your request.')
      }
      // No services list, only intro paragraph for this page. Add items here if needed:
      // servicesLeadText="We offer the following services:"
      // servicesList={[ 'Item 1', 'Item 2' ]}
    />
  );
};

export default Training;
