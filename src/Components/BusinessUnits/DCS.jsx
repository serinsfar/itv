import React from 'react';
import { FaCloudUploadAlt, FaMapMarkedAlt, FaShieldAlt, FaTools } from 'react-icons/fa';
import check from '../../assets/check.png';
import dcslogo from '../../assets/dcsLogo.png';
import Business from '../BusinessUnits/Business_units';

const dcsFeatures = [
  {
    icon: <FaCloudUploadAlt className="text-secondary text-2xl" />,
    title: 'Digital Submission',
    description:
      'Seamless digital delivery and handling of aeronautical data, including obstacles.',
  },
  {
    icon: <FaMapMarkedAlt className="text-secondary text-2xl" />,
    title: 'Obstacle Assessment',
    description:
      'Automated evaluation to determine if an object constitutes an air navigation obstacle.',
  },
  {
    icon: <FaShieldAlt className="text-secondary text-2xl" />,
    title: 'Regulatory Compliance',
    description:
      'Ensures adherence to FOCA regulations for obstacle registration and approval.',
  },
  {
    icon: <FaTools className="text-secondary text-2xl" />,
    title: 'User-Friendly Portal',
    description:
      'Intuitive interface for registering and managing obstacle data efficiently.',
  },
];

const dcsBenefits = [
  'Streamlined process for obstacle registration and approval.',
  'Enhanced data accuracy and consistency.',
  'Improved aviation safety through up-to-date obstacle information.',
  'Reduced administrative burden for stakeholders.',
];

const DCS = () => {
  return (
    <div className="container row-start-2 row-span-5">
      <Business />
      <h1 className="pt-10 text-3xl font-bold text-left">Data Collection Service (DCS)</h1>

      <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
        <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
          <img className="p-4" src={dcslogo} alt="Data Collection Service" />
        </div>
        <div className="mb:pl-12">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
            Modernizing Aeronautical Data Management<br />
            <span className="text-secondary font-normal">with DCS</span>
          </div>
          <p>
            The Data Collection Service (DCS) is a digital platform operated by ITV Consult AG
            on behalf of the Swiss Federal Office of Civil Aviation (FOCA). It facilitates the
            efficient submission and management of aeronautical data, particularly concerning
            air navigation obstacles. By leveraging modern technology, DCS enhances data quality
            and ensures compliance with aviation safety regulations.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-10 text-left">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {dcsFeatures.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start"
          >
            <div className="mt-1">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-left">Your Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {dcsBenefits.map((benefit, index) => (
          <div key={index} className="bg-light p-6 shadow-sm rounded-lg text-center">
            <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DCS;
