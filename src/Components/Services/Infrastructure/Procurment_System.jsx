import React from 'react';
import { FaFileAlt, FaBalanceScale, FaTasks, FaUserTie } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Infrastructure from './Infra';
import infraImg from '../../../assets/infrastruktur2.jpg';
import FourPartPageTemplate from '../../Template/Services_Template';
import { useTranslation } from 'react-i18next';
function Procurment_System() {
  const { t } = useTranslation();
  // Part 2: Features (procurement phases)
  const procurementParts = [
    {
      icon: <FaFileAlt className="text-secondary text-2xl" />,
      title: t('Specification Phase'),
      description:
        t('We help define your requirements and compile consistent and clear specification and tender documents.'),
    },
    {
      icon: <FaBalanceScale className="text-secondary text-2xl" />,
      title: t('Tendering & Evaluation'),
      description:
        t('We support or lead the tendering process with fair, transparent evaluation criteria that withstand objections.'),
    },
    {
      icon: <FaTasks className="text-secondary text-2xl" />,
      title: t('Implementation'),
      description:
        t('From coaching your team to leading the full implementation, we help manage resources and timelines effectively.'),
    },
    {
      icon: <FaUserTie className="text-secondary text-2xl" />,
      title: t('Flexible Engagement'),
      description:
        t('You decide which phase or part of a phase you delegate to us based on your internal resources.'),
    },
  ];

  // Part 3: Benefits (title + description)
  const benefits = [
    {
      title: t('Clear documentation'),
      description: t('Consistent and clear specification and tender documentation.'),
    },
    {
      title: t('Transparent evaluation'),
      description: t('Evaluation criteria and process that withstand objections.'),
    },
    {
      title: t('Flexible support'),
      description: t('Help during peak effort phases where you need it most.'),
    },
    {
      title: t('Experienced leadership'),
      description: t('Seasoned project managers for smooth execution.'),
    },
    {
      title: t('Specification included'),
      description: t('Specification prepared as part of your tender documentation.'),
    },
  ];

  return (
    <FourPartPageTemplate
      prelude={<Infrastructure />}
      pageTitle= {t("Procurement of a System")}
      hero={{
        imageSrc: infraImg,
        imageAlt: t('Procurement'),
        title: t('Full Procurement Support'),
        subtitle: t('From Specification to Implementation'),
        body: (
          <p>
            {t('The procurement of a system typically involves the phases &quot;specification&quot;, &quot;tendering and evaluation&quot;, and &quot;implementation&quot;. You decide which phase—or parts of a phase—you hand over to our responsibility. Our experts guide your project to success, flexibly supporting you where needed most.')}
          </p>
        ),
      }}
      featuresTitle={t("Procurement Phases")}
      features={procurementParts}
      featuresCols="md:grid-cols-2 lg:grid-cols-2"
      benefitsTitle={t("Your Benefits")}
      benefits={benefits}
      benefitsCols="md:grid-cols-2"
      checkIconSrc={check}
      servicesTitle={t("Our Services")}
      servicesIntro={t("We support you in every phase of the procurement process: from requirements engineering and specification writing to elaborating tender documentation and defining evaluation criteria. We also bring the experience of many projects and can either coach your implementation team or take full responsibility as project manager.")}
      // servicesLeadText="We offer the following services:"
      // servicesList={[
      //   'Requirements & scope definition',
      //   'Tender documentation & criteria',
      //   'Evaluation & vendor selection',
      //   'Implementation coaching / project management'
      // ]}
    />
  );
}

export default Procurment_System;
