import React, { useState } from 'react';

const ImageWithShimmer = ({ src, alt, className = '', isLogo = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  if (isLogo) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer Skeleton */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: 'linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)',
            backgroundSize: '1000px 100%',
            backgroundPosition: '0 0'
          }}
        />
      )}
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithShimmer;
