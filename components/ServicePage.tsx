import React from 'react';
import { LeafIcon, HomeHeartIcon, ShieldIcon, PiggyBankIcon } from './icons';

const ServicePage: React.FC = () => {
  return (
    <div className="bg-transparent">
      {/* 1. Hero Section */}
      <header className="relative h-80 md:h-96 flex items-center justify-center text-museum-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://picsum.photos/seed/waermedaemmung/1600/900')" }}
        >
          <div className="absolute inset-0 bg-midnight-navy/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold">Wärmedämmung</h1>
          <p className="mt-2 text-lg text-museum-white/90 max-w-2xl">
            Effizient, nachhaltig und wertsteigernd für Ihr Zuhause.
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4">
        {/* 2. Intro & Key Benefits Section */}
        <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 prose prose-lg max-w-none text-sage-gray">
            <p>
              Mit einem gedämmten Haus sparen Sie nicht nur eine Menge an Heizkosten, die sich in Ihrem Geldbeutel bemerkbar machen, sondern steigern auch den Wert Ihrer Immobilie. Die Energieeinsparung kann, je nach vorhandenem Mauerwerk, zwischen 35% und 50% betragen.
            </p>
            <p>
              Durch die Dämmung der Außenwände wird die Oberflächentemperatur an der Innenseite der Wand erhöht, was zu einem behaglicheren Wohnklima führt und Bauschäden durch Schimmelpilzbildung vorbeugt. Im Sommer wiederum profitieren Sie von kühleren Innenräumen. Zudem kann bei einem Neubau von Anfang an eine kleinere Heizungsanlage eingebaut werden.
            </p>
          </div>
          <aside className="lg:col-span-2">
            <div className="bg-museum-white rounded-tr-2xl rounded-bl-2xl border border-gray-200/70 p-6 shadow-craft">
              <h3 className="font-serif text-2xl text-midnight-navy mb-4">Ihre Vorteile</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="text-craftsman-orange"><PiggyBankIcon/></span>
                  <span className="font-semibold text-midnight-navy">Energiekosten sparen</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-craftsman-orange"><ShieldIcon/></span>
                  <span className="font-semibold text-midnight-navy">Schutz vor Schimmelpilz</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-craftsman-orange"><HomeHeartIcon/></span>
                  <span className="font-semibold text-midnight-navy">Wohnqualität steigern</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-craftsman-orange"><LeafIcon/></span>
                  <span className="font-semibold text-midnight-navy">Aktiver Klimaschutz</span>
                </li>
              </ul>
            </div>
          </aside>
        </section>

        {/* 3. Technical Details & Pull Quote */}
        <section className="pb-16 md:pb-24 prose prose-lg max-w-4xl mx-auto text-sage-gray text-center">
            <h2 className="font-serif text-3xl text-midnight-navy">Technische Umsetzung</h2>
            <p className="text-left">
              <strong>Außenwanddämmung (WDVS):</strong> Das Wärmedämmverbundsystem ist die effektivste Methode. Hierbei werden Dämmplatten auf die Außenwand geklebt und gedübelt. Anschließend wird ein armierter Unterputz und ein Oberputz aufgetragen, der individuell nach Ihren Wünschen gestaltet werden kann.
            </p>
            <p className="text-left">
              <strong>Innenwanddämmung:</strong> Diese kommt zum Einsatz, wenn eine Außendämmung nicht möglich ist, beispielsweise bei denkmalgeschützten Fassaden. Moderne, schlanke Dämmsysteme ermöglichen eine effektive Dämmung bei geringem Raumverlust.
            </p>
            
            <blockquote className="my-12 border-none text-center">
              <p className="font-serif text-4xl text-midnight-navy leading-snug">
                „Die beste Energie ist diejenige, die wir nicht verbrauchen.“
              </p>
            </blockquote>
        </section>
        
        {/* 4. Project Spotlight */}
        <section className="pb-16 md:pb-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif text-midnight-navy">Wärmedämmung in der Praxis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="group">
                    <div className="overflow-hidden rounded-tr-2xl rounded-bl-2xl shadow-craft">
                        <img src="https://picsum.photos/seed/reischlweg/800/600" alt="Projekt Reischlweg München" className="w-full h-64 object-cover transform transition-transform duration-300 ease-confidence group-hover:scale-105" />
                    </div>
                    <h4 className="font-serif text-xl text-midnight-navy mt-4">Reischlweg München</h4>
                    <p className="text-sage-gray">Komplettes WDVS für ein Mehrfamilienhaus.</p>
                </div>
                <div className="group">
                    <div className="overflow-hidden rounded-tr-2xl rounded-bl-2xl shadow-craft">
                        <img src="https://picsum.photos/seed/eching/800/600" alt="Projekt Bahnhofstraße Eching" className="w-full h-64 object-cover transform transition-transform duration-300 ease-confidence group-hover:scale-105" />
                    </div>
                    <h4 className="font-serif text-xl text-midnight-navy mt-4">Bahnhofstraße Eching</h4>
                    <p className="text-sage-gray">Energetische Sanierung eines Einfamilienhauses.</p>
                </div>
            </div>
        </section>

      </div>
      
      {/* 5. Specific Call-to-Action */}
      <section className="bg-midnight-navy/90 text-museum-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif">Interessiert an professioneller Wärmedämmung?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-museum-white/80">
            Lassen Sie uns gemeinsam den Wert Ihrer Immobilie steigern und Ihre Heizkosten senken.
          </p>
          <a
            href="#kontakt"
            className="mt-8 inline-block bg-craftsman-orange text-midnight-navy font-bold text-lg py-3 px-8 rounded-md shadow-lg
                       transform transition-all duration-250 ease-confidence
                       hover:bg-orange-500 hover:shadow-xl hover:-translate-y-1
                       focus:outline-none focus:ring-4 focus:ring-craftsman-orange focus:ring-opacity-50"
          >
            Angebot für Dämmung anfordern
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;