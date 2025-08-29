import React from 'react';
import { FaBook, FaDatabase, FaProjectDiagram } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Data from '../../Services/Data/Data';
import { useTranslation } from 'react-i18next';
import dataModelImg from '../../../assets/dataModel.png';
import FourPartPageTemplate from '../../Template/Services_Template';

const Data_Modeling = () => {
  const { t } = useTranslation(); // single file, namespaced keys like "dataModel.*"

  const features = [
    {
      icon: <FaBook className="text-secondary text-2xl" />,
      title: t('dataModel.parts.semantic.title', 'Semantic Description'),
      description: t(
        'dataModel.parts.semantic.desc',
        'Description of the real world by subject specialists in a common language, understandable for everybody.'
      ),
    },
    {
      icon: <FaDatabase className="text-secondary text-2xl" />,
      title: t('dataModel.parts.catalog.title', 'Catalogue of Objects'),
      description: t(
        'dataModel.parts.catalog.desc',
        'Definition of each element (class and attribute) with data capture rules. Interface between semantics and conceptual model.'
      ),
    },
    {
      icon: <FaProjectDiagram className="text-secondary text-2xl" />,
      title: t('dataModel.parts.conceptual.title', 'Conceptual Data Model'),
      description: t(
        'dataModel.parts.conceptual.desc',
        'Formal representation of the real world in diagrams and structured text, created by modeling specialists.'
      ),
    },
  ];

  const benefits = [
    {
      title: t('dataModel.benefits.cards.0.title', 'Independent external view'),
      description: t('dataModel.benefits.cards.0.desc', 'Through our experienced consultants.'),
    },
    {
      title: t('dataModel.benefits.cards.1.title', 'Defined method'),
      description: t('dataModel.benefits.cards.1.desc', 'Structured approach across all model stages.'),
    },
    {
      title: t('dataModel.benefits.cards.2.title', 'Support as needed'),
      description: t('dataModel.benefits.cards.2.desc', 'Targeted help exactly when you need it.'),
    },
  ];

  const servicesList = [
    t('dataModel.services.list.0', 'Requirements & scope workshops'),
    t('dataModel.services.list.1', 'Semantic description facilitation'),
    t('dataModel.services.list.2', 'Object catalogue drafting & rules'),
    t('dataModel.services.list.3', 'Conceptual modeling (UML/ERD)'),
    t('dataModel.services.list.4', 'Validation, governance & handover'),
  ];

  return (
    <FourPartPageTemplate
      prelude={<Data />}
      pageTitle={t('dataModel.pageTitle', 'Data Modeling')}
      hero={{
        imageSrc: dataModelImg,
        imageAlt: t('Data model diagram'),
        title: t('The Foundation of'),
        subtitle: t('Structured Data'),
        body: (
          <p>
            {t(
              'A data model is composed of several interrelated components that together provide a clear, structured understanding of real-world information. It begins with a semantic description ... Finally, the conceptual data model represents the real world using structured text and diagrams, providing the foundation for implementation and system integration.'
            )}
          </p>
        ),
      }}
      featuresTitle={t('dataModel.features.title', 'Data Model')}
      features={features}
      featuresCols="md:grid-cols-2 lg:grid-cols-3"
      benefitsTitle={t('dataModel.benefits.title', 'Your Benefits')}
      benefits={benefits}
      benefitsCols="md:grid-cols-3"
      checkIconSrc={check}
      servicesTitle={t('dataModel.services.title', 'Our Service')}
      servicesIntro={t(
        'dataModel.services.intro',
        'We support and guide you and your team in every phase of the data modelling, either by moderating workshops or with descriptions established by us.'
      )}
      servicesLeadText={t('dataModel.services.lead', 'We offer the following services:')}
      servicesList={servicesList}
    />
  );
};

export default Data_Modeling;
