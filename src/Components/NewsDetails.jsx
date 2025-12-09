// src/pages/NewsDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const NewsDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`${API_BASE_URL}/public/news/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch news item');
        }
        const data = await res.json();
        setItem(data);
      } catch (err) {
        console.error('Error fetching news item:', err);
        setError('News item not found or failed to load.');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500">{error || 'News item not found.'}</p>
      </div>
    );
  }

  // Choose language fields (here English; you can add toggle later)
  const title = item.title_en || item.title_de || 'Untitled';
  const content = item.body_en || item.body_de || '';
  const imageUrl = item.image_url;

  return (
    <div className="py-20 max-w-4xl mx-auto items-center justify-center">
      <h1 className="text-3xl font-bold mb-10">{title}</h1>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="group relative overflow-hidden max-h-[500px] mx-auto mb-6 object-cover rounded-xl"
        />
      )}

      <p className="text-lg leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  );
};

export default NewsDetail;
