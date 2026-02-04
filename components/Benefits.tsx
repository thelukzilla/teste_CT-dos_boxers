import React from 'react';
import { Section } from './ui/Section';
import { BENEFITS_LIST } from '../constants';
import { Shield, Flame, Heart, Star, Brain, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-10 h-10 text-boxer-red" />,
  flame: <Flame className="w-10 h-10 text-boxer-red" />,
  heart: <Heart className="w-10 h-10 text-boxer-red" />,
  star: <Star className="w-10 h-10 text-boxer-red" />,
  brain: <Brain className="w-10 h-10 text-boxer-red" />,
};

export const Benefits: React.FC = () => {
  return (
    <Section id="benefits" darker>
      <div className="text-center mb-16">
        <h2 className="text-boxer-red font-bold tracking-wide uppercase mb-2">Por que treinar?</h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
          Mais que uma luta, um estilo de vida
        </h3>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          O boxe é uma ferramenta poderosa para transformação física e mental. 
          Nossos treinos são adaptados ao seu ritmo e objetivos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS_LIST.map((benefit, index) => (
          <div 
            key={index}
            className="bg-boxer-gray p-8 rounded-2xl border border-gray-800 hover:border-boxer-red transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="mb-6 bg-boxer-black w-16 h-16 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-boxer-red transition-colors">
              {iconMap[benefit.icon]}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
        
        {/* Custom Methodology Card */}
        <div className="bg-gradient-to-br from-boxer-red to-red-900 p-8 rounded-2xl border border-red-700 hover:-translate-y-2 transition-transform duration-300 text-white">
          <div className="mb-6 bg-black/30 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h4 className="text-xl font-bold mb-3">Treino Personalizado</h4>
          <p className="text-red-100">
            Destaque exclusivo: os treinos são feitos com base na pedida do aluno, personalizados e nivelados para que você se sinta acolhido desde o primeiro dia.
          </p>
        </div>
      </div>
    </Section>
  );
};