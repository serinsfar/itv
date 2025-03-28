import React from 'react'
import { motion } from "framer-motion";
import { IoEarth } from "react-icons/io5";
import { MdAirplanemodeActive } from "react-icons/md";
import { Link } from "react-router-dom";
import dcs from "../assets/dcsLogo.png";
import { useTranslation } from "react-i18next";

const BusinessData = [
  
  {
    id: 1,
    title: "Spatial Data Infrastructure",
    link: "/SDI",
    icon: <IoEarth />,
    delay: "0.5",
  },
  {
    id: 2,
    title: "Aeronautical Information Management",
    link: "/AIM",
    icon: <MdAirplanemodeActive />,
    delay: "0.5",
  },
  {
    id: 3,
    title: "DCS",
    link: "/DCS",
    icon: <img src={dcs} alt="" className="icon-style w-9" />,
    delay: "0.5",
  },
];

const BusinessUnit = () => {
    const { t } = useTranslation();
  return (
    <section className="bg-white">
      <div className="container pt-12">
        <h1 className="text-3xl font-bold text-left">{t(
          "Business Units")}</h1>
        <p className="text-xl font-normal pt-14 pb-10">
          {t("Our business units deliver innovative solutions in aeronautical and geospatial information management")}{t("combining expertise in data, infrastructure, and processes to meet industry needs.")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 flex-1">
          {BusinessData.map((business) => (
            <motion.div
              key={business.id}
              className="bg-light rounded-2xl flex flex-col gap-4 items-center p-4 py-7 hover:bg-white hover:scale-5 duration-300 hover:shadow-xl"
            >
              <Link to={business.link} className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{business.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">
                  {t(business.title)}
                </h1>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnit;
