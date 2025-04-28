import React from 'react'
import Processes from '../../Services/Processes/Processes'
import processes from '../../../assets/processe.jpg'
import { FaWrench, FaChartLine, FaSmile, FaTasks } from 'react-icons/fa';
import check from '../../../assets/check.png';
const optimizationSteps = [
  {
    icon: <FaTasks className="text-secondary text-2xl" />,
    title: 'Process Documentation',
    description:
      'We begin by documenting your current processes clearly to create a solid base for optimization.',
  },
  {
    icon: <FaChartLine className="text-secondary text-2xl" />,
    title: 'Analysis of Potential',
    description:
      'Together with your team, we identify strengths, weaknesses, and opportunities for improvement.',
  },
  {
    icon: <FaWrench className="text-secondary text-2xl" />,
    title: 'Redesign of Workflows',
    description:
      'We design and describe improved workflows by eliminating, relocating, or adding steps where needed.',
  },
  {
    icon: <FaSmile className="text-secondary text-2xl" />,
    title: 'Implementation & Enablement',
    description:
      'We support you throughout the implementation process — either as coach, enabler, or project leader — down to all levels of your organization.',
  },
];

const optimizationBenefits = [
  'Cost efficiency through simplified and more efficient workflows',
  'Satisfied employees through better coordinated process steps',
  'External point of view through our independent consultants',
];

const Process_Optimisation = () => {
  return (
    <div className="grid grid-cols-7 mb-10">
      <Processes/>
      <div className="pt-10 container pl-45 col-start-2 col-span-5">
        <h1 className="pt-10 text-3xl font-bold text-left">Process Optimization & Implementation</h1>

        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
            <img className="p-4" src={processes} alt="Process Optimization" />
          </div>
          <div className="mb:pl-12">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
              Practical Process Changes<br />
              <span className="text-secondary font-normal">With Lasting Impact</span>
            </div>
            <p>
              To save costs, reduce effort, and improve effectiveness, it's essential to regularly analyze and optimize your processes.
              Optimization doesn’t always mean shortening — it means making workflows easier and more logical to execute.
              For the changes to be truly effective, they must be implemented all the way to the bottom of the organization.
              Only then can their full potential be realized.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">Our Optimization Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {optimizationSteps.map((step, i) => (
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
          {optimizationBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          We support your process optimization efforts through all key phases: documenting your actual workflows,
          identifying weak spots and potential improvements, designing more effective processes, and supporting their
          successful implementation within your organization — whether as advisors, coaches, or project managers.
        </p>
      </div>
    </div>
  );
};

export default Process_Optimisation