import React from 'react';
import { FaSearch, FaLightbulb, FaUsers, FaCogs } from 'react-icons/fa';
import check from '../../assets/check.png';
import organisation from '../../assets/organisation.jpg';
import Business from '../BusinessUnits/Business_units';

const projectPhases = [
  {
    icon: <FaSearch className="text-secondary text-2xl" />,
    title: 'Analysis',
    description:
      'We analyse your organisation with an external, neutral point of view — identifying strengths, weaknesses and optimisation potential, considering organisational, technical and economic aspects.',
  },
  {
    icon: <FaLightbulb className="text-secondary text-2xl" />,
    title: 'Conception',
    description:
      'Based on our findings, we collaboratively develop a concept that provides a clear direction for your organisation’s development. Involvement from you and your team is essential for acceptance and success.',
  },
  {
    icon: <FaUsers className="text-secondary text-2xl" />,
    title: 'Implementation',
    description:
      'We guide and support your team throughout the implementation — acting as coaches or leading figures — to ensure real change is embedded within your organisation.',
  },
  {
    icon: <FaCogs className="text-secondary text-2xl" />,
    title: 'Strategic Development',
    description:
      'Before organisational change, we recommend aligning on a common strategy to clarify the focus and direction of transformation across the entire organisation.',
  },
];

const spatialBenefits = [
  'Your organization is prepared for the challenges of the future.',
  'Your organisation becomes a learning organisation, embracing change.',
  'Your organisation executes tasks more efficiently and effectively.',
  'You reduce costs and internal frictions.',
];

const SDI = () => {
  return (
    <div className="container row-start-2 row-span-5">
      <Business />
      <h1 className="pt-10 text-3xl font-bold text-left">Spatial Data Management</h1>

      <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
        <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
          <img className="p-4" src={organisation} alt="Spatial Management" />
        </div>
        <div className="mb:pl-12">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
            Your Partner for<br />
            <span className="text-secondary font-normal">Spatial Information Management</span>
          </div>
          <p>
            The core business of ITV Consult AG is consulting and delivering solutions in the field of Spatial Information Management.
            We specialize in integrating spatially related components into the broader information management of administrations or companies —
            always considering organisational, economic, and technical dimensions.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-10 text-left">Our Project Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projectPhases.map((phase, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start"
          >
            <div className="mt-1">{phase.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-left">Your Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {spatialBenefits.map((benefit, i) => (
          <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
            <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SDI;
