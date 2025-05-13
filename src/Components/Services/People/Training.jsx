import React from 'react'
import people from '../../../assets/people.jpg';
import { FaChalkboardTeacher, FaUsersCog, FaBookOpen } from 'react-icons/fa';
import check from '../../../assets/check.png';
import Peoplee from './Peoplee';
const trainingPhases = [
  {
    icon: <FaChalkboardTeacher className="text-secondary text-2xl" />,
    title: 'Tailored Content Delivery',
    description:
      'We prepare relevant topics so they are clearly understood by all participants. We prioritize clarity and context-driven explanations.',
  },
  {
    icon: <FaUsersCog className="text-secondary text-2xl" />,
    title: 'Interactive Learning',
    description:
      'Our trainings include a balance of tutorials, group work, and real-world case studies to ensure practical understanding.',
  },
  {
    icon: <FaBookOpen className="text-secondary text-2xl" />,
    title: 'Participant Involvement',
    description:
      'We encourage participants to get involved early — even during preparation — which leads to stronger engagement and better results.',
  },
];

const trainingBenefits = [
  'Focused and customized training aligned to your needs',
  'Reduced training time by targeting only critical and relevant themes',
  'Knowledge transfer from experienced, professional trainers',
];

const Training = () => {
  return (
      <div className="container row-start-2 row-span-5">
      <Peoplee/>
        <h1 className="pt-10 text-3xl font-bold text-left">Training & Knowledge Transfer</h1>

        <div className="grid xl:grid-cols-2 gap-8 place-items-center py-10">
          <div className="border-[3px] border-solid border-gray-200 shadow-sm rounded-lg">
            <img className="p-4" src={people} alt="Training" />
          </div>
          <div className="mb:pl-12">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2">
              Targeted Learning<br />
              <span className="text-secondary font-normal">with Expert-Led Sessions</span>
            </div>
            <p>
              We ensure that complex topics are prepared and presented in a way that every team member can understand and relate to.
              Our training sessions combine hands-on exercises, participant collaboration, and theory in a balanced, engaging manner.
              Involving participants early — even in preparation — is a key factor in making knowledge transfer successful and sustainable.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-left">Our Training Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trainingPhases.map((phase, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-md bg-white border-l-4 border-secondary flex gap-4 items-start"
            >
              <div className="mt-1">{phase.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-left">Your Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {trainingBenefits.map((benefit, i) => (
            <div key={i} className="bg-light p-6 shadow-sm rounded-lg text-center">
              <img src={check} alt="check" className="w-6 h-6 mx-auto mb-4" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-left">Our Services</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          As visiting lecturers at ETH Zurich and instructors in various professional programs,
          we specialize in transforming complex topics into digestible, action-ready knowledge.
          We’re agile and responsive — able to adapt quickly to your training needs and timelines.
        </p>
      </div>
  );
};


export default Training