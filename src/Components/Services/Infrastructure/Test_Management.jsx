import React from 'react';
import { FaBug, FaClipboardCheck, FaTasks, FaVial } from 'react-icons/fa';
import check from '../../../assets/check.png';
import infraImg from '../../../assets/infrastruktur2.jpg';
import Infrastructure from './Infra';
const testingParts = [
  {
    icon: <FaTasks className="text-secondary text-2xl" />,
    title: 'Test Management',
    description: 'Plan, control and monitor the entire testing process tailored to your organization’s resources and goals.',
  },
  {
    icon: <FaClipboardCheck className="text-secondary text-2xl" />,
    title: 'Test Planning',
    description: 'Define the strategy, scope, objectives, and schedule of testing activities, including required resources.',
  },
  {
    icon: <FaVial className="text-secondary text-2xl" />,
    title: 'Test Execution',
    description: 'Systematic application of test cases and documentation of results to verify software against your requirements.',
  },
  {
    icon: <FaBug className="text-secondary text-2xl" />,
    title: 'Proven Standards',
    description: 'Use of established testing models such as the “V-model” and ISTQB-certified professionals for reliability.',
  },
];

const testingBenefits = [
  'Independent test management increases software quality',
  'We support you exactly where you need it – based on your internal resources',
  'Consistent documentation of all testing activities',
  'Proven methods using well-known standards like the V-model',
];

const Test_Management = () => {
  return (
    <div className="container row-start-2 row-span-5">
          <Infrastructure/>
      <h1 className="pt-10 text-3xl font-bold text-left">Software Testing & Quality Assurance</h1>

      <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
        <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
          <img className="p-4" src={infraImg} alt="Software Testing" />
        </div>
        <div className="mb:pl-12">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
            Systematic Testing<br />
            <span className="text-secondary font-normal">for Reliable Software</span>
          </div>
          <p>
            Many companies understand the critical dependency on software systems and actively work toward improved software quality.
            Frictionless processes in modern organizations rely on the reliability and performance of their software.
            High software quality is not just a goal — it’s a key performance indicator for successful enterprises.
            One of the most effective ways to achieve this is through systematic testing and auditing, ensuring that the software
            aligns with your requirements and expectations.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-10 text-left">Testing Process & Focus Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {testingParts.map((part, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start"
          >
            <div className="mt-1">{part.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{part.title}</h3>
              <p className="text-gray-600">{part.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-left">Your Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testingBenefits.map((benefit, i) => (
          <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
            <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
      <p className="text-gray-600 leading-relaxed max-w-4xl">
        We provide trustworthy and active support across the complete software testing process. Whether you're a producer, supplier, or
        purchaser of individual software modules, we assist with test management, test planning, and execution — all aligned with industry
        standards such as the V-model. Our team includes Certified Testers (Advanced Level) accredited by the
        International Software Testing Qualifications Board (ISTQB).
      </p>
    </div>
  )
}

export default Test_Management