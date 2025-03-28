import React from 'react'
import Data from '../../Services/Data/Data';
import dataImg from '../../../assets/daten2.jpg';
function Metadata() {
  return (
  
   <div className='grid grid-cols-5'>
          <Data/> 
     <div className='container pl-45 col-start-2 col-span-5'>
        <h1 className='pt-20 text-3xl font-bold text-left'>Metadata</h1>
        <div className='py-20'>
        <img src ={dataImg} alt=""/>
        </div>
        <p className='p-5'>Metadata describing your (geo-) data are needed to better administrate, actualise, and document your data and much more.
             The necessity of metadata is well acknowledged by a wide circle of persons. With the norm 19115:2003 published by the ISO, 
             the guidelines how to deal with metadata for geoinformation is given</p>
             <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
             <p className='p-5'>We support you focused on the result, adapted to your special needs and always with an external point of view.
                 The support is given by an experienced, independent team of consultants. You get results out of one hand ranging from concrete 
                recommendations over detailed action plans up to an implemented system.</p>
                <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
                <div className='p-5'>
                <p >We have defined a significant part of the Swiss Metadata Model and established the respective Swiss standard. Moreover we accompanied many implementations. This know-how can be beneficial for you.</p>

                        <p className='pt-4'>We offer the following services:</p>
                        <ul className='p-2'>
                        
                        <li>- Analysis of your requirements with regard to metadata;</li>
                        <li>- Mapping your requirements to ISO 19115:2003;</li>
                        <li>- Establishment of a concept for your metadata system;</li>
                        <li>- Specification, tender documentation and evaluation of the best fitting metadata system;</li>
                        </ul>

                        </div>
                        
     </div>
    </div>
      
  )
  
}

export default Metadata