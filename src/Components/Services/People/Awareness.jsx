import React from 'react'
import people from '../../../assets/people.jpg';
import Peoplee from './Peoplee';


const Awareness = () => {
  return (
    <div className='grid grid-cols-5'>
    <Peoplee />
                                         
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
<h1 className='pt-20 text-3xl font-bold text-left'>Awareness</h1>
<div className='py-20'>
<img src ={people} alt=""/>
</div>
<p className='p-5'>In a changing environment an organisation/company faces again and again new conditions, rules and laws. In our work we often notice that this plenitude overstrains employees, as they do not understand the impact of a rule or law or do not have the time to investigate on it.</p>
     <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
     <div className='p-5'>
      <ul>
         
          <li>- All employees are aware of new requirements and conscious about the impact this has on their daily work;</li>
          <li>- Your employees save time, as they do not have to investigate in big and complex documents, but been informed about the core message;</li>
          </ul></div>
        <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
        <p className='p-5'>From our long-standing practice in this branch and the active collaboration in working groups and committees we are familiar with the relevant conditions, 
          rules and laws and we know their direction of impact and logic.</p>

        
</div>
</div>
  )
}

export default Awareness