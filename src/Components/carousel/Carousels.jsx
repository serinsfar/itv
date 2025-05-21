import React, { useState, useEffect, useRef } from 'react';
 // Import useState
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import axios from 'axios'; // 

import infrastructure from '../../assets/infrastructure.png';
import logo from '../../assets/logo.png';
import graph from '../../assets/neue_grafik_automation.png'

import serin from '../../assets/Serin.jpg'
import { Link } from 'react-router-dom';




export const newsData = [
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
    const swiperRef = useRef(null);
    /*const [newsData, setNewsData] = useState([]);*/
    const [loading, setLoading] = useState(true);
    const [expandedItems, setExpandedItems] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);

    /*useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/news');
                setNewsData(res.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);
    if (loading) {
        return <div className="text-center py-20">Loading news...</div>;
    }
    if (newsData.length === 0) {
        return <div className="text-center py-20">No news available.</div>;
    }
    if (!Array.isArray(newsData)) {
        return <div className="text-center py-20">Invalid data format.</div>;
    }   */
 
    return (
 <div className="bg-light py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-left mb-16">News</h1>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={true}
          className="w-full"
        
        >
          {newsData.map(({ id, title, content, imageUrl }) => (
            <SwiperSlide key={id}>
              <div className="group relative overflow-hidden h-[500px] rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition duration-300 ease-in-out flex items-end p-4">
                  <div>
                    <h3 className="text-white text-lg font-semibold">{title}</h3>
                    <p className={`text-white text-sm my-2 ${!expandedItems[id] ? 'line-clamp-2' : ''}`}>
                      {content}
                    </p>
            
              <Link
              to={`/news/${id}`}
              className=" mt-auto self-start transition-colors py-1 px-5 me-2 mb-2 text-sm primary-btn"
            >
              Read More
            </Link>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>


    );
}       

export default VerticalCarousel;


