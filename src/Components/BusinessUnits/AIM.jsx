import React from 'react';
import organisation from '../../assets/organisation.jpg'
import { FaSearch, FaLightbulb, FaUsers, FaCogs } from 'react-icons/fa';
import check from '../../assets/check.png';
import Business from '../BusinessUnits/Business_units';

const projectPhases = [
    {
      icon: <FaSearch className="text-secondary text-2xl" />,
      title: 'Analysis',
      description:
        'As external observers, we assess your organisation to identify strengths, weaknesses, and opportunities for optimisation, considering technical, organisational, and economic aspects.',
    },
    {
      icon: <FaLightbulb className="text-secondary text-2xl" />,
      title: 'Conception',
      description:
        'Together with you and your employees, we develop a strategic concept based on the analysis. Broad acceptance and involvement are key to a successful transformation.',
    },
    {
      icon: <FaUsers className="text-secondary text-2xl" />,
      title: 'Implementation',
      description:
        'We accompany and coach your team throughout the implementation phase. Strategy development beforehand ensures a common understanding of change goals.',
    },
  ];
  const benefits = [
    'Your organization is prepared for the challenges of the future',
    'Your organisation becomes a “learning organisation”, embracing continuous change',
    'Your organisation executes tasks efficiently and effectively',
    'You save money and reduce internal frictions',
  ];


const AIM = () => {
    return (
        <aside className="grid grid-cols-7 mb-10">
          <Business />
        <div className="pt-10 container pl-45 col-start-2 col-span-5">
          <h1 className="pt-10 text-3xl font-bold text-left">Aeronautical Data Management</h1>
  
          <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
            <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
              <img className="p-4" src={organisation} alt="Aeronautical Data Management" />
            </div>
            <div className="mb:pl-12">
              <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
                Your Partner for<br />
                <span className="text-secondary font-normal">Aeronautical Information Evolution</span>
              </div>
              <p>
                The core business of ITV Consult AG is consulting and delivering solutions in the field of Spatial Information Management.
                We support our clients in evolving from traditional document-based AIS (Aeronautical Information Services) to a
                data-centric AIM (Aeronautical Information Management) — and further to a service-oriented SWIM (System Wide Information Management) approach.
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
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
                <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  };

export default AIM;
