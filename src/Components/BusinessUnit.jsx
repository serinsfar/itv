import { motion } from "framer-motion";
import { IoEarth } from "react-icons/io5";
import { MdAirplanemodeActive } from "react-icons/md";
import { BsClipboard2DataFill } from "react-icons/bs";
import { FadeUp } from "./Hero/Hero";
import dcs from '../assets/dcsLogo.png';

const BusinessData = [
  {
    id: 1,
    title: "Spatial Data Infrastructure",
    link: "#",
    icon: <IoEarth />,
    delay: "0.5",
  },
  {
    id: 2,
    title: "Aeronautical Information Management",
    link: "#",
    icon: <MdAirplanemodeActive />,
    delay: "0.5",
  },
  {
    id: 3,
    title: "DCS",
    link: "#",
    icon: <img src={dcs} alt="" className="icon-style w-9" />,
    delay: "0.5",
  },
];

// Adjusting the slide left motion for smoother animation
const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6, // Increased duration for smoother transition
        delay: delay,
        ease: "easeOut", // A smoother ease
      },
    },
  };
};

// Smooth motion from right
export const fromRight = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80, // Lower stiffness for smoother motion
        damping: 15, // Adding damping for smoother ending
        duration: 0.8, // Slower duration for smooth transition
        delay: delay,
        ease: "easeOut", // Use easeOut for smoother exit
      },
    },
  };
};

const BusinessUnit = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-12">
        <motion.h1 
          /*variants={fromRight(0.4)}
          initial="initial"
          animate="animate"*/
        className="text-3xl font-bold text-left pb-20">
          Business Units
          <motion.p
            /*variants={fromRight(0.4)}
            initial="initial"
            animate="animate"*/
            className="text-xl font-normal pt-14"
          >
            Our business units deliver innovative solutions in aeronautical and
            geospatial information management, combining expertise in data,
            infrastructure, and processes to meet industry needs. We ensure
            efficient, reliable, and compliant management of critical systems for
            our clients.
          </motion.p>
        </motion.h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 pl-24 flex-1">
          {BusinessData.map((business) => (
            <motion.div
              key={business.id}
              /*variants={SlideLeft(business.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }} */
              className="bg-light rounded-2xl flex flex-col gap-4 items-center {*justify-center*} p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{business.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {business.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnit;
