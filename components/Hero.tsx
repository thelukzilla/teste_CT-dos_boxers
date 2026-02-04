import React from 'react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-boxer-black h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Boxe Training Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-boxer-black via-boxer-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-2 border border-boxer-red/50 rounded-full bg-boxer-red/10 mb-6 backdrop-blur-sm animate-fade-in-up">
          <span className="text-boxer-red font-semibold tracking-wide uppercase text-sm px-4">
            Novidade na região norte de BH
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight drop-shadow-lg">
          Desperte o <span className="text-boxer-red">Campeão</span><br />
          que há em você
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
          Aprimore sua forma física, fortaleça sua mente e conquiste o melhor de si com nossas aulas de boxe. Treino personalizado para todos os níveis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={WHATSAPP_LINK} className="text-lg px-8 py-4">
            Agendar Aula Experimental Grátis
          </Button>
          <Button href="#pricing" variant="outline" className="text-lg px-8 py-4">
            Ver Horários e Planos
          </Button>
        </div>
      </div>
    </div>
  );
};