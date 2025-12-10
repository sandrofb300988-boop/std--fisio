import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel: React.FC = () => {
  // Base URLs without parameters for cleaner handling
  const images = [
    "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3", // Pilates Reformer Action
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2", // Pilates Pose/Balance
    "https://images.unsplash.com/photo-1518611012118-696072aa579a", // Exercise Ball
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0", // Yoga/Stretching
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  // Auto-advance
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  // Helper to generate optimized Unsplash URL
  const getImageUrl = (baseUrl: string, width: number) => {
    return `${baseUrl}?q=75&w=${width}&auto=format&fit=crop`;
  };

  return (
    <div className="relative group w-full h-full min-h-[400px] overflow-hidden rounded-3xl bg-gray-100 shadow-inner">
      {/* Images - Stacked for cross-fade */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={getImageUrl(img, 800)} // Fallback size
            srcSet={`
              ${getImageUrl(img, 640)} 640w,
              ${getImageUrl(img, 1024)} 1024w,
              ${getImageUrl(img, 1500)} 1500w
            `}
            sizes="(max-width: 1024px) 100vw, 50vw" // Mobile: Full width, Desktop: Half width (grid col-2)
            alt={`Studio Ambiente ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-20 pointer-events-none"></div>
      
      {/* Caption Content */}
      <div className="absolute bottom-8 left-8 text-white z-30 max-w-sm">
         <p className="font-bold text-2xl drop-shadow-lg mb-2 tracking-wide">Ambiente & Equipamentos</p>
         <p className="text-base text-gray-100 drop-shadow-md leading-relaxed">Conforto e tecnologia de ponta dedicados à sua recuperação.</p>
      </div>

      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex items-center justify-center absolute top-1/2 left-4 z-30 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/30 transition-all border border-white/20 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 duration-300"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="hidden md:flex items-center justify-center absolute top-1/2 right-4 z-30 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/30 transition-all border border-white/20 opacity-0 group-hover:opacity-100 transform translate-x-[10px] group-hover:translate-x-0 duration-300"
        aria-label="Próximo"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 right-8 z-30 flex space-x-2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`transition-all duration-500 rounded-full h-2 shadow-sm ${
              currentIndex === slideIndex ? 'bg-white w-8 opacity-100' : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
            aria-label={`Ir para imagem ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;