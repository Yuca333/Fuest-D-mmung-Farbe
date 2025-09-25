import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <footer id="kontakt" className="py-16 md:py-24 bg-midnight-navy text-museum-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-museum-white">
              Starten Sie Ihr Projekt mit Vertrauen
            </h2>
            <p className="mt-fib-4 text-lg text-museum-white/80 leading-relaxed">
              Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns für eine unverbindliche und kostenlose Beratung.
            </p>
            <div className="mt-fib-5 space-y-fib-3">
              <p>
                <strong>Adresse:</strong> Fuest Dämmung & Farbe GmbH, Musterstraße 1, 85354 Freising
              </p>
              <p>
                <strong>Telefon:</strong> <a href="tel:+49816112345" className="hover:text-craftsman-orange transition-colors">+49 (0) 8161 12345</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@fuest-daemmung-farbe.de" className="hover:text-craftsman-orange transition-colors">info@fuest-daemmung-farbe.de</a>
              </p>
            </div>
          </div>
          
          <form className="space-y-fib-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-museum-white/90">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full bg-midnight-navy border-sage-gray/50 rounded-md shadow-sm text-museum-white focus:ring-craftsman-orange focus:border-craftsman-orange" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-museum-white/90">E-Mail</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full bg-midnight-navy border-sage-gray/50 rounded-md shadow-sm text-museum-white focus:ring-craftsman-orange focus:border-craftsman-orange" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-museum-white/90">Telefon</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full bg-midnight-navy border-sage-gray/50 rounded-md shadow-sm text-museum-white focus:ring-craftsman-orange focus:border-craftsman-orange" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-museum-white/90">Nachricht</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-midnight-navy border-sage-gray/50 rounded-md shadow-sm text-museum-white focus:ring-craftsman-orange focus:border-craftsman-orange"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-craftsman-orange text-midnight-navy font-bold text-lg py-3 px-8 rounded-md shadow-lg
                           transform transition-all duration-250 ease-confidence
                           hover:bg-orange-500 hover:shadow-xl hover:-translate-y-1
                           focus:outline-none focus:ring-4 focus:ring-craftsman-orange focus:ring-opacity-50"
              >
                Beratungstermin vereinbaren
              </button>
            </div>
          </form>

        </div>
      </div>
    </footer>
  );
};

export default ContactSection;