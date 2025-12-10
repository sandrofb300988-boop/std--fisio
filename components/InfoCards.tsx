import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS_DATA } from '../constants';

const InfoCards: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Hours Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Horários de Atendimento</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
               <li className="flex justify-between border-b border-gray-100 pb-1">
                <span className="font-semibold text-gray-700">Segunda:</span>
                <span>{BUSINESS_DATA.hours.monday}</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span className="font-semibold text-gray-700">Terça:</span>
                <span>{BUSINESS_DATA.hours.tuesday}</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span className="font-semibold text-gray-700">Quarta:</span>
                <span>{BUSINESS_DATA.hours.wednesday}</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span className="font-semibold text-gray-700">Quinta:</span>
                <span>{BUSINESS_DATA.hours.thursday}</span>
              </li>
               <li className="flex justify-between border-b border-gray-100 pb-1">
                <span className="font-semibold text-gray-700">Sexta:</span>
                <span>{BUSINESS_DATA.hours.friday}</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span className="font-semibold text-gray-700">Sábado:</span>
                <span>{BUSINESS_DATA.hours.saturday}</span>
              </li>
              <li className="flex justify-between text-red-500 font-bold mt-2 pt-1 border-t border-gray-100">
                <span>Domingo:</span>
                <span>{BUSINESS_DATA.hours.sunday}</span>
              </li>
            </ul>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Localização</h3>
            </div>
            <p className="text-gray-600 mb-4 h-16">
              {BUSINESS_DATA.address}
            </p>
            <a 
              href={BUSINESS_DATA.mapsLink} 
              target="_blank" 
              rel="noreferrer"
              className="text-teal-500 font-bold hover:text-teal-700 flex items-center transition-colors"
            >
              Ver no Google Maps &rarr;
            </a>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Contato</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Ligue ou mande WhatsApp para agendar sua consulta.
            </p>
            <p className="text-2xl font-extrabold text-teal-600 my-4">
              {BUSINESS_DATA.phone}
            </p>
            <a 
              href={`tel:${BUSINESS_DATA.phone.replace(/\D/g, '')}`}
              className="block w-full text-center bg-gradient-to-r from-teal-400 to-teal-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform"
            >
              Ligar Agora
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoCards;