import heroImage from '../../assets/home-top.jpg';
import dark_arrow from '../../assets/dark-arrow.png';
import Navbar from '../navbar/Navbar';
import airplane from '../../assets/plane.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import {animate, delay, easeInOut, motion} from "framer-motion";
import { GiDuration } from 'react-icons/gi';

export const FadeUp = (delay = 0) => {
  return {
    initial: {
      opacity: 0,
      y: 10, // Element starts 50px below
    },
    animate: {
      opacity: 1,
      y: 0, // Element moves to its original position
      transition: {
        type: "spring", // Correct capitalization for "spring"
        stiffness: 100, // Correct capitalization for "stiffness"
        damping: 20, // Optional: Adds smoothness to the spring
        duration: 0.5, // Time it takes to complete the animation
        delay: delay, // Delay before the animation starts
        ease: "easeInOut", // Smooth ease effect
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Left Section */}
        <div className="flex flex-col justify-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
            variants={FadeUp(0.6)}
            initial ="initial"
            animate = "animate"
             className="text-3xl lg:text-5xl font-bold leading-snug">
              ITV CONSULT AG
              <div>
            <h3 className="mt-1 leading-normal">
                Take off into the <span className="text-secondary">Future</span>
            </h3>
            </div>
            </motion.h1>
            <motion.div 
            variants={FadeUp(0.8)}
            initial= "initial"
            animate = "animate"
            className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 mt-2">
                Get Started
                <IoIosArrowRoundForward
                  className="text-xl group-hover:translate-x-2 group hover:-rotate-45 duration-300"
                />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Section with Blob */}
        <div className="relative flex justify-center items-center">
          {/* Blob SVG */}
          <motion.svg
          initial = {{ x:-50, opacity: 0}}
          animate= {{ x: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut"}}
                      
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-[1200px] h-[1500px] max-w-none "
          >
          <path
            fill="#ffffff"
            d="M414,287.5Q388,335,361,390Q334,445,273,439Q212,433,154,420Q96,407,81,349Q66,291,88,246.5Q110,202,119.5,157Q129,112,175,110Q221,108,261,107Q301,106,344.5,125.5Q388,145,414,192.5Q440,240,414,287.5Z"
           />
        </motion.svg>
        <motion.img
        initial = {{ x: 50, opacity: 0}}
        animate= {{ x: 0, opacity: 1}}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut"}}
        src={airplane} alt="" className="relative z-10 max-w-[750px] ml-2 md:ml-10" />

 
        </div>
      </div>
    </section>
  );
};

export default Hero;



   /* <div
      className="w-screen min-h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroImage})`,
      }}
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-semibold">ITV CONSULT AG</h1>
        <h3 className="mt-3 mx-auto max-w-2xl leading-relaxed">Take off into the future</h3>
        <button className="btn mt-5 px-6 py-3  hover:bg-secondary text-white font-medium flex items-center space-x-2 rounded">
          Explore more
          <img src={dark_arrow} alt="" className="ml-2" />
        </button>
      </div>
    </div>*/
