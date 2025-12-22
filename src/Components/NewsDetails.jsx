// NewsDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LoadingIndicator from './LoadingIndicator/LoadingIndicator';

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

        const item = response.data.find(news => news.id === parseInt(id));

        if (item) {
          setNewsItem({
            id: item.id,
            title: item.title,
            content: item.body, // Markdown
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
      <div className="py-20 max-w-4xl mx-auto">
        <LoadingIndicator size="large" text="Loading article..." />
      </div>
    );
  }

  if (error || !newsItem) {
    return (
      <div className="py-20 max-w-4xl mx-auto">
        <p className="text-lg text-center">{error || 'News item not found'}</p>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">{newsItem.title}</h1>

      {newsItem.imageUrl && (
        <img
          src={newsItem.imageUrl}
          alt={newsItem.title}
          className="max-h-[500px] mx-auto mb-8 object-cover rounded-xl"
        />
      )}

      <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:gray-700 prose-strong:font-bold prose-ul:list-disc prose-ol:list-decimal prose-li:text-black prose-li:marker:text-black prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-gray-50 prose-blockquote:italic prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-white prose-img:rounded-lg prose-img:shadow-md">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition-all"
              />
            ),
            h1: ({ node, ...props }) => (
              <h1 {...props} className="text-4xl font-bold text-primary mt-8 mb-4" />
            ),
            h2: ({ node, ...props }) => (
              <h2 {...props} className="text-3xl font-bold text-primary mt-6 mb-3" />
            ),
            h3: ({ node, ...props }) => (
              <h3 {...props} className="text-2xl font-bold text-primary mt-5 mb-2" />
            ),
            h4: ({ node, ...props }) => (
              <h4 {...props} className="text-xl font-bold text-primary mt-4 mb-2" />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="text-gray-700 leading-relaxed mb-4" />
            ),
            ul: ({ node, ...props }) => (
              <ul {...props} className="list-disc list-inside mb-4 space-y-2" />
            ),
            ol: ({ node, ...props }) => (
              <ol {...props} className="list-decimal list-inside mb-4 space-y-2" />
            ),
            li: ({ node, ...props }) => (
              <li {...props} className="text-black" />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote {...props} className="border-l-4 border-secondary bg-gray-50 p-4 my-4 italic" />
            ),
            code: ({ node, inline, ...props }) => 
              inline ? (
                <code {...props} className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" />
              ) : (
                <code {...props} className="block bg-gray-900 text-white p-4 rounded-lg overflow-x-auto" />
              ),
            img: ({ node, ...props }) => (
              <img {...props} className="rounded-lg shadow-md my-4 max-w-full h-auto" />
            ),
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-4">
                <table {...props} className="min-w-full border-collapse border border-gray-300" />
              </div>
            ),
            th: ({ node, ...props }) => (
              <th {...props} className="border border-gray-300 bg-gray-100 px-4 py-2 font-bold text-left" />
            ),
            td: ({ node, ...props }) => (
              <td {...props} className="border border-gray-300 px-4 py-2" />
            ),
          }}
        >
          {newsItem.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default NewsDetail;
