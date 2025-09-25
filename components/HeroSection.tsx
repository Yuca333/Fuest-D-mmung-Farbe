import React from 'react';
import { ExperienceIcon, MasterIcon, QualityIcon } from './icons';

const TrustBadge: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-fib-2">
    <span className="text-museum-white/80">{icon}</span>
    <span className="text-sm font-medium tracking-wide text-museum-white/90">{text}</span>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-midnight-navy overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/seed/fuest/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-midnight-navy/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center text-museum-white px-4 py-16">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-shadow-lg">
          Bei uns sind Sie richtig!
        </h1>
        
        <h2 className="mt-fib-3 max-w-2xl text-lg md:text-xl font-sans text-museum-white/90">
          Ihr Meisterbetrieb für Dämmung, Farbe und Sanierung in München & Freising seit 1992.
        </h2>

        <div className="mt-fib-5 flex flex-col sm:flex-row items-center justify-center gap-x-fib-4 gap-y-fib-3">
          <TrustBadge icon={<ExperienceIcon />} text="30+ Jahre Erfahrung" />
          <TrustBadge icon={<MasterIcon />} text="Meisterbetrieb" />
          <TrustBadge icon={<QualityIcon />} text="Qualität im Handwerk" />
        </div>

        <a
          href="#kontakt"
          className="mt-fib-6 inline-block bg-craftsman-orange text-midnight-navy font-bold text-lg py-3 px-8 rounded-md shadow-lg
                     transform transition-all duration-250 ease-confidence
                     hover:bg-orange-500 hover:shadow-xl hover:-translate-y-1
                     focus:outline-none focus:ring-4 focus:ring-craftsman-orange focus:ring-opacity-50"
        >
          Kostenlose Beratung anfragen
        </a>
        <p className="mt-fib-2 text-sm text-museum-white/70">Unverbindlich und 100% informativ.</p>
      </div>
    </div>
  );
};

export default HeroSection;