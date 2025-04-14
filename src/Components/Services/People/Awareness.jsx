import React from 'react'
import people from '../../../assets/people.jpg';
import Peoplee from './Peoplee';
import { FaGavel, FaInfoCircle, FaClock } from 'react-icons/fa';
import check from '../../../assets/check.png';
const legalPhases = [
  {
    icon: <FaInfoCircle className="text-secondary text-2xl" />,
    title: 'Simplified Interpretation',
    description:
      'We distill the essence of new laws and regulations, helping employees understand what matters and how it impacts their role.',
  },
  {
    icon: <FaGavel className="text-secondary text-2xl" />,
    title: 'Legal and Regulatory Expertise',
    description:
      'Through active involvement in working groups and committees, we stay up to date with legal developments and their practical implications.',
  },
  {
    icon: <FaClock className="text-secondary text-2xl" />,
    title: 'Time-Saving Guidance',
    description:
      'Employees no longer need to navigate lengthy documents. We deliver the key points clearly, efficiently, and in a format that supports daily operations.',
  },
];

const legalBenefits = [
  'All employees are aware of new requirements and their impact on daily work',
  'Employees save time by receiving the core message without having to study complex documents',
];

const Awareness = () => {
  return (
    <div className="grid grid-cols-7 mb-10">

      <div className="pt-10 container pl-45 col-start-2 col-span-5">
        <h1 className="pt-10 text-3xl font-bold text-left">Legal & Regulatory Awareness</h1>

        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
            <img className="p-4" src={people} alt="Legal Awareness" />
          </div>
          <div className="mb:pl-12">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
              Clarity in Complexity<br />
              <span className="text-secondary font-normal">Understanding Rules That Matter</span>
            </div>
            <p>
              In a constantly evolving environment, organisations face new rules, laws, and obligations. Often, this abundance
              overwhelms employees who lack the time or clarity to fully grasp what these changes mean. At ITV Consult, we make
              it our mission to translate complex regulations into actionable insights that empower your workforce and maintain compliance.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {legalPhases.map((phase, i) => (
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
          {legalBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Thanks to our long-standing experience and active involvement in working groups and expert committees,
          we are familiar with the rules and legal frameworks that apply in your field. We understand their logic,
          direction of impact, and how to translate them into meaningful, accessible guidance tailored to your organisation’s needs.
        </p>
      </div>
    </div>
  );
};

export default Awareness