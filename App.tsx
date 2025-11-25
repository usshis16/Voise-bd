import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TourCard from './components/TourCard';
import AIPlanner from './components/AIPlanner';
import ChatBot from './components/ChatBot';
import { TourPackage } from './types';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const tours: TourPackage[] = [
  {
    id: '1',
    title: 'Sundarbans Mangrove Safari',
    location: 'Khulna Division',
    duration: '3 Days / 2 Nights',
    price: '$250',
    rating: 4.8,
    image: 'https://picsum.photos/seed/sundarbans/600/400',
    description: 'Navigate the winding rivers of the world\'s largest mangrove forest. Spot spotted deer, exotic birds, and the majestic Royal Bengal Tiger.'
  },
  {
    id: '2',
    title: 'Sylhet Tea & Swamp Experience',
    location: 'Sylhet Division',
    duration: '4 Days / 3 Nights',
    price: '$320',
    rating: 4.9,
    image: 'https://picsum.photos/seed/sylhet/600/400',
    description: 'Wander through endless rolling tea gardens, boat through the Ratargul Swamp Forest, and witness the crystal clear waters of Bisnakandi.'
  },
  {
    id: '3',
    title: 'Cox\'s Bazar Beach Retreat',
    location: 'Chittagong Division',
    duration: '3 Days / 2 Nights',
    price: '$200',
    rating: 4.7,
    image: 'https://picsum.photos/seed/coxsbazar/600/400',
    description: 'Relax on the longest unbroken natural sea beach in the world. Enjoy fresh seafood, golden sunsets, and a trip to Saint Martin\'s Island.'
  },
  {
    id: '4',
    title: 'Ancient Bengal Heritage',
    location: 'Rajshahi & Bogra',
    duration: '2 Days / 1 Night',
    price: '$180',
    rating: 4.6,
    image: 'https://picsum.photos/seed/heritage/600/400',
    description: 'Explore the archaeological wonders of Mahasthangarh and the terracotta temples of Puthia. A deep dive into history.'
  },
  {
    id: '5',
    title: 'Bandarban Hill Trek',
    location: 'Chittagong Hill Tracts',
    duration: '4 Days / 3 Nights',
    price: '$280',
    rating: 4.9,
    image: 'https://picsum.photos/seed/bandarban/600/400',
    description: 'Trek to the highest peaks of Bangladesh. Experience the unique culture of indigenous communities and breathtaking cloud-top views.'
  },
  {
    id: '6',
    title: 'Old Dhaka Photography Walk',
    location: 'Dhaka City',
    duration: '1 Day',
    price: '$50',
    rating: 4.5,
    image: 'https://picsum.photos/seed/dhaka/600/400',
    description: 'Chaos and charm combined. Walk the narrow alleys, taste the famous Biryani, and capture the vibrant soul of the capital.'
  }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main>
        <Hero />
        
        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://picsum.photos/seed/boat/800/600" 
                  alt="Traditional Boat" 
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-bengal-green font-bold uppercase tracking-widest text-sm">Why Bengal Voyages</span>
                <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">Authentic Experiences, Sustainable Travel</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We don't just show you places; we immerse you in the rhythm of Bangladeshi life. From the silent canoe rides in the mangroves to the bustling tea stalls of Dhaka, our tours are designed to leave a minimal footprint while maximizing your connection to the land and its people.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expert Local Guides who are storytellers",
                    "Eco-friendly transport and accommodation options",
                    "Customized itineraries powered by cutting-edge AI",
                    "24/7 Support throughout your journey"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-bengal-green">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        <section id="tours" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Curated Adventures</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Handpicked packages that showcase the diversity of Bangladesh's landscape and culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-colors">
                View All Packages
              </button>
            </div>
          </div>
        </section>

        {/* AI Planner */}
        <AIPlanner />
        
        {/* Gallery / Visual Break */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-6 text-center mb-12">
             <h2 className="text-3xl font-serif">Moments Captured</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x px-6 no-scrollbar">
            {[1,2,3,4,5].map((i) => (
               <div key={i} className="flex-shrink-0 w-80 h-96 relative rounded-2xl overflow-hidden snap-center">
                 <img 
                  src={`https://picsum.photos/seed/bengal${i}/400/600`} 
                  alt="Gallery" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                 />
               </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-bengal-green rounded-lg text-white">
                <MapPin size={20} />
              </div>
              <span className="text-2xl font-serif font-bold text-white">EdSkill HUB</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Unlocking the mysteries of the delta. Your trusted partner for exploring the unseen beauty of Bangladesh.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-bengal-green transition-colors">About Us</a></li>
              <li><a href="#tours" className="hover:text-bengal-green transition-colors">Destinations</a></li>
              <li><a href="#planner" className="hover:text-bengal-green transition-colors">AI Trip Planner</a></li>
              <li><a href="#" className="hover:text-bengal-green transition-colors">Sustainable Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-bengal-green" />
                <span>+880 1712 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-bengal-green" />
                <span>edskill.hub@mail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-bengal-green mt-1" />
                <span>Level 5, Gulshan Avenue,<br/>Dhaka-1212, Bangladesh</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for seasonal offers and travel tips.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-bengal-green outline-none"
              />
              <button className="bg-bengal-green text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors">
                <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://facebook.com/EdSkillHub" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} EdSkill HUB. All rights reserved.</p>
        </div>
      </footer>
      
      <ChatBot />
    </div>
  );
}

export default App;