import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Tours', href: '#tours' },
    { name: 'AI Planner', href: '#planner' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-full ${isScrolled ? 'bg-bengal-green text-white' : 'bg-white text-bengal-green'}`}>
            <MapPin size={24} />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Bengal Voyages
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-sand-gold ${
                isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : 
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 flex flex-col items-center gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-medium text-slate-700 hover:text-bengal-green"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;