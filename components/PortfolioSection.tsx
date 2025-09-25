import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

interface Project {
  image: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    image: 'https://picsum.photos/seed/fuest-ref1/1200/800',
    title: 'Fassadensanierung: Wörthstraße München',
    description: 'Denkmalschutz-konforme Farbgestaltung und Stuckausbesserung an einem historischen Altbau im Herzen von Haidhausen.',
  },
  {
    image: 'https://picsum.photos/seed/fuest-ref2/1200/800',
    title: 'WDVS Neubau: Eching am Ammersee',
    description: 'Installation eines hocheffizienten Wärmedämmverbundsystems für maximale Energieeinsparung und modernen Look.',
  },
  {
    image: 'https://picsum.photos/seed/fuest-ref3/1200/800',
    title: 'Innenraumgestaltung: Penthouse Freising',
    description: 'Einsatz von edlen Kalkputztechniken und schadstofffreien Farben für ein exklusives und gesundes Wohnambiente.',
  },
];

const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-museum-white/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-midnight-navy">
            Unsere Referenzen
          </h2>
          <p className="mt-fib-3 max-w-2xl mx-auto text-lg text-sage-gray">
            Ein Einblick in unsere Arbeit. Qualität, die für sich spricht.
          </p>
        </div>
        
        <div className="relative h-[500px] w-full mx-auto">
          <div className="relative h-full overflow-hidden rounded-lg shadow-2xl">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`absolute inset-0 transition-opacity duration-400 ease-premium ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-museum-white">
                  <h3 className="text-2xl font-serif">{project.title}</h3>
                  <p className="mt-2 max-w-xl text-museum-white/90">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-museum-white/80 text-midnight-navy p-2 rounded-full shadow-md hover:bg-museum-white transition-colors"
            aria-label="Vorheriges Projekt"
          >
            <ArrowLeftIcon />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-museum-white/80 text-midnight-navy p-2 rounded-full shadow-md hover:bg-museum-white transition-colors"
            aria-label="Nächstes Projekt"
          >
            <ArrowRightIcon />
          </button>
        </div>

        <div className="text-center mt-8">
            <a href="#" className="text-craftsman-orange font-bold text-lg">
                Alle Referenzen ansehen →
            </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;