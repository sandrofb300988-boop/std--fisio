
import React, { useEffect, useState } from 'react';
import { Activity, Instagram, Facebook, Heart, CheckCircle, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import Reviews from './components/Reviews';
import RevealOnScroll from './components/RevealOnScroll';
import ImageCarousel from './components/ImageCarousel';
import ServicesCarousel from './components/ServicesCarousel';
import ServiceDetails from './components/ServiceDetails';
import { BUSINESS_DATA } from './constants';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Adjust offset for trigger point (header is h-20 = 80px)
      const headerHeight = 80;
      const scrollPosition = window.scrollY + headerHeight + 50; 

      const sections = ['home', 'about', 'services', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    // Use passive listener for better scroll performance on modern browsers
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // height of h-20 (5rem)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
      // Temporarily set active to give immediate feedback
      setActiveSection(sectionId);
    }
  };

  const getLinkClasses = (sectionId: string, isMobile: boolean = false) => {
    const isActive = activeSection === sectionId;
    
    if (isMobile) {
      return `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 cursor-pointer ${
        isActive 
          ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-500 pl-2 font-bold shadow-sm' 
          : 'text-gray-700 hover:text-teal-500 hover:bg-teal-50'
      }`;
    }
    
    return `text-base font-semibold transition-all duration-200 cursor-pointer ${
      isActive 
        ? 'text-teal-600 border-b-2 border-teal-500 pb-1' 
        : 'text-gray-600 hover:text-teal-500'
    }`;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-teal-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center group cursor-pointer">
              <div className="bg-teal-50 p-2 rounded-xl group-hover:bg-teal-100 transition-colors duration-300">
                <Activity className="h-8 w-8 text-teal-500" />
              </div>
              <span className="ml-3 text-2xl font-extrabold text-teal-800 tracking-tight group-hover:text-teal-600 transition-colors">
                Studio Fisio&Pilates
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={getLinkClasses('home')}>Início</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={getLinkClasses('about')}>Sobre Nós</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className={getLinkClasses('services')}>Serviços</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={getLinkClasses('contact')}>Contato</a>
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-teal-500 text-white font-bold px-6 py-2.5 rounded-full hover:bg-teal-600 transition-all shadow-lg shadow-teal-200 hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                Agendar Agora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-teal-500 p-2 rounded-md hover:bg-teal-50 transition-colors">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden transform origin-top ${isMobileMenuOpen ? 'max-h-96 opacity-100 translate-y-0 scale-y-100' : 'max-h-0 opacity-0 -translate-y-2 scale-y-95'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={getLinkClasses('home', true)}>Início</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={getLinkClasses('about', true)}>Sobre Nós</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className={getLinkClasses('services', true)}>Serviços</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={getLinkClasses('contact', true)}>Contato</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Pass navigation handler to Hero so its internal buttons respect smooth scrolling */}
        <Hero onNavigate={scrollToSection} />
        
        {/* InfoCards - Bridge between Attention and Interest */}
        <InfoCards />
        
        {/* About Section (Interest) */}
        <section id="about" className="relative py-24 bg-white scroll-mt-20 overflow-hidden">
          {/* Parallax Background - Dynamic Speed */}
          <div 
            className="absolute top-[-20%] left-0 w-full h-[140%] bg-cover bg-center opacity-[0.03] pointer-events-none z-0"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop&fm=webp)',
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <RevealOnScroll className="mb-12 lg:mb-0">
                   <div className="flex items-center mb-4">
                     <span className="w-12 h-1 bg-teal-500 rounded-full mr-4"></span>
                     <h2 className="text-sm text-teal-600 font-bold tracking-widest uppercase">Sobre Nós</h2>
                   </div>
                   <h3 className="text-4xl leading-tight font-extrabold text-gray-900 mb-6">
                     Mais do que um estúdio, um espaço de transformação.
                   </h3>
                   <p className="text-lg text-gray-500 leading-relaxed mb-6">
                     Você sente que dores crônicas ou falta de mobilidade estão roubando seus melhores momentos? No <strong>Studio Fisio&Pilates</strong>, entendemos que cada corpo conta uma história.
                   </p>
                   <p className="text-lg text-gray-500 leading-relaxed mb-8">
                     Nossa abordagem integra a precisão técnica da fisioterapia com a fluidez do pilates para tratar a causa, não apenas o sintoma. Aqui, você não é apenas mais um paciente; você é parte da nossa família.
                   </p>
                   
                   <ul className="space-y-4 mb-8">
                     {[
                       'Atendimento 100% personalizado',
                       'Profissionais especializados em dor crônica',
                       'Ambiente climatizado e acolhedor',
                       'Equipamentos de última geração'
                     ].map((item, i) => (
                       <li key={i} className="flex items-center text-gray-700">
                         <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                         {item}
                       </li>
                     ))}
                   </ul>

                   <div className="flex items-center">
                      <div className="bg-teal-50 p-3 rounded-full">
                        <Heart className="h-6 w-6 text-teal-500" />
                      </div>
                      <p className="ml-4 text-sm font-medium text-gray-600 italic">
                        "Cuidar de você é a nossa paixão."
                      </p>
                   </div>
                </RevealOnScroll>
                
                <RevealOnScroll className="relative h-[500px]" threshold={0.1}>
                   <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                     <ImageCarousel />
                   </div>
                   {/* Decor element */}
                   <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
                </RevealOnScroll>
             </div>
          </div>
        </section>

        {/* Services Section (Desire) */}
        <section id="services" className="py-24 bg-gradient-to-b from-teal-50 to-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll className="text-center mb-16">
              <h2 className="text-sm text-teal-600 font-bold tracking-widest uppercase mb-2">Nossos Serviços</h2>
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Soluções completas para sua saúde
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll>
              <ServicesCarousel onNavigate={scrollToSection} />
            </RevealOnScroll>
            
            <RevealOnScroll>
               <ServiceDetails />
            </RevealOnScroll>

          </div>
        </section>

        {/* Map Embed Section (Action) */}
        <section id="contact" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <RevealOnScroll className="bg-teal-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10 md:p-16 text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
                  <p className="text-teal-100 mb-8 text-lg">
                    Agende sua avaliação hoje mesmo e dê o primeiro passo para uma vida sem dores. Estamos te esperando!
                  </p>
                  <div className="space-y-4">
                    <a href="https://wa.me/5551999660344" className="block w-full text-center bg-white text-teal-900 font-bold py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-lg">
                      Chamar no WhatsApp
                    </a>
                    <p className="text-center text-sm text-teal-300">
                      Ou visite-nos no endereço ao lado.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 h-80 md:h-auto bg-gray-200">
                   <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.903743513276!2d-51.02535492358825!3d-29.95345797530691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190d191255e37f%3A0x6a0c5c4c9b3d0c3a!2sR.%20Santa%20F%C3%A9%2C%20793%20-%20Santa%20F%C3%A9%2C%20Gravata%C3%AD%20-%20RS%2C%2094060-100!5e0!3m2!1spt-BR!2sbr!4v1709320000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de localização Studio Fisio&Pilates"
                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
             </RevealOnScroll>
          </div>
        </section>

        {/* Reviews Section (Social Proof) */}
        <div className="bg-gray-50 pb-20 pt-10">
          <Reviews />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-900 text-white border-t border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center mb-6 group cursor-pointer w-fit">
                 <div className="bg-teal-800 p-2 rounded-xl group-hover:bg-teal-700 transition-colors">
                    <Activity className="h-6 w-6 text-teal-400 group-hover:text-teal-300" />
                 </div>
                 <span className="ml-3 text-2xl font-bold tracking-wide group-hover:text-teal-100 transition-colors">Studio Fisio&Pilates</span>
              </a>
              <p className="text-teal-200 text-sm leading-relaxed max-w-sm">
                Sua saúde em primeiro lugar. Profissionais dedicados, ambiente acolhedor e resultados reais para sua qualidade de vida.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-teal-700 pb-2 inline-block">Links Rápidos</h3>
              <ul className="space-y-3 text-sm text-teal-200">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white hover:translate-x-1 transition-all inline-block">Início</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white hover:translate-x-1 transition-all inline-block">Sobre Nós</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white hover:translate-x-1 transition-all inline-block">Nossos Serviços</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white hover:translate-x-1 transition-all inline-block">Agendar Consulta</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-teal-700 pb-2 inline-block">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href={BUSINESS_DATA.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-teal-800 p-3 rounded-full text-teal-300 hover:text-white hover:bg-teal-600 transition-all transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={BUSINESS_DATA.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-teal-800 p-3 rounded-full text-teal-300 hover:text-white hover:bg-teal-600 transition-all transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-teal-800 flex flex-col md:flex-row justify-between items-center text-sm text-teal-400">
            <p>&copy; {new Date().getFullYear()} Studio Fisio&Pilates. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com carinho para sua saúde.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
