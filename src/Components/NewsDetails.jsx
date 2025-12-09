// NewsDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const NewsDetail = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        setLoading(true);
        const language = i18n.language === 'DE' ? 'de' : 'en';
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/news/public/list?language=${language}`;
        const response = await axios.get(apiUrl);
        
        // Find the specific news item by ID
        const item = response.data.find(news => news.id === parseInt(id));
        
        if (item) {
          setNewsItem({
            id: item.id,
            title: item.title,
            content: item.body,
            imageUrl: item.image_url,
          });
        } else {
          setError('News item not found');
        }
      } catch (error) {
        console.error('Error fetching news item:', error);
        setError('Failed to load news item');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id, i18n.language]);

  if (loading) {
    return (
      <div className="py-20 max-w-4xl mx-auto items-center justify-center">
        <p className="text-lg text-center">Loading...</p>
      </div>
    );
  }

  if (error || !newsItem) {
    return (
      <div className="py-20 max-w-4xl mx-auto items-center justify-center">
        <p className="text-lg text-center">{error || 'News item not found'}</p>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-4xl mx-auto items-center justify-center ">
     <h1 className="text-3xl font-bold mb-10">{newsItem.title}</h1>
      <img src={newsItem.imageUrl} alt={newsItem.title} className="group relative overflow-hidden max-h-[500px] mx-auto mb-6 object-cover rounded-xl" />
      <p className="text-lg leading-relaxed whitespace-pre-line">{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
