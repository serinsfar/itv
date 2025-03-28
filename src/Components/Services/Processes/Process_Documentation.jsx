import React from 'react'
import Processes from '../../Services/Processes/Processes'
import processes from '../../../assets/processe.jpg'

const Process_Documentation = () => {
  return (
    <div className='grid grid-cols-5'>
    <Processes />
                                         
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
<h1 className='pt-20 text-3xl font-bold text-left'>Process Documentation</h1>
<div className='py-20'>
<img src ={processes} alt=""/>
</div>
<p className='p-5'>Process documentation is a key factor for all your employees to really know and understand what their daily
   work is about. Only with the same background they can work effectively and efficiently. Furthermore a consistent and detailed process documentation is needed to identify the potential of optimization.</p>
     <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
     <div className='p-5'>
      <ul>
         
          <li>- Your actual processes are documented and the base for optimization is set;</li>
          <li>- The processes are described clearly and transparently and therefore they are understandable for everybody;</li>
          <li>- The process documentation enables all staff member to form an opinion about the actual processes;</li>
          </ul></div>
        <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
        <p className='p-5'>Together with your team we analyse and discuss their daily work and document it with process descriptions and schematic graphs. 
          If needed we elaborate work instructions and key performance indicators of every process and process step.</p>

        
</div>
</div>
  )
}

export default Process_Documentation