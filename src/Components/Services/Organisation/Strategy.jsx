import React from 'react'
import Organisation from './Organisation'
import organisation from '../../../assets/organisation.jpg'
import { FaLightbulb, FaBullseye, FaPeopleArrows, FaClipboardCheck } from 'react-icons/fa';
import check from '../../../assets/check.png';
const strategySteps = [
  {
    icon: <FaLightbulb className="text-secondary text-2xl" />,
    title: 'Workshop-Based Approach',
    description:
      'We work with a core team across multiple workshops, each focused on a specific strategic topic tailored to your needs.',
  },
  {
    icon: <FaBullseye className="text-secondary text-2xl" />,
    title: 'Clear Vision & Direction',
    description:
      'Together we develop a documented vision and concrete measures to achieve it, aligned with your organizations values and goals.',
  },
  {
    icon: <FaPeopleArrows className="text-secondary text-2xl" />,
    title: 'Inclusive Review & Commitment',
    description:
      'The broader organization is involved in reviewing the strategy to ensure understanding, support, and readiness for implementation.',
  },
  {
    icon: <FaClipboardCheck className="text-secondary text-2xl" />,
    title: 'Implementation Readiness',
    description:
      'We support you from concept to implementation by facilitating buy-in, setting roles, and aligning resources with clear priorities.',
  },
];

const strategyBenefits = [
  'Improved leadership and a clearly documented vision understood by all',
  'Simplified processes through clear analysis of critical points and roles',
  'Elimination of duplication via defined responsibilities',
  'Better coordination of business units and their tasks',
  'Increased efficiency with daily business guidelines in place',
  'Focused use of limited budgets for essential actions',
];

const Strategy = () => {
  return (
    <div className="grid grid-cols-7 mb-10">
      <organisation />
      <div className="pt-10 container pl-45 col-start-2 col-span-5">
        <h1 className="pt-10 text-3xl font-bold text-left">Strategy Development</h1>

        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
            <img className="p-4" src={organisation} alt="Strategy Development" />
          </div>
          <div className="mb:pl-12">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
              Aligning Vision with Action<br />
              <span className="text-secondary font-normal">Strategic Clarity for Your Future</span>
            </div>
            <p>
              We apply recognized strategic planning methods and tailor them to your unique needs. Based on our extensive experience,
              the best results are achieved by working closely with a core team in workshops, each focusing on a specific theme.
              The resulting strategy is then reviewed by a wider group to ensure organization-wide support, which is key for successful implementation.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {strategySteps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start"
            >
              <div className="mt-1">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-left">Your Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {strategyBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Strategy development has a long tradition at ITV Consult AG and is one of our core competencies. 
          Our experienced consultants accompany and coach you through the entire process, taking a leadership role while collaborating closely with you. 
          We ensure the strategy is practical, accepted, and ready to drive long-term success.
        </p>
      </div>
    </div>
  );
};

export default Strategy