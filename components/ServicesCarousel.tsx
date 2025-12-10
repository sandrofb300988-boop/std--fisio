
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import ServiceIcon from './ServiceIcon';

const ServicesCarousel: React.FC<{ onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void }> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? SERVICES_DATA.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === SERVICES_DATA.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Carousel Track - Increased height for mobile to prevent content clipping */}
      <div className="overflow-hidden rounded-2xl shadow-xl border border-teal-50 bg-white relative h-[750px] md:h-[500px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform flex flex-col md:flex-row ${
              index === currentIndex 
                ? 'opacity-100 scale-100 z-20' 
                : 'opacity-0 scale-95 z-10 pointer-events-none'
            }`}
          >
             {/* Image Side - using bg-gray-50 to fill gaps for contained images */}
             <div className="h-2/5 md:h-full md:w-1/2 relative overflow-hidden bg-gray-50">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`w-full h-full ${service.imageFit || 'object-cover object-top'}`}
                />
                {/* Overlay only for cover images to avoid dimming the cards with contained illustrations */}
                {!service.imageFit && <div className="absolute inset-0 bg-teal-900/10"></div>}
             </div>

             {/* Content Side */}
             <div className="h-3/5 md:h-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-start mb-4">
                  <div className="bg-teal-50 p-2 rounded-lg mr-3 flex-shrink-0">
                    <ServiceIcon iconKey={service.iconKey} className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-teal-800 leading-tight">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#contact" 
                    onClick={(e) => onNavigate(e, 'contact')}
                    className="inline-flex items-center text-white bg-teal-500 hover:bg-teal-600 font-bold py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
                  >
                    Agendar agora <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                  <a 
                    href={`#details-${service.id}`} 
                    onClick={(e) => onNavigate(e, `details-${service.id}`)}
                    className="inline-flex items-center text-teal-600 border-2 border-teal-500 hover:bg-teal-50 font-bold py-3 px-6 rounded-full transition-colors cursor-pointer"
                  >
                    Saiba Mais <ArrowDown className="w-4 h-4 ml-2" />
                  </a>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Hidden on Mobile to improve visibility */}
      <button 
        onClick={prev}
        className="hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 w-12 h-12 bg-white text-teal-600 rounded-full shadow-lg items-center justify-center hover:bg-teal-50 hover:scale-110 transition-all z-20"
        aria-label="Serviço anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={next}
        className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 w-12 h-12 bg-white text-teal-600 rounded-full shadow-lg items-center justify-center hover:bg-teal-50 hover:scale-110 transition-all z-20"
        aria-label="Próximo serviço"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {SERVICES_DATA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-teal-500 w-8' : 'bg-gray-300 hover:bg-teal-300'
            }`}
            aria-label={`Ir para serviço ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
