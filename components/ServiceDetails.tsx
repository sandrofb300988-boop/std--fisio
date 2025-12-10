
import React from 'react';
import { SERVICES_DATA } from '../constants';
import ServiceIcon from './ServiceIcon';

const ServiceDetails: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Detalhes dos Profissionais e Técnicas</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id} 
              id={`details-${service.id}`} 
              className="scroll-mt-32 p-8 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start mb-6">
                <div className="bg-teal-100 p-4 rounded-xl mr-5 group-hover:bg-teal-500 transition-colors duration-300 shadow-sm">
                  <ServiceIcon 
                    iconKey={service.iconKey} 
                    className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-teal-800 mb-2 mt-1 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.longDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
