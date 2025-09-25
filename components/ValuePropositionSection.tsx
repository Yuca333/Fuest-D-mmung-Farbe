import React from 'react';
import { NetworkIcon } from './icons';

const ValuePropositionSection: React.FC = () => {
  return (
    <section id="value-prop" className="py-16 md:py-24 bg-museum-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-serif text-midnight-navy">
              Alles aus einer Hand
            </h2>
            <p className="mt-fib-4 text-lg text-sage-gray leading-relaxed">
              Desweitern bieten wir Komplettsanierungen in Zusammenarbeit mit anderen Gewerken wie Heizungsinstallation, Spenglerei, Elektroarbeiten oder Fensterbau an. Sie haben den Vorteil, dass alles aus einer Hand organisiert und betreut wird. Das spart nicht nur Zeit und Nerven, sondern garantiert auch einen reibungslosen Ablauf und ein Ergebnis, das höchsten Qualitätsansprüchen gerecht wird.
            </p>
          </div>
          <div className="lg:col-span-2 text-midnight-navy h-48 lg:h-64">
            <NetworkIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;