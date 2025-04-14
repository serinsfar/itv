import React from 'react';
import { FaServer, FaCogs, FaNetworkWired } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Data from '../../Services/Data/Data';
import Infrastructure from './Infra';

const architectureParts = [
  {
    icon: <FaNetworkWired className="text-secondary text-2xl" />,
    title: 'Implementation Environment',
    description:
      'Before launching any replacement, it’s crucial to define the implementation environment that suits the project requirements.',
  },
  {
    icon: <FaCogs className="text-secondary text-2xl" />,
    title: 'System Architecture',
    description:
      'We elaborate a tailored system architecture based on your actual and planned activities to ensure efficient integration.',
  },
  {
    icon: <FaServer className="text-secondary text-2xl" />,
    title: 'Technical Optimization',
    description:
      'Our approach also includes optimizing your existing IT infrastructure for better performance and future scalability.',
  },
];
const architectureBenefits = [
  'Improved data flows',
  'Independent view on your software and hardware architecture',
  'Bringing in the experience of many other projects',
  'No uncontrolled redundancies',
  'Experts define the best fitting architecture for your needs',
];

function System_Arch() {
  return (

  
                                           
      <div className='grid grid-cols-7 mb-10'> 
      < Infrastructure/> 
      <div className="pt-10 container pl-45 col-start-2 col-span-5">
        <h1 className='pt-10 text-3xl font-bold text-left'>System Architecture</h1>
        <div className='grid xl:grid-cols-2 gap-8 place-items-center py-10'>
          <div className='border-[3px] border-solid border-gray-200 shadow-sm rounded-lg'>
            <img className='p-4' src={'architecture'} alt="System Architecture" />
          </div>
          <div className='mb:pl-12'>
            <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>
              Defining Future-Ready<br /> <span className='text-secondary font-normal'>System Architecture</span>
            </div>
            <p>
              Every system requires a certain IT infrastructure. For any system replacement, it is fundamental to define
              the implementation environment in advance. From our perspective, elaborating a clear and tailored system
              architecture is crucial. This ensures that geodata and system components are well-aligned, avoid duplication,
              and enable seamless communication between software and hardware layers.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">System Architecture Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {architectureParts.map((part, i) => (
            <div key={i} className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start">
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
          {architectureBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          In a first step, we analyze and describe your existing environment together with your team. Based on this analysis,
          we elaborate a future-ready system architecture that fits your technical and operational requirements. This analysis
          can also be used to optimize your existing setup. The newly defined architecture will be documented in both text
          and visual diagrams.
        </p>
      </div>
    </div>

  )
}

export default System_Arch