import React from 'react';
import { Section } from './ui/Section';

export const Instructor: React.FC = () => {
  return (
    <Section id="instructor">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden border-2 border-boxer-gray shadow-2xl">
            {/* Placeholder for Instructor Image */}
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Instrutor Humberto Sabino"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <h3 className="text-2xl font-bold text-white font-display uppercase">Humberto Sabino</h3>
              <p className="text-boxer-red font-medium">Head Coach & Idealizador</p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-boxer-red rounded-2xl hidden lg:block"></div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Quem comanda o treino?
          </h2>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-xl font-medium text-white italic">
              "Fala amigos do boxe 🥊 Firmes? CHEGAMOS na região e Vetor Norte de BH."
            </p>
            
            <p>
              Aqui é o treinador <strong>Humberto Sabino</strong>, idealizador desse espaço voltado para os treinadores de artes marciais, incluindo o BOXE, que é, sem dúvidas, uma das minhas maiores paixões.
            </p>

            <p>
              Como na maioria dos meus trabalhos, busco sempre unir a paixão pelo esporte aos serviços à minha comunidade, oferecendo treinos de lutas como ferramenta para jovens que buscam crescimento e propósito de vida.
            </p>

            <p>
              Espero receber muita gente forte pra encarar os desafios de 2024. Vamos nessa?
            </p>
          </div>

          <div className="pt-6 border-t border-boxer-gray mt-6">
            <h4 className="text-boxer-red font-bold uppercase tracking-wider text-sm mb-2">Especialidades</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-boxer-gray px-3 py-1 rounded-full text-xs font-medium text-white">Boxe Recreativo</span>
              <span className="bg-boxer-gray px-3 py-1 rounded-full text-xs font-medium text-white">Boxe Competitivo</span>
              <span className="bg-boxer-gray px-3 py-1 rounded-full text-xs font-medium text-white">Preparação Física</span>
              <span className="bg-boxer-gray px-3 py-1 rounded-full text-xs font-medium text-white">Inclusão Social</span>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};