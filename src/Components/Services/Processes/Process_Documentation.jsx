import React from 'react'
import Processes from '../../Services/Processes/Processes'
import processes from '../../../assets/processe.jpg'
import { FaFileAlt, FaProjectDiagram, FaUsers, FaClipboardList } from 'react-icons/fa';
import check from '../../../assets/check.png';

const processSteps = [
  {
    icon: <FaProjectDiagram className="text-secondary text-2xl" />,
    title: 'Process Mapping',
    description:
      'We analyze your daily operations with your team and convert them into structured process diagrams and documentation.',
  },
  {
    icon: <FaClipboardList className="text-secondary text-2xl" />,
    title: 'Clear & Transparent Descriptions',
    description:
      'We describe each process clearly and understandably to make workflows transparent for all employees.',
  },
  {
    icon: <FaUsers className="text-secondary text-2xl" />,
    title: 'Team Collaboration',
    description:
      'Your team is actively involved in the documentation process, ensuring accuracy, acceptance, and ownership.',
  },
  {
    icon: <FaFileAlt className="text-secondary text-2xl" />,
    title: 'Instruction & KPI Definition',
    description:
      'Where needed, we define work instructions and relevant key performance indicators for each step.',
  },
];

const processBenefits = [
  'Your actual processes are documented and the base for optimization is set',
  'The processes are described clearly and transparently, and are understandable for everyone',
  'Process documentation enables all staff to form an informed opinion and contribute to improvement',
];

const Process_Documentation = () => {
  return (
<div className="container row-start-2 row-span-5">
      <Processes/>
        <h1 className="pt-10 text-3xl font-bold text-left">Process Documentation</h1>

        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
            <img className="p-4" src={processes} alt="Process Documentation" />
          </div>
          <div className="mb:pl-12">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
              Transparent Workflows<br />
              <span className="text-secondary font-normal">Enable Efficient Operations</span>
            </div>
            <p>
              Process documentation is a key factor for enabling employees to truly understand their daily work.
              With a common understanding of workflows, your team can operate efficiently and consistently.
              Moreover, comprehensive and accessible documentation forms the foundation for identifying optimization opportunities.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">Our Documentation Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, i) => (
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
          {processBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          In collaboration with your staff, we document real work processes using diagrams and descriptions. 
          When needed, we create detailed work instructions and define key performance indicators for each step. 
          This not only sets the foundation for improvement but also empowers your team to fully understand, own, and refine their workflows.
        </p>
      </div>
  );
};

export default Process_Documentation