import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { LightbulbIcon } from './icons';

// A simple component to render the AI's response with markdown-like formatting.
const FormattedAnswer: React.FC<{ text: string }> = ({ text }) => {
  const paragraphs = text.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="text-sage-gray space-y-fib-3 text-base leading-relaxed">
      {paragraphs.map((para, index) => {
        // Split by the bold markdown (**text**)
        const parts = para.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={index}>
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={i} className="font-bold text-midnight-navy">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};


const AdviceTool: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      setError('Bitte geben Sie eine Frage ein.');
      return;
    }

    setIsLoading(true);
    setAnswer('');
    setError('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: question,
        config: {
          systemInstruction: "You are an expert master craftsman from the German company 'Fuest Dämmung & Farbe'. Answer user questions about home renovation, insulation, painting, and plastering. Your tone is knowledgeable, trustworthy, and helpful. Always emphasize the importance of professional execution by a certified company ('Meisterbetrieb') for quality, safety, and long-term value. Subtly guide the user towards considering Fuest's services without being an aggressive advertisement. Use markdown for bolding key terms. Keep answers concise and easy to understand for a homeowner. Respond in German.",
        }
      });

      setAnswer(response.text);

    } catch (err) {
      console.error(err);
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="advice-tool" className="py-16 md:py-24 bg-museum-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-midnight-navy/10 text-midnight-navy font-bold text-sm px-3 py-1 rounded-full">
                <LightbulbIcon />
                Ihr digitaler Fachberater
            </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-midnight-navy">
            Haben Sie eine Frage?
          </h2>
          <p className="mt-fib-3 max-w-2xl mx-auto text-lg text-sage-gray">
            Fragen Sie unseren digitalen Meister. Erhalten Sie sofort eine fachkundige Ersteinschätzung.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-fib-6 items-start">
            {/* --- FORM --- */}
            <form className="space-y-fib-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="question" className="block text-sm font-bold text-midnight-navy mb-fib-2">Ihre Frage zum Thema Sanierung:</label>
                    <textarea 
                        id="question"
                        rows={8}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="z.B. Was ist der Vorteil von Kalkputz gegenüber Gipsputz?"
                        className="w-full bg-white border border-sage-gray/30 rounded-lg shadow-craft p-4
                                   text-sage-gray placeholder-sage-gray/60
                                   focus:ring-2 focus:ring-craftsman-orange focus:border-craftsman-orange transition-shadow duration-200"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-craftsman-orange text-midnight-navy font-bold text-lg py-3 px-8 rounded-md shadow-lg
                               transform transition-all duration-250 ease-confidence
                               hover:bg-orange-500 hover:shadow-xl hover:-translate-y-1
                               focus:outline-none focus:ring-4 focus:ring-craftsman-orange focus:ring-opacity-50
                               disabled:bg-sage-gray disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md"
                >
                    {isLoading ? 'Meister überlegt...' : 'Antwort erhalten'}
                </button>
            </form>

            {/* --- RESULTS --- */}
            <div className="bg-white p-6 rounded-tl-md rounded-br-md rounded-tr-2xl rounded-bl-2xl shadow-craft-lifted min-h-[350px] flex flex-col">
                <div className="flex items-center gap-fib-3 border-b border-sage-gray/20 pb-fib-3 mb-fib-4">
                  <span className="text-craftsman-orange"><LightbulbIcon className="h-6 w-6" /></span>
                  <h4 className="font-bold font-serif text-midnight-navy text-xl">Antwort vom Meister</h4>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    {isLoading && (
                         <div className="text-center">
                            <div className="w-8 h-8 border-4 border-craftsman-orange border-t-transparent rounded-full animate-spin mx-auto"></div>
                            <p className="mt-2 text-sage-gray">Antwort wird erstellt...</p>
                         </div>
                    )}
                    {error && !isLoading && (
                        <p className="text-craftsman-orange text-center font-semibold">{error}</p>
                    )}
                    {!isLoading && !error && !answer && (
                        <p className="text-sage-gray text-center">Die fachkundige Antwort unseres Meisters erscheint hier.</p>
                    )}
                    {answer && !isLoading && (
                       <FormattedAnswer text={answer} />
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AdviceTool;
