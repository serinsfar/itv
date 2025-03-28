import React from 'react'
import infraImg from '../../../assets/infrastruktur2.jpg';
import Infrastructure from './Infra';

function System_Arch() {
  return (

    <div className='grid grid-cols-5'>
      <Infrastructure />
                                           
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
  <h1 className='pt-20 text-3xl font-bold text-left'>System Architecture</h1>
  <div className='py-20'>
  <img src ={infraImg} alt=""/>
  </div>
  <p className='p-5'>Every system requires a certain IT infrastructure. For a replacement it is therefore fundamental, 
    to define the implementation environment already prior to the tender. That’s why it is, from our point of view, important to elaborate a system architecture.</p>
       <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
       <div className='p-5'>- Improved data flows;
        <ul>
           
            <li>- Independent view on your architecture of software and hardware components;</li>
            <li>- Bringing in the experience of many other projects;</li>
            <li>- No uncontrolled redundancies;</li>
            <li>- Experts define the best fitting architecture for your needs;</li>
            </ul></div>
          <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
          <p className='p-5'>In a first step we analyse and describe together with you and your team the existing environment. 
            With this analysis we elaborate, how a future architecture, which fits on your requirements, should look like. 
            The analysis can also be used to optimise your existing system architecture. The newly defined architecture will be documented in text and graphs.
  </p>
</div>
</div>
  )
}

export default System_Arch