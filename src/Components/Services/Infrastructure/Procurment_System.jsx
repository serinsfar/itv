import React from 'react';
import { FaFileAlt, FaBalanceScale, FaTasks, FaUserTie } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Data from '../../Services/Data/Data';
import Infrastructure from './Infra';
import infraImg from '../../../assets/infrastruktur2.jpg';
const procurementParts = [
  {
    icon: <FaFileAlt className="text-secondary text-2xl" />,
    title: 'Specification Phase',
    description: 'We help define your requirements and compile consistent and clear specification and tender documents.',
  },
  {
    icon: <FaBalanceScale className="text-secondary text-2xl" />,
    title: 'Tendering & Evaluation',
    description: 'We support or lead the tendering process with fair, transparent evaluation criteria that withstand objections.',
  },
  {
    icon: <FaTasks className="text-secondary text-2xl" />,
    title: 'Implementation',
    description: 'From coaching your team to leading the full implementation, we help manage resources and timelines effectively.',
  },
  {
    icon: <FaUserTie className="text-secondary text-2xl" />,
    title: 'Flexible Engagement',
    description: 'You decide which phase or part of a phase you delegate to us based on your internal resources.',
  },
];

const procurementBenefits = [
  'Consistent and clear specification and tender documentation',
  'Transparent evaluation which resists objections',
  'Flexible support during peak effort phases',
  'Experienced project managers for smooth execution',
  'Specification as part of the tender documentation',
];
const Procurment_System = () => {
  return (
    <div className="grid grid-cols-5 mb-10">
    <Infrastructure/>
    <div className="pt-10 container pl-45 col-start-2 col-span-5">
      <h1 className="pt-10 text-3xl font-bold text-left">Procurement of a System</h1>

      <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
        <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
          <img className="p-4" src={infraImg} alt="Procurement" />
        </div>
        <div className="mb:pl-12">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
            Full Procurement Support<br />
            <span className="text-secondary font-normal">From Specification to Implementation</span>
          </div>
          <p>
            The procurement of a system typically involves the phases "specification", "tendering and evaluation", and "implementation".
            You decide which phase—or parts of a phase—you hand over to our responsibility. Our experts guide your project to success,
            flexibly supporting you where needed most.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-10 text-left">Procurement Phases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {procurementParts.map((part, i) => (
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
        {procurementBenefits.map((benefit, i) => (
          <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
            <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
      <p className="text-gray-600 leading-relaxed max-w-4xl">
        We support you in every phase of the procurement process:
        from requirements engineering and specification writing to elaborating tender documentation and defining
        evaluation criteria. We also bring the experience of many projects and can either coach your implementation
        team or take full responsibility as project manager.
      </p>
    </div>
  </div>
  )
}

export default Procurment_System