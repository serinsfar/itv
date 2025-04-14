import React from 'react'
import { FaBook, FaDatabase, FaProjectDiagram } from 'react-icons/fa';
import check from '../../../assets/check.png'
import Data from '../../Services/Data/Data';
import { useTranslation } from "react-i18next";
import datamodel from '../../../assets/datamodel.jpg'
const dataModelParts = [
  {
    icon: <FaBook className="text-secondary text-2xl" />,
    title: 'Semantic Description',
    description:
      'Description of the real world by subject specialists in a common language, understandable for everybody.',
  },
  {
    icon: <FaDatabase className="text-secondary text-2xl" />,
    title: 'Catalogue of Objects',
    description:
      'Definition of each element (class and attribute), with data capturing rules. Serves as interface between semantics and conceptual model.',
  },
  {
    icon: <FaProjectDiagram className="text-secondary text-2xl" />,
    title: 'Conceptual Data Model',
    description:
      'Formal representation of the real world in graphs and structured text, created by modeling specialists.',
  },
];
//2162219311 data modeling id//
const modelBenefits = [
  'Independent external view through our consultants',
  'Defined method to elaborate the different stages of the model',
  'Support at the stage, when you need it',
];

const Data_Modeling = () => {
      const { t } = useTranslation();
  
  return (
    <div className='grid grid-cols-7 mb-10'> 
             <Data/> 
    <div className="pt-10 container pl-45 col-start-2 col-span-5 ">
              <h1 className='pt-10 text-3xl font-bold text-left'>Data Medeling</h1>
           <div className='grid xl:grid-cols-2 gap-8 place-items-center py-10'>
           <div className=' border-[3px] border-solid border-gray-200 shadow-sm rounded-lg '>
           <img className='p-4' src ={datamodel} alt=""/>
           </div>
           <div className='mb:pl-12'>
                <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-2'>The Foundation of <br /> <span className='text-secondary font-normal'>Structured Data</span></div>
                  <p>
                  A data model is composed of several interrelated components that together provide a clear, structured understanding of real-world information.
                   It begins with a semantic description, where subject specialists describe the real world using plain, common language that is easily understood
                    across disciplines. This is followed by a catalogue of objects, which defines each element—such as classes and attributes—along with data capturing rules. 
                    This catalogue, developed in collaboration between domain experts and modeling specialists, serves as the crucial interface between semantics and the formal structure of the model.
                     Finally, the conceptual data model represents the real world using structured text and diagrams, formalized by modeling experts, providing the foundation for implementation and system integration.


                  </p>
           </div>
            </div>

    <h2 className="text-3xl font-bold mb-10 text-left "> Data Model</h2>

    {/* Parts of the Data Model */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {dataModelParts.map((part, i) => (
        <div key={i} className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start">
          <div className="mt-1">{part.icon}</div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{part.title}</h3>
            <p className="text-gray-600">{part.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Benefits */}
    <h2 className="text-2xl font-bold mb-6 text-left">Your Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {modelBenefits.map((benefit, i) => (
        <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
          <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
          <p className="text-gray-700">{benefit}</p>
        </div>
      ))}
    </div>

    {/* Service Description */}
    <h2 className="text-2xl font-bold mb-4 text-left">Our Service</h2>
    <p className="text-gray-600 leading-relaxed max-w-4xl">
      We support and guide you and your team in every phase of the data modelling,
      either by moderating workshops or with descriptions established by us.
    </p>
  </div>
  </div>
  )
}

export default Data_Modeling