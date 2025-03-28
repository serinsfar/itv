import React from 'react'
import Infrastructure from './Infra';
import infraImg from '../../../assets/infrastruktur2.jpg';
const Procurment_System = () => {
  return (
    <div className='grid grid-cols-5'>
    <Infrastructure />
                                         
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
<h1 className='pt-20 text-3xl font-bold text-left'>Procurment of a System</h1>
<div className='py-20'>
<img src ={infraImg} alt=""/>
</div>
<p className='p-5'>The procurement consists of the phases &quot;specification&quot;, &quot;tendering and evaluation&quot; and &quot;implementation&quot;. You decide, which phase (or part of a phase) you hand over to our responsibility.</p>
     <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
     <ul >
         <li>- Consistent and clear specification and tender documentation;</li>
          <li>- Transparent evaluation which resists objections;</li>
          <li>- Depending on your resources we can help you to break peaks in your efforts, e. g. as leader of the implementation project;</li>
          <li>- Our experienced project managers lead you and your team efficiently through the project within the defined schedule and budget;</li>
          <li>- Establishment of the specification as part of the tender documentation;</li>
      </ul>
        <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
      <div>We support you in every above described phase:
      <ul >
         <li>- Establishing the specification;</li>
          <li>- Elaboration of tender documentation;</li>
          <li>- Bringing in the experience of many other projects;</li>
          <li>- Definition of evaluation criteria incl. balancing and evaluation itself; and/or</li>
          <li>- Coach for the implementation or responsible project manager;</li>
      </ul>
      </div>
</div>
</div>
  )
}

export default Procurment_System