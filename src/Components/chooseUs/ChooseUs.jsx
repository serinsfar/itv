import React, { useState } from "react";
import map from "../../assets/map.png";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { FaBuildingUser } from "react-icons/fa6";
import position_icon from "../../assets/location-mark.png";
import { useTranslation } from "react-i18next";

const ChooseUs = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      icon: <GrUserExpert className="text-2xl" />,
      title: t("Over 30 years of experience"),
      details: "With over three decades in the industry, we bring unmatched expertise and deep-rooted knowledge to every project. Our longevity is a testament to our reliability, quality, and continuous innovation.",
    },
    {
      icon: <AiOutlineSolution className="text-2xl" />,
      title: t("Tailored Solutions"),
      details: "We understand that every business is unique. Our team works closely with each client to develop customized solutions that address specific needs, ensuring optimal results and long-term success.",
    },
    {
      icon: <GrTechnology className="text-2xl" />,
      title: t("Cutting-Edge Technology"),
      details: "We leverage the latest technologies and tools to keep you ahead of the curve. From automation to AI integration, our tech-driven approach enhances efficiency, accuracy, and scalability.",
    },
    {
      icon: <FaBuildingUser className="text-2xl" />,
      title: t("Trusted by Industry Leaders"),
      details: "Leading organizations across various sectors rely on our expertise. Our proven track record of delivering quality and consistency has earned us the trust of top-tier clients worldwide.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 ">
        {/* Banner Image */}
        <div className="relative flex justify-center md:justify-start ">
          <img src={map} alt="Map" className="w-[450px] md:max-w-[550px] object-cover drop-shadow pt-32" />
          <img src={position_icon} alt="Position Icon" className="absolute top-[53%] left-[50%] w-5 h-5 transform -translate-x-1/2 -translate-y-1/2" />
          <img src={position_icon} alt="Position Icon" className="absolute top-[48%] left-[46%] w-5 h-5 transform -translate-x-1/2 -translate-y-1/2" />
          <img src={position_icon} alt="Position Icon" className="absolute top-[56%] left-[40%] w-5 h-5 transform -translate-x-1/2 -translate-y-1/2" />
          <img src={position_icon} alt="Position Icon" className="absolute top-[50%] left-[42%] w-5 h-5 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center "onMouseLeave={() => toggleAccordion(null)}>
          <div className="text-center md:text-left space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold !leading-snug">Why Choose Us</h1>
            <div className="flex flex-col gap-4 ">
              {accordionData.map((item, index) => (
                <div key={index} className={`p-4 bg-light rounded-2xl text-black transition-all  ease-in-out hover:bg-white hover:scale-5 duration-200 hover:shadow-xl ${activeIndex === index ? "bg-white shadow-2xl" : ""}`}>
                  <div className="flex items-center h-12 justify-between cursor-pointer" onClick={() => toggleAccordion(index)} >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <p className="text-2xl">{item.title}</p>
                    </div>
                    <span className={`transition-transform duration-300 ease-in-out transform text-primary font-bold ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  <div className={`overflow-hidden transition-max-height duration-300 ease-in-out  ${activeIndex === index ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                    <p className="text-xl text-gray-700" >{item.details}</p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
