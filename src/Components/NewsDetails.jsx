// NewsDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { newsData } from './carousel/Carousels'; // adjust path if needed

const NewsDetail = () => {
  const { id } = useParams();
  const item = newsData.find(n => n.id === parseInt(id));

  if (!item) {
    return <div className="p-8 text-center">News item not found.</div>;
  }

  return (
    <div className="py-20 max-w-4xl mx-auto items-center justify-center ">
     <h1 className="text-3xl font-bold mb-10">{item.title}</h1>
      <img src={item.imageUrl} alt={item.title} className="group relative overflow-hidden max-h-[500px] mx-auto mb-6 object-cover rounded-xl" />
      <p className="text-lg leading-relaxed whitespace-pre-line">{item.content}</p>
    </div>
  );
};

export default NewsDetail;

