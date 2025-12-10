import React from 'react';
import { Star, User } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            O que nossos alunos dizem
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            5.0 <Star className="inline w-5 h-5 text-yellow-400 fill-current -mt-1" /> baseada em avaliações do Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 font-bold">
                  {review.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">{review.author}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
              <p className="text-sm text-gray-400 mt-4 text-right">{review.timeAgo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;