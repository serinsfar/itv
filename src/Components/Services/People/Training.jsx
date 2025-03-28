import React from 'react'
import people from '../../../assets/people.jpg';
import Peoplee from './Peoplee';

const Training = () => {
  return (
    <div className='grid grid-cols-5'>
    <Peoplee />
                                         
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
<h1 className='pt-20 text-3xl font-bold text-left'>Training</h1>
<div className='py-20'>
<img src ={people} alt=""/>
</div>
<p className='p-5'>We prepare the relevant themes for you and your organisation to be understood by everybody and communicate them. We attach importance on a balanced mixture of tutorials and collaboration of the participants on group works and case studies.
     We see the involving of the participants, if possible in the preparation work already, as an important factor of success.</p>
     <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
     <div className='p-5'>
      <ul>
         
          <li>- You are focussed as the training is fitted and customized on your needs;</li>
          <li>- Shorter period of education as training is reduced on the themes that are relevant or critical for your organisation;</li>
          <li>- Knowledge transfer from experienced trainers;</li>
          </ul></div>
        <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>

         <p>We are visiting lecturers of the Swiss Federal Institute of Technology Zurich and instructors of different trainings and educations. We know how to communicate complex themes in an understandable way.
             Moreover we have the agility to react very fast on your request.</p>
</div>
</div>
  )
}

export default Training