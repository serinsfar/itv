import React from "react";
import airplane from "../../assets/plane.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const FadeUp = (delay = 0) => {
  return {
    initial: {
      opacity: 0,
      y: 10, // Element starts 10px below
    },
    animate: {
      opacity: 1,
      y: 0, // Element moves to its original position
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-light overflow-hidden relative z-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Left Section */}
        <div className="flex flex-col justify-center py-14 md:py-0 sm:z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold leading-snug"
            >
              {t("ITV CONSULT AG")}
              <div>
                <h3 className="mt-1 leading-normal">
                  {t("Take off into the Future")}
                </h3>
              </div>
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <Link to="contact_Us">
                <button className="primary-btn flex items-center gap-2 mt-2">
                  {t("Contact Us")}
                  <IoIosArrowRoundForward
                    className="text-xl group-hover:translate-x-2 group hover:-rotate-45 duration-300"
                  />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Section with Blob */}
        <div className="relative flex justify-center items-center">
          {/* Blob SVG */}
          <motion.svg
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[1200px] h-[1500px] max-w-none z-auto "
          >
            <path
              fill="#ffffff"
              d="M414,287.5Q388,335,361,390Q334,445,273,439Q212,433,154,420Q96,407,81,349Q66,291,88,246.5Q110,202,119.5,157Q129,112,175,110Q221,108,261,107Q301,106,344.5,125.5Q388,145,414,192.5Q440,240,414,287.5Z"
            />
          </motion.svg>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={airplane}
            alt="Airplane"
            className="relative z-10 max-w-[750px] ml-2 md:ml-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
