import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const VerticalCarousel = () => {
  const swiperRef = useRef(null);

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedItems, setExpandedItems] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { i18n } = useTranslation();

  const handlePrev = () => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const language = i18n.language === 'DE' ? 'de' : 'en';
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/news/public/list?language=${language}`;

        const response = await axios.get(apiUrl);

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
        <h1 className="container text-3xl font-bold mb-16">News</h1>
        <div className="container lg:max-w-[1324px] md:max-w-[700px] mx-auto">
          <LoadingIndicator size="large" text="Loading news..." />
        </div>
      </div>
    );
  }

  if (!newsData.length) {
    return (
      <div className="bg-light pt-12 pb-3">
        <h1 className="container text-3xl font-bold mb-16">News</h1>
        <div className="container flex justify-center">
          <p className="text-lg">No news available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light pt-12 pb-3">
      <h1 className="container text-3xl font-bold mb-16">News</h1>

      <div className="container lg:max-w-[1324px] md:max-w-[700px] mx-auto">
        <div className="relative w-full flex items-center justify-center">

          {/* PREV BUTTON */}
          <button
            onClick={handlePrev}
            disabled={isBeginning}
            aria-label="Previous slide"
            className={`absolute left-3 top-1/2 -translate-y-1/2 z-20
              bg-white/90 rounded-full shadow-lg p-2 border border-gray-200
              transition-all
              ${isBeginning ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white'}
            `}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={handleNext}
            disabled={isEnd}
            aria-label="Next slide"
            className={`absolute right-3 top-1/2 -translate-y-1/2 z-20
              bg-white/90 rounded-full shadow-lg p-2 border border-gray-200
              transition-all
              ${isEnd ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white'}
            `}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <Swiper
            modules={[Autoplay]}
            loop={false}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerGroup={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {newsData.map(({ id, title, content, imageUrl }) => (
              <SwiperSlide key={id}>
                <Link 
                  to={`/news/${id}`}
                  className="block"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="group relative overflow-hidden h-[300px] w-full max-w-[350px] mx-auto rounded-lg shadow-lg cursor-pointer">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-contain rounded-lg"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-4">
                      <div>
                        <h3 className="text-white text-base font-semibold">
                          {title}
                        </h3>

                        <div className="text-white text-sm my-2 line-clamp-2">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                          </ReactMarkdown>
                        </div>

                        <span className="primary-btn py-1 px-5 text-xs inline-block">
                          Read More
                        </span>
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
  );
};

export default VerticalCarousel;
