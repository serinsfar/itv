import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import { NavLink, useLocation } from "react-router-dom";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const VerticalCarousel = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedItems, setExpandedItems] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);
    const { i18n } = useTranslation();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const language = i18n.language === 'DE' ? 'de' : 'en';
                const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/news/public/list?language=${language}`;
                const response = await axios.get(apiUrl);
                
                // Transform API response to match component's data structure
                const transformedData = response.data.map(item => ({
                    id: item.id,
                    title: item.title,
                    content: item.body,
                    imageUrl: item.image_url,
                }));
                
                setNewsData(transformedData);
            } catch (error) {
                console.error('Error fetching news:', error);
                setNewsData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [i18n.language]);
    if (loading) {
        return (
            <div className="bg-light pt-12 pb-3">
                <h1 className="container text-3xl font-bold font bold mb-16">News</h1>
                <div className="container items-center start-2/3 row-span-5 lg:max-w-[1324px] mx-auto md:max-w-[700px]">
                    <div className="flex items-center justify-center mb-10 px-2 w-full">
                        <p className="text-lg">Loading news...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!newsData || newsData.length === 0) {
        return (
            <div className="bg-light pt-12 pb-3">
                <h1 className="container text-3xl font-bold font bold mb-16">News</h1>
                <div className="container items-center start-2/3 row-span-5 lg:max-w-[1324px] mx-auto md:max-w-[700px]">
                    <div className="flex items-center justify-center mb-10 px-2 w-full">
                        <p className="text-lg">No news available</p>
                    </div>
                </div>
            </div>
        );
    }

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
                        <div className={`text-white text-sm my-2 ${!expandedItems[id] ? 'line-clamp-2' : ''}`}>
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                          </ReactMarkdown>
                        </div>
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
