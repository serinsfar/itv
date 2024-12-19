import React from 'react'
import map from '../../assets/map.png'
import { GrUserExpert } from "react-icons/gr";
import { FadeUp } from '../Hero/Hero';
import { motion } from "framer-motion";
import { AiOutlineSolution } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { FaBuildingUser } from "react-icons/fa6";
const ChooseUs = () => {
  return (
    <section className='bg-white'>
    <div className='container py-14 md:py-24
     grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
      {/*Banner Image*/}
        <div className='flex justify-center md:justify-start'>
            <img src={map} alt=""
            className=' w-[450px] md:max-w-[550px] object-cover drop-shadow pt-32'
            />
        </div>
    {/*Banner Text*/}
    <div className='flex flex-col justify-center'>
      <div className='text-center md:text-left space-y-12'>
        <h1 className='text-3xl md:text-4xl font-bold !leading-snug'>
          Why Choose Us
        </h1>
        <div className='flex flex-col gap-6'>
          <motion.div
          /* variants={FadeUp(0.1)}
          initial="initial"
          whileInView={"animate"}
          viewport={{once:true}} */
           className='flex items-center gap-4 p-6 bg-light rounded-2xl {/*hover:bg-white duration-300 hover:shadow-2xl*/} text-black'>
          <GrUserExpert className='text-2xl'/>
          <p className='text-lg'>Over 30 years of experience</p>
          </motion.div>
          <motion.div
          /*variants={FadeUp(0.3)}
          initial="initial"
          whileInView={"animate"}
          viewport={{once:true}}*/
           className='flex items-center gap-4 p-6 bg-light rounded-2xl {/*hover:bg-white duration-300 hover:shadow-2xl*/} text-black'>
          <AiOutlineSolution className='text-2xl'/>
          <p className='text-lg'>Tailored Solutions</p>
          </motion.div>
          <motion.div
          /*variants={FadeUp(0.5)}
          initial="initial"
          whileInView={"animate"}
          viewport={{once:true}}*/
           className='flex items-center gap-4 p-6 bg-light rounded-2xl {/*hover:bg-white duration-300 hover:shadow-2xl*/} text-black'>
          <GrTechnology className='text-2xl'/>
          <p className='text-lg'>Cutting-Edge Technology</p>
          </motion.div>
          <motion.div
          /*variants={FadeUp(0.6)}
          initial="initial"
          whileInView={"animate"}
          viewport={{once:true}}*/
           className='flex items-center gap-4 p-6 bg-light rounded-2xl {/*hover:bg-white duration-300 hover:shadow-2xl*/} text-black'>
          <FaBuildingUser className='text-2xl'/>
          <p className='text-lg'>Trusted by Industry Leaders</p>
          </motion.div>
        </div>
        
      </div>
      
    </div>
    </div>
    </section>
  )
}

export default ChooseUs