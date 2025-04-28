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
//image id geo:2520854403//
const benefits = [
  {
    image: goal,
    title: 'Result-oriented support',
    description: 'Tailored to your specific needs',
  },
  {
    image: prespective,
    title: 'External perspective',
    description: 'Objective and unbiased insights',
  },
  {
    image: reward,
    title: 'Independent expertise',
    description: 'Backed by an experienced team of consultants',
  },
  {
    image: theory,
    title: 'Comprehensive solutions',
    description: 'From recommendations to full system implementation',
    bullets: [
      'Concrete recommendations',
      'Detailed action plans',
      'Full implementation of systems',
    ],
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

function Metadata() {
  return (
  
   <div className='grid grid-cols-7'> 
          <Data/> 
     <div className=' container pl-36 col-start-2 col-span-5'>
        <h1 className='pt-20 text-3xl font-bold text-left'>Metadata</h1>
     <div className='grid xl:grid-cols-2 gap-8 place-items-center py-10'>
     <div className=' border-[3px] border-solid border-gray-200 shadow-sm rounded-lg '>
     <img className='p-4' src ={geo} alt=""/>
     </div>
     <div className='mb:pl-12'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>Smart Geodata Needs<br /> <span className='text-secondary font-normal'>Smart Metadata</span></div>
            <p>
             Metadata describing your (geo-) data are needed to better administrate, actualise, and document your data and much more.
             The necessity of metadata is well acknowledged by a wide circle of persons. With the norm 19115:2003 published by the ISO, 
             the guidelines how to deal with metadata for geoinformation is given
            </p>
     </div>
      </div>
              <h2 className='pt-5 text-3xl font-bold text-left'>Your benefits</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10'>
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

                <div className='pb-20'>
                <h2 className="pt-5 text-3xl font-bold text-left">Our Services</h2>
                <p className="pt-5">
                  We have defined a significant part of the Swiss Metadata Model and established the respective Swiss standard.
                  Moreover, we accompanied many implementations. This know-how can be beneficial for you.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                'Analysis of your requirements with regard to metadata',
                'Mapping your requirements to ISO 19115:2003',
                'Establishment of a concept for your metadata system',
                'Specification, tender documentation and evaluation of the best fitting metadata system',
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-light p-6 rounded-lg shadow-md flex gap-4 items-start"
                >
                  <div className="w-6 h-6 mt-1">
                    <img src={check} alt="check" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{service}</p>
                </div>
              ))}



</div>

                        
     </div>
     </div>
    </div>
      
  )
  
}

export default Metadata