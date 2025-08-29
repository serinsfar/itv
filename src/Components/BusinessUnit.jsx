import React from 'react';
import { IoEarth } from "react-icons/io5";
import { MdAirplanemodeActive } from "react-icons/md";
import { Link } from "react-router-dom";
import dcs from "../assets/dcsLogo.png";
import { useTranslation } from "react-i18next";

const BusinessData = [
  { id: 1, title: "Spatial Data Infrastructure", link: "/SDI", icon: <IoEarth />, delay: "0.5" },
  { id: 2, title: "Aeronautical Information Management", link: "/AIM", icon: <MdAirplanemodeActive />, delay: "0.5" },
  { id: 3, title: "DCS", link: "/DCS", icon: <img src={dcs} alt="" className="icon-style w-9" />, delay: "0.5" },
];

const BusinessUnit = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white">
      <div className="container pt-10">
        <h1 className="text-3xl font-bold text-left">{t("Business Units")}</h1>

        <p className="text-xl font-normal pt-14 pb-10">
          {t("Our business units provide forward-looking consulting and innovative solutions in the fields of aeronautical and geospatial information management, combining expertise in data, infrastructure and processes to meet the needs of the industry.")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-5">
          {BusinessData.map((business) => (
            <Link
              key={business.id}
              to={business.link}
              className="bg-light rounded-2xl flex flex-col gap-4 items-center p-4 py-7 hover:bg-white hover:scale-105 duration-300 hover:shadow-xl text-center h-full"
            >
              <div className="text-4xl mb-4">{business.icon}</div>
              <h1 className="text-lg font-semibold px-3">
                {t(business.title)}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnit;
