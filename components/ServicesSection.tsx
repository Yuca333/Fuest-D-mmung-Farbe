import React from 'react';
import { Page } from '../App';
import {
  InsulationIcon,
  PaintRollerIcon,
  TrowelIcon,
  StuccoIcon,
  DrywallIcon,
  EnergyIcon
} from './icons';

interface Service {
  id: Page | 'other';
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const services: Service[] = [
  {
    id: 'waermedaemmung',
    icon: <InsulationIcon />,
    title: 'Wärmedämmung',
    description: 'Wir verarbeiten alle gängigen Systeme und ermöglichen eine Energieeinsparung zwischen 35% und 50%.',
  },
  {
    id: 'other',
    icon: <PaintRollerIcon />,
    title: 'Malerarbeiten',
    description: 'Fassade und Innenräume stehen für die Individualität Ihrer Bewohner.',
    badge: 'Neu: Solarfarben',
  },
  {
    id: 'other',
    icon: <TrowelIcon />,
    title: 'Verputzarbeiten',
    description: 'Durch einen Kalk- oder Lehmputz lässt sich das Innenraumklima positiv beeinflussen.',
  },
  {
    id: 'other',
    icon: <StuccoIcon />,
    title: 'Stuckarbeiten',
    description: 'Stuck war und ist seit der Antike ein Zierde für die Gestaltung von Innenräumen und Fassaden.',
  },
  {
    id: 'other',
    icon: <DrywallIcon />,
    title: 'Trockenbau',
    description: 'Wir realisieren Ihre Wohnträume mit flexiblen Trockenbauwänden und Decken.',
  },
  {
    id: 'other',
    icon: <EnergyIcon />,
    title: 'Energieberatung',
    description: 'Energiesparen ist die beste Energiequelle.',
  },
];

const Description: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(35% und 50%)/);
  if (parts.length > 1) {
    return (
      <p className="text-sage-gray leading-relaxed flex-grow">
        {parts[0]}
        <strong className="font-bold text-craftsman-orange">{parts[1]}</strong>
        {parts[2]}
      </p>
    );
  }
  return <p className="text-sage-gray leading-relaxed flex-grow">{text}</p>;
};


const ServiceCard: React.FC<Service & {onClick: () => void}> = ({ id, icon, title, description, badge, onClick }) => {
  const isClickable = id !== 'other';
  return (
    <button
      onClick={isClickable ? onClick : undefined}
      disabled={!isClickable}
      className={`bg-museum-white border border-gray-200/50 p-6 
                 rounded-tl-md rounded-br-md rounded-tr-2xl rounded-bl-2xl
                 text-center flex flex-col items-center group w-full
                 transition-all duration-250 ease-confidence
                 shadow-craft ${isClickable ? 'hover:shadow-craft-lifted hover:-translate-y-1 hover:scale-[1.02] cursor-pointer' : 'cursor-not-allowed'}`}
      aria-label={`Mehr erfahren über ${title}`}
    >
      <div className="text-midnight-navy mb-fib-3 transition-transform duration-250 ease-confidence group-hover:-translate-y-1">
        {icon}
      </div>
      {badge && (
        <div className="mb-2 bg-craftsman-orange text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      <h3 className="text-xl font-serif text-midnight-navy mb-fib-2">{title}</h3>
      <Description text={description} />
      <div className={`mt-fib-4 text-craftsman-orange font-bold transition-opacity duration-250 ease-confidence ${isClickable ? 'opacity-0 group-hover:opacity-100' : 'opacity-50'}`}>
        Mehr erfahren →
      </div>
    </button>
  );
};

interface ServicesSectionProps {
  navigateTo: (page: Page) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ navigateTo }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-midnight-navy">
            Unsere Kernkompetenzen
          </h2>
          <p className="mt-fib-3 max-w-2xl mx-auto text-lg text-sage-gray">
            Seit über 30 Jahren bieten wir meisterhafte Lösungen für Ihr Zuhause. Präzise, zuverlässig und von höchster Qualität.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
              onClick={() => service.id !== 'other' && navigateTo(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;