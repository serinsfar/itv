import React from 'react'
import infraImg from '../../../assets/infrastruktur2.jpg';
import Infrastructure from './Infra';

const Specification = () => {
      return (
    
        <div className='grid grid-cols-5'>
          <Infrastructure />
                                               
    <div className='container pl-45 col-start-2 col-span-5 pb-10'>
      <h1 className='pt-20 text-3xl font-bold text-left'>Specification</h1>
      <div className='py-20'>
      <img src ={infraImg} alt=""/>
      </div>
      <p className='p-5'>Be it for the procurement of a new system, for the purchase of services or the acquisition of data, you always need a consistent and clear specification of your wishes and requirements.</p>
           <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
            <p>Out of our long-standing experience in establishing specifications we can guarantee, that all relevant aspects are covered, the specification is clearly understood by the supplier, your timely effort is low and therefore you need less resources.</p>
              <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
            <div>Our services in establishing a specification:
            <ul >
               <li>- &quot;Requirements Engineering&quot;: Which are the requirements of your users?;</li>
                <li>- Definition of &quot;Use Cases&quot;;</li>
                <li>- Bringing in the experience of many other projects;</li>
                <li>- Description of functionalities;</li>
                <li>- Establishment of the specification as part of the tender documentation;</li>
            </ul>
            <p>With our background and experience we can translate your user requirements into the suppliers language.</p>
            </div>
    </div>
    </div>

  )
}

export default Specification