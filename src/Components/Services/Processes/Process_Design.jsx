import React from 'react'
import Processes from './Processes'
import processes from '../../../assets/processe.jpg'

const Process_Design = () => {
  return (
    <div className='grid grid-cols-5'>
    <Processes />
                                         
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
<h1 className='pt-20 text-3xl font-bold text-left'>Process Design</h1>
<div className='py-20'>
<img src ={processes} alt=""/>
</div>
<p className='p-5'>What is the best sequence of tasks? Which tasks can be done in parallel? Every organization/company has to ask these essential 
  questions from time to time. To answer these questions, a variety of parameters like requirements and needs of the customers, suppliers and employees, interfaces to other organizations, etc. have to be analysed and documented. Doing that, your employees are the most valuable carriers of information and ideas.</p>
     <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
     <div className='p-5'>
      <ul>
         
          <li>- External view from independent consultants enables unconventional solutions;</li>
          <li>- Defined and focussed leading of the team during elaboration;</li>
          <li>- (Re-) Design of your operations;</li>
          </ul></div>
        <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
        <p className='p-5'>Together with you and your team we define and analyse the relevant drivers of the processes. In workshops we (re-)design your 
          processes by eliminating, relocating and/or inserting process steps. We do as many iterations of this as needed that everybody is convinced to have 
          found the best solution. Our job is to moderate the workshops, to enable unconventional thinking, to ask critical questions, and to bring in new ideas. 
          The process design will be completed with a consistent and detailed process documentation.</p>

        
</div>
</div>
  )
}

export default Process_Design