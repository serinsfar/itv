import React from 'react';
import Data from '../../Services/Data/Data';
import dataImg from '../../../assets/daten2.jpg';

const Data_Organisation = () => {
  return (
    <div className='grid grid-cols-5'>
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
}

export default Data_Organisation