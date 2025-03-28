import React from 'react'
import Data from '../../Services/Data/Data';
import dataImg from '../../../assets/daten2.jpg';
import { useTranslation } from "react-i18next";

const Data_Modeling = () => {
      const { t } = useTranslation();
  
  return (
    <div className='grid grid-cols-5'>
    <Data/> 
<div className='container pl-45 col-start-2 col-span-5'>
  <h1 className='pt-20 text-3xl font-bold text-left'>Data Modeling</h1>
  <div className='py-20'>
  <img src ={dataImg} alt=""/>
  </div>
  <p className='p-5'>{t("A data model consists of the following parts:")}
- Description of the semantics in plain language text: Description of the real world by subject specialists in a common language, understandable for everybody;
- Catalogue of objects: Definition of each element (class and attribute), complemented with data capturing rules, done by subject specialists together with modelling specialists. The catalogue of objects is the interface between semantic description and conceptual data model;
- Conceptual data model, described in graphs and structured text: Image of the real world in a formal language, established by modelling specialists;</p>
       <h2 className=' pt-5 text-3xl font-bold text-left'>Your benefits</h2>
       <div className='p-5'>- Improved data flows;
        <ul>
           
            <li>- Independent external view trough our consultants;</li>
            <li>- Defined method to elaborate the different stages of the model;</li>
            <li>- Support at the stage, when you need it;</li>
            </ul></div>
          <h2 className=' pt-5 text-3xl font-bold text-left'>Our Services</h2>
          <p className='p-5'>In a first step we analyse the actual data flows and identify strengths, weaknesses and the potential of improvement, 
            always taking into account the actual and planned activities. With this analysis we establish possibilities for an optimised data organisation and discuss it with you.
             The best solution will be chosen and we coach the technical implementation. You and your team are fully involved in every phase.</p>
</div>
</div>
  )
}

export default Data_Modeling