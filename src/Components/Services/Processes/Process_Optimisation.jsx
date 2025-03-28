import React from 'react'
import Processes from '../../Services/Processes/Processes'
import processes from '../../../assets/processe.jpg'

const Process_Optimisation = () => {
  return (
    <div className='grid grid-cols-5'>
    <Processes />
                                         
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
<h1 className='pt-20 text-3xl font-bold text-left'>Process Optimization</h1>
<div className='py-20'>
<img src ={processes} alt=""/>
</div>
<p className='p-5'>To save costs, to alleviate the daily work and make it more efficient, it makes sense to investigate in the processes, to identify the potential of improvement 
  and to adapt the workflow. Doing that, process steps were eliminated, relocated and/or new ones inserted. An optimised process is not implicitly a shorter process, but the workflow and the sequence of process steps is easier to work with and therefore the process is more efficient. During implementation it is important, that it will be realised down to the bottom of the organisation. Only with that the whole potential of the improvement can be used.</p>
     <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
     <div className='p-5'>
      <ul>
         
          <li>- Cost efficiency through simplified and more efficient work flows;</li>
          <li>- Satisfied employees through better coordinated process steps;</li>
          <li>- External point of view through our independent consultants;</li>
          </ul></div>
        <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
        <p className='p-5'>We proceed along the following phases:</p>
        <div className='p-5'>
      <ul>
         
          <li>- Process documentation;</li>
          <li>- Identification of strengths, weaknesses and the potential of improvement together with your team;</li>
          <li>- Design and description of the new processes;</li>
          <li>- Implementation of the new processes in your organization as coach and enabler or as project manager;</li>

        </ul>
</div>
</div>
</div>
  )
}

export default Process_Optimisation