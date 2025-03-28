import React from 'react'
import infraImg from '../../../assets/infrastruktur2.jpg';
import Infrastructure from './Infra';

const Test_Management = () => {
  return (
    <div className='grid grid-cols-5'>
    <Infrastructure />
                                         
<div className='container pl-45 col-start-2 col-span-5 pb-10'>
<h1 className='pt-20 text-3xl font-bold text-left'>Test Management</h1>
<div className='py-20'>
<img src ={infraImg} alt=""/>
</div>
<p className='p-5'>Many companies are aware of the dependency of software and focus actively on an enhanced quality of their 
    software systems and their process of developing software. Frictionless operations and processes in companies or organisations 
    are depending extensively on the reliability of their software systems. The quality of software in technical and commercial systems 
    is one of the essential key performance indicators (KPI) for successful products or enterprises. One way to reach high quality is to 
    systematically test and audit the developed software. The expected benefit will be reached when the software is tested against your requirements.</p>
     <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
     <div className='p-5'>
      <ul>
         
          <li>- Independent test management increases software quality;</li>
          <li>- We support you exactly there, where you need it – dependent on your own resources;</li>
          <li>- Consistent documentation of tests;</li>
          <li>- Defined method by using well known standards like the &quot;V-model&quot;;</li>
          </ul></div>
        <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
        <p className='p-5'>For the complete test process we supply active and trustful support and assistance for producers and suppliers of software as well as purchasers and procurement managers for individual software products or parts of them:</p>
        <ul>
         
         <li>- Test management;</li>
         <li>- Test plan;</li>
         <li>- Test application and execution;</li>
         <li>- Defined method by using well known standards like the &quot;V-model&quot;;</li>
         </ul>
         <p>ITV resp. our experienced collaborators are qualified to exercise the functions of a Certified Tester, Advanced Level, according to the international qualification scheme called ISTQB (International Software Testing Qualifications Board).</p>
</div>
</div>
  )
}

export default Test_Management