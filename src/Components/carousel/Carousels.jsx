import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import { NavLink, useLocation } from "react-router-dom";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import axios from 'axios'; // 

import infrastructure from '../../assets/infrastructure.png';
import logo from '../../assets/logo.png';
import graph from '../../assets/neue_grafik_automation.png'

import serin from '../../assets/Serin.jpg'
import { Link } from 'react-router-dom';
import bol from '../../assets/BOL.jpg';
import dcs from '../../assets/dcsLogo.png';
import GAIM from '../../assets/GAIM_2024.png'
import icao from '../../assets/icao.png'
import datacat from '../../assets/datacat.png'




export const newsData = [
    {
        id: 1,
        title: "Pension Roland Bolliger",
        content: "At the end of April, our long-standing employee Roland Bolliger took his well-deserved retirement. Roland Bolliger was an important pillar of our consulting activities during his almost 30 years at ITV Consult. He worked on the projects entrusted to him with passion, concentration and precision. High quality was not just a buzzword for him, he lived it. We would like to thank Roland Bolliger for his many years of service and loyalty and wish him all the best for the future. ",
        imageUrl: bol,
    },
    {
        id: 2,
        title: "Grosse Änderungen mit DCS 3.0 !",
        content: "A new AIM Organisation Module has been introduced, which will serve as the new source of organisation data and responsibility. Thanks to everyone who made this happen !",
        imageUrl: dcs,
    },
    {
        id: 3,
        title: "Festanstellung Serin Sfar Chaabane",
        content: "Ms Serin Sfar Chaabane began a one-year professional internship with us at the end of July 2024, primarily to support our Swiss Aeronautical Data Collection Service (DCS) in its operational activities. At the same time, she is studying for a master's degree in Business Information Systems at the FHNW (University of Applied Sciences and Arts Northwestern Switzerland, Olten). Last year, Ms Sfar also took on additional tasks within the DCS and for ITV.",
        imageUrl: serin,
    },
    {
        id: 4,
        title: "Global AIM Lima 2024",
        content: "Read our presentation regarding the \"ICAO AIM Data Catalogue\" at the Global AIM 2024 here. If you have any questions about the AIM Data Catalogue, please contact us. For further information see ICAO AIM Data Catalogue",
        imageUrl: GAIM,
    },
    {
        id: 5,
        title: "Differences between ICAO and EASA Aeronautical Data Catalogue",
        content: "Differences between ICAO and EASA Aeronautical Data Catalogue The ICAO Aeronautical Data Catalogue is defined in the ICAO Doc 10066 (PANS-AIM) Appendix 1. The EASA Aeronautical Data Catalogue is defined in the Regulation (EU) 2017/373 Annex III (Part-ATM/ANS.OR) Appendix 1 (subject to change as per EASA NPA 2023-08). The EASA Aeronautical Data Catalogue is based on the content of ICAO PANS-AIM Appendix 1.",
        imageUrl: icao,
    },
    {
        id: 6,
        title: "Implementing automation and digitalisation in the aeronautical data chain",
        content: "Since the Amendment 40 to ICAO Annex 15 in 2018 was introduced by ICAO the focus is on implementing automation and digitalisation in the aeronautical data chain to move from a product-centric AIS to a fully digital data-centric AIM environment. ICAO has made a big effort to update all material related to aeronautical data and information and provide improved support to all involved parties in the States to move ahead with this initiative.",
        imageUrl: graph,
    },
    {
        id: 7,
        title: "ICAO AIM Data Catalogue",
        content: "ITV has established an online AIM Data Catalogue based on the ICAO PANS-AIM Appendix 1 to facilitate its usage by civil aviation authorities, air navigation service providers and data originators in the process to implement a fully data-centric AIM environment. Furthermore, we have included a mapping of the data elements to the current version of AIXM 5.1(1) which has been initially developed by EUROCONTROL and further maintained by the AIXM Community. You can find the ICAO AIM Data Catalogue here: https://www.datacat.aero",
        imageUrl: datacat,
    },
];
const VerticalCarousel = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    /*const [newsData, setNewsData] = useState([]);*/
    const [loading, setLoading] = useState(true);
    const [expandedItems, setExpandedItems] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);
 
    return (
 <div className="bg-light pt-12 pb-3">
      <h1 className="container text-3xl font-bold font bold mb-16">News</h1>
      <div className="container items-center start-2/3 row-span-5 lg:max-w-[1324px] mx-auto md:max-w-[700px]">
        <div className="flex items-center justify-center mb-10 px-2 w-full">
        <div className="relative w-full">
          {/* Custom navigation buttons */}
          <button
            ref={prevRef}
            className="swiper-button-prev-custom absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full shadow-lg p-2 transition-all border border-gray-200"
            tabIndex={0}
            aria-label="Previous slide"
            style={{ transform: 'translateY(-50%)', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next-custom absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full shadow-lg p-2 transition-all border border-gray-200"
            tabIndex={0}
            aria-label="Next slide"
            style={{ transform: 'translateY(-50%)', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
          </button>
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onSwiper={(swiper) => {
              // Re-assign navigation elements after swiper is initialized
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24, // Reduced space for large screens
              },
            }}
          >
            {newsData.map(({ id, title, content, imageUrl }) => (
              <SwiperSlide key={id}>
                <Link to={`/news/${id}`} onClick={() => window.scrollTo(0, 0)}>
                  <div className="group relative overflow-hidden h-[300px] w-full max-w-[350px] mx-auto rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out">
                    <img src={imageUrl} alt={title} className="w-full h-full object-contain rounded-lg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent flex items-end p-4">
                      <div>
                        <h3 className="text-white text-base font-semibold">{title}</h3>
                        <p className={`text-white text-sm my-2 ${!expandedItems[id] ? 'line-clamp-2' : ''}`}>
                          {content}
                        </p>
                        <button className="primary-btn py-1 px-5 text-xs w-50">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalCarousel;


