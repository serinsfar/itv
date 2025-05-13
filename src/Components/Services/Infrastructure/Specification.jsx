import React from 'react';
import { FaClipboardList, FaUsers, FaFileContract, FaCheckDouble } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Data from '../../Services/Data/Data';
import infraImg from '../../../assets/infrastruktur2.jpg';
import Infrastructure from './Infra';
// make sure you have a relevant image

const specificationParts = [
  {
    icon: <FaClipboardList className="text-secondary text-2xl" />,
    title: 'Requirements Engineering',
    description: 'Identify and structure the requirements of your users clearly and completely.',
  },
  {
    icon: <FaUsers className="text-secondary text-2xl" />,
    title: 'Use Case Definition',
    description: 'Define how users will interact with the system to ensure expectations are aligned.',
  },
  {
    icon: <FaFileContract className="text-secondary text-2xl" />,
    title: 'Specification Writing',
    description: 'Establish precise descriptions of functionalities, forming the basis for the tender documentation.',
  },
  {
    icon: <FaCheckDouble className="text-secondary text-2xl" />,
    title: 'Project Experience',
    description: 'Leverage insights and best practices gained through many successfully completed projects.',
  },
];
const specificationBenefits = [
  'Covers all relevant aspects thanks to extensive experience',
  'Ensures clear understanding by suppliers',
  'Minimizes your internal workload and resource needs',
];
const Specification = () => {
      return (
      <div className="container row-start-2 row-span-5">
      <Infrastructure />
        <h1 className="pt-10 text-3xl font-bold text-left">Specification & Requirements</h1>
        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
            <img className="p-4" src={infraImg} alt="Specification" />
          </div>
          <div className="mb:pl-12">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
              Clear & Consistent<br />
              <span className="text-secondary font-normal">Specifications that Deliver</span>
            </div>
            <p>
              Be it for the procurement of a new system, the purchase of services, or the acquisition of data, 
              you always need a consistent and clear specification of your wishes and requirements. 
              With our long-standing experience, we ensure that your specifications are complete, clearly understood by suppliers, 
              and require minimal effort from your team.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">Specification Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {specificationParts.map((part, i) => (
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
          {specificationBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Service</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          Our services in establishing a specification include requirements engineering, use case definition, functionality description, and
          compiling the specification as part of your tender documentation. With our background and project experience,
          we translate user requirements into clear, actionable language that suppliers understand.
        </p>
      </div>
  

  )
}

export default Specification