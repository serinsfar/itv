import React from 'react';
import organisation from '../../assets/organisation.jpg'
import process from '../../assets/processe.jpg'

const Company = () => {
    return (
        <div className='grid grid-cols-5'>

                                             
     <div className='container pl-45 col-start-2 col-span-5 pb-10'>
     <h1 className='pt-20 text-3xl font-bold text-left'>Company</h1>
     <div className='py-20'>
     <img src ={organisation} alt=""/>
     </div>


    <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
    <div className="flex flex-col justify-between p-4 leading-normal">       
        <h2 className='pt-5 text-3xl font-bold text-left mb-2'>Core Business:</h2>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Our expertise lies in integrating geospatial components <br /> into the information systems and management processes of organizations and companies. <br />
            We ensure that organizational, economic,<br /> and technical aspects are carefully considered to deliver comprehensive solutions.
        </p>
        <p className='p-5'>
            Our primary focus areas include:
        </p>
       
        <div className='p-5'>
            <ul>
                <li>- Developing and implementing Spatial Data Infrastructures (SDI);</li>
                <li>- Providing solutions for transportation, traffic, and supply chain management;</li>
                <li>- Delivering advanced information management services in the aviation sector (AIM).</li>
            </ul>
        </div>
        </div>
        <div>
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={process}
                alt="Noteworthy technology acquisitions 2021"></img>
        </div>
    </div>

    </div>
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="items-end object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src= {process}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </a>
    </div>
    );
};

export default Company;
