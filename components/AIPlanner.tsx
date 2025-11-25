import React, { useState } from 'react';
import { Sparkles, Calendar, Wallet, Heart, Loader2, Map, Coffee, Bed } from 'lucide-react';
import { generateItinerary } from '../services/geminiService';
import { ItineraryDay, PlannerPreferences } from '../types';

const AIPlanner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ItineraryDay[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const [preferences, setPreferences] = useState<PlannerPreferences>({
    duration: 5,
    budget: 'Moderate',
    interests: []
  });

  const interestOptions = ['Nature', 'History', 'Food', 'Adventure', 'Relaxation', 'Culture'];

  const toggleInterest = (interest: string) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleGenerate = async () => {
    if (preferences.interests.length === 0) {
      setError("Please select at least one interest.");
      return;
    }
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const itinerary = await generateItinerary(preferences);
      setResult(itinerary);
    } catch (err) {
      setError("Failed to generate itinerary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="planner" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-bengal-green font-medium tracking-wider uppercase text-sm">Powered by Gemini AI</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2 mb-4">
            Tailor Your Bengal Journey
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tell us your preferences, and our AI travel architect will build a custom day-by-day plan just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Controls */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 lg:sticky lg:top-28">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="text-bengal-green" /> Preferences
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} /> Duration (Days): {preferences.duration}
                </label>
                <input 
                  type="range" 
                  min="3" 
                  max="14" 
                  value={preferences.duration} 
                  onChange={(e) => setPreferences({...preferences, duration: parseInt(e.target.value)})}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-bengal-green"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>3 Days</span>
                  <span>14 Days</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                  <Wallet size={16} /> Budget Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Budget', 'Moderate', 'Luxury'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => setPreferences({...preferences, budget: opt as any})}
                      className={`py-2 px-1 text-sm rounded-lg border transition-all ${
                        preferences.budget === opt 
                        ? 'bg-bengal-green text-white border-bengal-green shadow-md' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-bengal-green'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                  <Heart size={16} /> Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map(interest => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`py-1.5 px-3 text-sm rounded-full border transition-all ${
                        preferences.interests.includes(interest)
                        ? 'bg-sand-gold/20 text-orange-800 border-orange-300' 
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                  {error}
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                {loading ? 'Designing Trip...' : 'Generate Itinerary'}
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-2">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center min-h-[400px] text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl bg-white/50">
                <Map size={48} className="mb-4 opacity-50" />
                <p className="text-lg">Your adventure awaits.</p>
                <p className="text-sm">Configure your preferences to view a custom plan.</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center min-h-[400px]">
                 <div className="relative w-24 h-24">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-bengal-green/20 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-bengal-green rounded-full animate-spin"></div>
                 </div>
                 <p className="mt-6 text-slate-600 font-medium animate-pulse">Consulting travel experts...</p>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-fade-in">
                {result.map((day, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                      <h4 className="font-serif font-bold text-xl text-slate-800">
                        <span className="text-bengal-green mr-2">Day {day.day}</span>
                        {day.title}
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3 mb-6">
                        {day.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-sand-gold flex-shrink-0"></span>
                            {act}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Bed size={16} className="text-bengal-green" />
                          <span><strong className="text-slate-700">Stay:</strong> {day.accommodation}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Coffee size={16} className="text-bengal-green" />
                          <span><strong className="text-slate-700">Eat:</strong> {day.foodHighlight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="bg-bengal-green/5 border border-bengal-green/20 rounded-xl p-6 text-center">
                  <h5 className="font-bold text-bengal-green mb-2">Ready to make this real?</h5>
                  <p className="text-slate-600 text-sm mb-4">Our agents can book this entire itinerary for you with a 10% discount.</p>
                  <button className="px-6 py-2 bg-bengal-green text-white rounded-full font-medium text-sm hover:bg-emerald-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;