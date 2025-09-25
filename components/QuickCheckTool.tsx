import React, { useState } from 'react';
import { CalculatorIcon } from './icons';

const QuickCheckTool: React.FC = () => {
  const [area, setArea] = useState<number>(100);
  const [results, setResults] = useState<{cost: string; funding: string; final: string} | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const costMin = area * 150;
    const costMax = area * 220;
    const funding = costMin * 0.2; // Dummy 20% funding
    const finalMin = costMin - funding;
    const finalMax = costMax - funding;

    setResults({
        cost: `€${costMin.toLocaleString('de-DE')} - €${costMax.toLocaleString('de-DE')}`,
        funding: `ca. €${funding.toLocaleString('de-DE')}`,
        final: `€${finalMin.toLocaleString('de-DE')} - €${finalMax.toLocaleString('de-DE')}`,
    });
  }

  return (
    <section id="quick-check" className="py-16 md:py-24 bg-midnight-navy/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-craftsman-orange/10 text-craftsman-orange font-bold text-sm px-3 py-1 rounded-full">
                <CalculatorIcon />
                Interaktiver Rechner
            </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-midnight-navy">
            Förder- & Dämmkosten Quick-Check
          </h2>
          <p className="mt-fib-3 max-w-2xl mx-auto text-lg text-sage-gray">
            Erhalten Sie in 30 Sekunden eine erste Kostenschätzung für Ihr Dämmprojekt und mögliche Förderungen.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-museum-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-craft-lifted">
            {/* --- FORM --- */}
            <form className="space-y-6" onSubmit={handleCalculate}>
                <div>
                    <label className="block text-sm font-bold text-midnight-navy">Was möchten Sie dämmen?</label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                        {['Fassade', 'Dach', 'Kellerdecke'].map(item => (
                            <label key={item} className="flex items-center space-x-2 border border-gray-300 rounded-md p-3 has-[:checked]:bg-craftsman-orange/10 has-[:checked]:border-craftsman-orange cursor-pointer">
                                <input type="radio" name="insulation-type" value={item} defaultChecked={item === 'Fassade'} className="text-craftsman-orange focus:ring-craftsman-orange" />
                                <span className="text-sm font-medium text-sage-gray">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="area-slider" className="block text-sm font-bold text-midnight-navy">Fläche in m²</label>
                    <div className="mt-2 flex items-center gap-4">
                        <input id="area-slider" type="range" min="20" max="500" value={area} onChange={(e) => setArea(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-craftsman-orange" />
                        <input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} className="w-20 border-gray-300 rounded-md shadow-sm focus:ring-craftsman-orange focus:border-craftsman-orange" />
                    </div>
                </div>

                <div>
                    <label htmlFor="baujahr" className="block text-sm font-bold text-midnight-navy">Baujahr des Hauses</label>
                    <select id="baujahr" className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-craftsman-orange focus:border-craftsman-orange">
                        <option>Vor 1979</option>
                        <option>1979 - 1995</option>
                        <option>1996 - 2009</option>
                        <option>Nach 2009</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-craftsman-orange text-midnight-navy font-bold text-lg py-3 px-8 rounded-md shadow-lg
                               transform transition-all duration-250 ease-confidence
                               hover:bg-orange-500 hover:shadow-xl hover:-translate-y-1
                               focus:outline-none focus:ring-4 focus:ring-craftsman-orange focus:ring-opacity-50"
                >
                    Jetzt Quick-Check starten
                </button>
            </form>

            {/* --- RESULTS --- */}
            <div className="bg-midnight-navy/5 p-6 rounded-lg flex flex-col justify-center text-center">
                {!results ? (
                     <p className="text-sage-gray">Ihre Ergebnisse werden hier angezeigt.</p>
                ) : (
                    <div className="space-y-4 animate-fade-in">
                        <div>
                            <p className="text-sm text-sage-gray">Geschätzte Kosten</p>
                            <p className="text-3xl font-serif text-midnight-navy">{results.cost}</p>
                        </div>
                         <div>
                            <p className="text-sm text-sage-gray">Mögliche Förderung (BEG)</p>
                            <p className="text-3xl font-serif text-green-600">{results.funding}</p>
                        </div>
                         <div className="border-t border-gray-300 pt-4">
                            <p className="text-sm font-bold text-midnight-navy">Ihr voraussichtlicher Anteil</p>
                            <p className="text-4xl font-serif text-craftsman-orange">{results.final}</p>
                        </div>
                        <p className="text-xs text-sage-gray/80 pt-4">
                            Dies ist eine unverbindliche Schätzung. Die tatsächlichen Kosten und Förderungen können abweichen.
                        </p>
                    </div>
                )}
            </div>

        </div>
      </div>
    </section>
  );
};

export default QuickCheckTool;