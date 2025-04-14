import React from 'react'
import Processes from './Processes'
import processes from '../../../assets/processe.jpg'
import { FaSitemap, FaLightbulb, FaUsers, FaRetweet } from 'react-icons/fa';
import check from '../../../assets/check.png';
const designSteps = [
  {
    icon: <FaSitemap className="text-secondary text-2xl" />,
    title: 'Process Drivers Analysis',
    description:
      'We identify and analyze relevant parameters such as customer needs, supplier inputs, employee roles, and cross-organization interfaces.',
  },
  {
    icon: <FaUsers className="text-secondary text-2xl" />,
    title: 'Collaborative Workshops',
    description:
      'With your team, we design or redesign processes in iterative workshops by eliminating, relocating, or adding steps.',
  },
  {
    icon: <FaLightbulb className="text-secondary text-2xl" />,
    title: 'Unconventional Thinking',
    description:
      'We challenge assumptions, ask critical questions, and bring fresh ideas based on our external perspective and experience.',
  },
  {
    icon: <FaRetweet className="text-secondary text-2xl" />,
    title: 'Final Documentation',
    description:
      'Once consensus is reached, we formalize your new processes in clear and consistent process documentation.',
  },
];

const designBenefits = [
  'External view from independent consultants enables unconventional solutions',
  'Defined and focused leading of the team during process design',
  'Redesign or creation of operations that fit your real-world challenges',
];

const Process_Design = () => {
  return (
    <div className="grid grid-cols-7 mb-10">
      <processes />
      <div className="pt-10 container pl-45 col-start-2 col-span-5">
        <h1 className="pt-10 text-3xl font-bold text-left">Process Design & Optimization</h1>

        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
            <img className="p-4" src={processes} alt="Process Design" />
          </div>
          <div className="mb:pl-12">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
              Designing Better Workflows<br />
              <span className="text-secondary font-normal">Through Iteration & Insight</span>
            </div>
            <p>
              What is the best sequence of tasks? What can be done in parallel? Every organization faces these questions.
              To find the right answers, we analyze a variety of influencing factors — from customer requirements to internal and external interfaces.
              Your employees are the most valuable source of insight in this process, and we work with them to create effective, optimized operations.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {designSteps.map((step, i) => (
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
          {designBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          We guide you and your team in identifying key process drivers, lead design workshops to (re)structure your workflows,
          and iterate until consensus is reached. Our job is to moderate, question, provoke new thinking, and help finalize your
          optimized processes through structured documentation.
        </p>
      </div>
    </div>
  );
};

export default Process_Design