import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../constants';

interface HeroProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div id="home" className="relative bg-teal-900 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop&fm=webp" 
          alt="Pilates Studio Harmony" 
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/90 to-teal-800/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="md:w-3/4 lg:w-2/3 animate-fade-in-up">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-800 border border-teal-500 text-teal-200 text-sm font-semibold mb-6 tracking-wide uppercase">
            Especialistas em Reabilitação & Bem-estar
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Recupere seu movimento,<br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">
              Renove sua vida.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl leading-relaxed">
            Não deixe a dor limitar seus dias. No Studio Fisio&Pilates, unimos a precisão do Pilates Clínico com a ciência da Fisioterapia para devolver sua liberdade corporal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/55${BUSINESS_DATA.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-teal-500 hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Avaliação
            </a>
            <a 
              href="#about"
              onClick={(e) => onNavigate(e, 'about')}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-200 text-base font-bold rounded-full text-teal-50 hover:bg-white hover:text-teal-900 transition-all cursor-pointer"
            >
              Conheça o Studio
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;