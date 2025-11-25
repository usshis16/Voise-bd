import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/sundarbans/1920/1080" 
          alt="Beautiful Bangladesh Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6 animate-fade-in">
          Discover South Asia's Hidden Gem
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Explore the Soul of <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
            Beautiful Bangladesh
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          From the world's longest natural sea beach to the largest mangrove forest. 
          Experience the warmth of hospitality and the serenity of nature.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#tours"
            className="px-8 py-4 bg-bengal-green hover:bg-emerald-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            Find a Tour <ArrowRight size={18} />
          </a>
          <a 
            href="#planner"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white rounded-full font-semibold transition-all flex items-center justify-center"
          >
            Create AI Itinerary
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;