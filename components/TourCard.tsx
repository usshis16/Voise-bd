import React from 'react';
import { Clock, Star, ArrowUpRight } from 'lucide-react';
import { TourPackage } from '../types';

interface TourCardProps {
  tour: TourPackage;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1">
          <Star size={12} className="text-yellow-500 fill-yellow-500" />
          {tour.rating}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs font-medium uppercase tracking-wider mb-1 opacity-90">{tour.location}</p>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif group-hover:text-bengal-green transition-colors">
          {tour.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
          {tour.description}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6">
          <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
            <Clock size={14} />
            {tour.duration}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-400 block">Starting from</span>
            <span className="text-lg font-bold text-bengal-green">{tour.price}</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-50 hover:bg-bengal-green hover:text-white flex items-center justify-center transition-colors">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;