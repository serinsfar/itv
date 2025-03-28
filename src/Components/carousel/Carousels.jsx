import React, { useState,useRef } from 'react'; // Import useState
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import infrastructure from '../../assets/infrastructure.png';
import logo from '../../assets/logo.png';
import graph from '../../assets/neue_grafik_automation.png'

import serin from '../../assets/Serin.jpg'

const newsData = [
    {
        id: 1,
        title: "Neue Praktikantin seit Ende Juli",
        content: "End of July, Mrs Serin Sfar Chaabane started a one-year internship at ITV Consult AG. During this internship, Mrs Serin Sfar Chaabane will gain first hands on experience in an important new field of aviation dealing with aeronautical information by using a state-of-the-art aeronautical data collection platform. She is also getting an initial idea of how the aviation data chain works and how individual work steps are carried out. A key part of her work is supporting the operations of the Swiss Aeronautical Data Collection Service (DCS), which ITV provides on behalf of the FOCA using a modern data collection platform with a multilingual helpdesk. With her background in computer science and business informatics, she will also be able to support the further development of the new digital aviation data platform. Serin Sfar Chaabane will also have the opportunity to familiarise herself with all other business areas of ITV Consult. She will also be studying for a Masters degree in Business Information Systems at the FHNW (University of Applied Sciences and Arts Northwestern Switzerland, Olten). ",
        imageUrl: serin,
    },
    {
        id: 2,
        title: "Implementing automation and digitalisation in the aeronautical data chain",
        content: "Since the Amendment 40 to ICAO Annex 15 in 2018 was introduced by ICAO the focus is on implementing automation and digitalisation in the aeronautical data chain to move from a product-centric AIS to a fully digital data-centric AIM environment. ICAO has made a big effort to update all material related to aeronautical data and information and provide improved support to all involved parties in the States to move ahead with this initiative. ITV Consult has engaged from the beginning in supporting ICAO and involved parties to implement automation in the data chain by providing appropriate implementation support and training. ICAO now provides a full suite of material and training to support all parties in a State to move ahead with the implementation of automation. Start small but think big to implement automation and digitalisation in your State. The updated ASBU EUR DAIM Tables allow States to determine their progress in implementing automation in their aeronautical data chain in line with the 7th Edition of the Global Air Navigation Plan (GANP). These tables are very useful for developing an appropriate action plan at State level for implementing automation and digitalisation in the aeronautical data chain. ITV Consult can support all involved parties in each phase of this transition based on hands on experience. If you have any questions on how to address automation of your aeronautical data chain, don’t hesitate to contact our subject matter experts to support you with our expertise or send an email to info@itv.ch.",
        imageUrl: graph,
    },
    {
        id: 3,
        title: "Global Markets React to New Policy",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: infrastructure,
    },
    {
        id: 4,
        title: "Breaking News: Major Event Happens",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: infrastructure,
    },
    {
        id: 5,
        title: "Tech Giant Announces New Product",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: logo,
    },
    {
        id: 6,
        title: "Global Markets React to New Policy",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: infrastructure,
    },
    {
        id: 7,
        title: "Breaking News: Major Event Happens",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: infrastructure,
    },
    {
        id: 8,
        title: "Tech Giant Announces New Product",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: logo,
    },
    {
        id: 9,
        title: "Global Markets React to New Policy",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: infrastructure,
    },
];

const VerticalCarousel = () => {
    return (
        <div className='bg-light pb-12'>
            <div className="container pt-12 bg-light">
                <h1 className="text-4xl font-bold text-left">News</h1>
                <div className="mySwiper h-[900px] w-full  mx-auto overflow-hidden relative my-12 bg-light">
                    <Swiper
                        modules={[Autoplay, Navigation, Scrollbar, Mousewheel]}
                        direction="vertical"
                        slidesPerView={3}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 9000,
                            disableOnInteraction: false,
                        }}
                        scrollbar={{
                            draggable: true,
                            el: '.swiper-scrollbar'
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        mousewheel={{
                            invert: false,
                        }}
                        className="h-full"
                    >
                        {newsData.map((news) => (
                            <SwiperSlide key={news.id} className="px-6">
                                <NewsSlide news={news} /> {/* Use a separate NewsSlide component */}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-scrollbar absolute bottom-0 left-0 w-full h-2 bg-gray-400 rounded"></div>
                </div>
            </div>
        </div>
    );
};

// Create a separate NewsSlide component to manage state for each slide
const NewsSlide = ({ news }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const textRef = useRef(null); // ✅ Fix: useRef is now correctly defined

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex items-center bg-white rounded-lg shadow-lg p-6 h-full flex-col sm:flex-row"> {/* flex-col on small screens, flex-row on larger */}
            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-full aspect-w-4 aspect-h-3 sm:w-40 sm:aspect-auto sm:h-auto"> {/* Adjust image width for small and larger screens */}
                <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="ml-0 mt-32 sm:ml-6 sm:mt-0 flex-1 flex flex-col"> {/* Flex column for text and button */}
                <h3 className="text-xl font-semibold text-gray-900">{news.title}</h3>
                <p className={`text-md text-gray-700 mt-2 ${!isExpanded && 'line-clamp-4 overflow-hidden pl-4'}`}> {/* line-clamp for collapsed state */}
                    {news.content}
                </p>
                {news.content.split('\n').length > 2 && ( // Conditionally render button if content is long enough (adjust condition as needed)
                    <button
                        onClick={toggleExpand}
                        className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                        {isExpanded ? "See Less" : "See More"}
                    </button>
                )}
            </div>
        </div>
    );
};


export default VerticalCarousel;
