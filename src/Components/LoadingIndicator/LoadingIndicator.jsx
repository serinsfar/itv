import React from 'react';

const LoadingIndicator = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-8 h-8 border-2',
    medium: 'w-12 h-12 border-3',
    large: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      {/* Spinner */}
      <div className="relative">
        {/* Outer rotating ring */}
        <div
          className={`${sizeClasses[size]} rounded-full border-gray-200 border-t-secondary border-r-primary animate-spin`}
          style={{ animationDuration: '2.5s' }}
        ></div>
      </div>

      {/* Loading text */}
      {text && (
        <p className="text-gray-600 text-lg font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingIndicator;
