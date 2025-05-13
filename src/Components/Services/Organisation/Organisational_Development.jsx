import React from 'react'
import Organisation from './Organisation'
import organisation from '../../../assets/organisation.jpg'
import { FaSearch, FaLightbulb, FaPeopleCarry, FaCogs } from 'react-icons/fa';
import check from '../../../assets/check.png';
const devPhases = [
  {
    icon: <FaSearch className="text-secondary text-2xl" />,
    title: 'Analysis',
    description:
      'We analyze your organization from an external perspective, identifying strengths, weaknesses, and opportunities while also considering technical and economic aspects.',
  },
  {
    icon: <FaLightbulb className="text-secondary text-2xl" />,
    title: 'Conception',
    description:
      'Based on the analysis, we create a concept collaboratively with your team — ensuring ownership, alignment, and broad acceptance across the organization.',
  },
  {
    icon: <FaPeopleCarry className="text-secondary text-2xl" />,
    title: 'Implementation',
    description:
      'We accompany you and your staff as coaches or project leaders, guiding the process step-by-step toward a successful transformation.',
  },
];

const devBenefits = [
  'Your organization is prepared for the challenges of the future',
  'Your organisation becomes a “learning organisation” embracing continuous change',
  'Efficient task execution saves time and reduces internal friction',
];

const Organisational_Development = () => {
  return (
      <div className="container row-start-2 row-span-5">
              <Organisation />
        <h1 className="pt-10 text-3xl font-bold text-left">Organisational Development</h1>

        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
            <img className="p-4" src={organisation} alt="Organisational Development" />
          </div>
          <div className="mb:pl-12">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
              Controlled Change<br />
              <span className="text-secondary font-normal">That Empowers People & Performance</span>
            </div>
            <p>
              Organisational development aims to increase productivity while encouraging personal and team growth.
              In today’s dynamic environment, adapting the organisation to new conditions is essential.
              Our experience shows that successful restructuring comes from involving everyone in the process — not just leading from the top.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {devPhases.map((phase, i) => (
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
          {devBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          With our extensive project experience, we guide change processes with structure and clarity —
          from analysis to implementation. We activate transformation in a controlled manner and support your organization as a coach,
          enabler, or project leader. Our goal is to lead you toward a future-proof, efficient, and agile organisation.
        </p>
      </div>
  );
};

export default Organisational_Development