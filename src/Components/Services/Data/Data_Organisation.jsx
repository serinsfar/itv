import React from 'react'
import Data from '../../Services/Data/Data';
import dataImg from '../../../assets/daten2.jpg';
import company from '../../../assets/company.png'
import goal from '../../../assets/goal.png'
import prespective from '../../../assets/perception.png'
import reward from '../../../assets/reward.png'
import theory from '../../../assets/theory.png'
import geo from '../../../assets/geo.jpg'
import check from '../../../assets/check.png'
import dataorg from '../../../assets/dataorg.png'
import { FaSearch, FaLightbulb, FaCogs, FaUsers } from 'react-icons/fa';
//image id geo:2520854403//
const benefits = [
  {
    image: goal,
    title: 'proved data flows',
   
  },
  {
    image: prespective,
    title: 'Defined responsibilities',
   
  },
  {
    image: reward,
    title: 'Shorter ways',
  
  },
  {
    image: theory,
    title: 'No uncontrolled redundancies',
  

  },
  {
    image: theory,
    title: 'Consistent and central publications;',
    

  },
];
const services = [
  {
    title: 'Requirements Analysis',
    description: 'We analyze your metadata needs and ensure alignment with your goals.',
  },
  {
    title: 'ISO 19115 Mapping',
    description: 'We match your needs with the ISO standard to ensure compliance.',
  },

]
const steps = [
  {
    icon: <FaSearch className="text-secondary text-2xl" />,
    title: '1. Data Flow Analysis',
    description:
      'We analyze the current data flows and identify strengths, weaknesses, and areas for improvement.',
  },
  {
    icon: <FaLightbulb className="text-secondary text-2xl" />,
    title: '2. Optimization Proposal',
    description:
      'Based on the analysis, we outline possibilities for an optimized data organization and discuss them with you.',
  },
  {
    icon: <FaCogs className="text-secondary text-2xl" />,
    title: '3. Decision & Coaching',
    description:
      'Together, we choose the best solution, and we support your team throughout the technical implementation.',
  },
  {
    icon: <FaUsers className="text-secondary text-2xl" />,
    title: '4. Team Involvement',
    description:
      'You and your team are fully involved in every phase of the process for ownership and transparency.',
  },
];

const Data_Organisation = () => {
  return (

     <div className='container row-start-2 row-span-5'>
                <Data/> 
        <h1 className='pt-5 text-3xl font-bold text-left'>Data Organisation</h1>
     <div className='grid xl:grid-cols-2 gap-8 place-items-center py-10'>
     <div className=' border-[3px] border-solid border-gray-200 shadow-sm rounded-lg '>
     <img className='p-4' src ={dataorg} alt=""/>
     </div>
     <div className='mb:pl-12'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>Organization-wide <br /> <span className='text-secondary font-normal'>Geodata Management</span></div>
            <p>
            Today, not only specialists use geodata, but different business areas in an organisation originate, process, publish and use geodata. The definition of an organisation-wide
             data organisation is needed in a way, that the geodata is not bought several times, the data storage is built up easyly and efficiently, the data transfer between business 
             areas is without frictions and data will be published from one hand only.
            </p>
     </div>
      </div>
              <h2 className='pt-5 text-3xl font-bold text-left'>Your benefits</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-8 py-10'>
                  {benefits.map(({ image, title, description, bullets }, index) => (
                    <div
                      key={index}
                      className='bg-light p-6 shadow-sm text-center flex flex-col items-center'
                    >
                    <div className='text-4xl mb-5'>
                      {image.toString().endsWith('.png') || image.toString().startsWith('/') ? (
                        <img src={image} alt={title} className="w-12 h-12" />
                      ) : (
                        image
                      )}
                    </div>

                      <h3 className='text-2xl font-bold mb-3'>{title}</h3>
                      <p className='text-gray-600 font-light text-base mb-4'>
                        {description}
                      </p>

                      {bullets && (
                        <ul className='list-disc list-inside text-left text-sm text-gray-600 font-light space-y-1'>
                          {bullets.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

          <h2 className="pt-10 text-3xl font-bold mb-8 text-left">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex items-start gap-4"
              >
                <div className="mt-1">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
                        
     </div>
  )
}
    /*<div className='grid grid-cols-5'>
    <Data/> 
<div className='container pl-45 col-start-2 col-span-5'>
  <h1 className='pt-20 text-3xl font-bold text-left'>Data Organisation</h1>
  <div className='py-20'>
  <img src ={dataImg} alt=""/>
  </div>
  <p className='p-5'>Today, not only specialists use geodata, but different business areas in an organisation originate, process, publish and use geodata. 
    The definition of an organisation-wide data organisation is needed in a way, that the geodata is not bought several times, the data storage is built up easyly and efficiently,
     the data transfer between business areas is without frictions and data will be published from one hand only.</p>
       <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
       <div className='p-5'>- Improved data flows;
        <ul>
           
            <li>- Defined responsibilities;</li>
            <li>- Shorter ways;</li>
            <li>- No uncontrolled redundancies;</li>
            <li>- Consistent and central publications;</li>
            </ul></div>
          <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
          <p className='p-5'>In a first step we analyse the actual data flows and identify strengths, weaknesses and the potential of improvement, 
            always taking into account the actual and planned activities. With this analysis we establish possibilities for an optimised data organisation and discuss it with you.
             The best solution will be chosen and we coach the technical implementation. You and your team are fully involved in every phase.</p>
</div>
</div>
  )
}*/

export default Data_Organisation