import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check, Calendar } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const PricingSchedule: React.FC = () => {
  return (
    <Section id="pricing" darker>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Invista em Você
        </h2>
        <p className="text-gray-400">
          Valores acessíveis e horários flexíveis para você começar hoje.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Schedule Card */}
        <div className="lg:col-span-1 bg-boxer-dark rounded-2xl p-8 border border-boxer-gray flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-boxer-red/10 rounded-lg">
                <Calendar className="text-boxer-red w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Horários</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                <span className="text-white font-medium">Segunda-feira</span>
                <span className="text-boxer-red font-bold">Aberto</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                <span className="text-white font-medium">Quarta-feira</span>
                <span className="text-boxer-red font-bold">Aberto</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                <span className="text-white font-medium">Sexta-feira</span>
                <span className="text-boxer-red font-bold">Aberto</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-400">
              * Consulte horários específicos das turmas via WhatsApp.
            </p>
          </div>
        </div>

        {/* Pricing Card 1 */}
        <div className="bg-boxer-gray rounded-2xl p-8 border border-gray-800 hover:border-boxer-red transition-all relative">
          <h3 className="text-xl font-medium text-gray-300">Plano Básico</h3>
          <div className="my-4">
            <span className="text-4xl font-bold text-white">R$ 95</span>
            <span className="text-gray-500">/mês</span>
          </div>
          <p className="text-sm text-gray-400 mb-6">Ideal para quem está começando e quer manter a constância.</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-white text-sm">
              <Check className="w-4 h-4 text-boxer-red" /> 2 Aulas por semana
            </li>
            <li className="flex items-center gap-2 text-white text-sm">
              <Check className="w-4 h-4 text-boxer-red" /> Acompanhamento próximo
            </li>
            <li className="flex items-center gap-2 text-white text-sm">
              <Check className="w-4 h-4 text-boxer-red" /> Uso de equipamentos do CT
            </li>
          </ul>
          <Button href={WHATSAPP_LINK} variant="outline" fullWidth>Matricular Agora</Button>
        </div>

        {/* Pricing Card 2 */}
        <div className="bg-gradient-to-b from-boxer-gray to-black rounded-2xl p-8 border-2 border-boxer-red relative transform md:-translate-y-4 shadow-2xl">
          <div className="absolute top-0 right-0 bg-boxer-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
            Mais Popular
          </div>
          <h3 className="text-xl font-medium text-white">Plano Lutador</h3>
          <div className="my-4">
            <span className="text-4xl font-bold text-white">R$ 120</span>
            <span className="text-gray-500">/mês</span>
          </div>
          <p className="text-sm text-gray-400 mb-6">Para quem busca evolução rápida e mais tempo de treino.</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-white text-sm">
              <Check className="w-4 h-4 text-boxer-red" /> <strong>3 Aulas por semana</strong>
            </li>
            <li className="flex items-center gap-2 text-white text-sm">
              <Check className="w-4 h-4 text-boxer-red" /> Treino Técnico & Físico
            </li>
            <li className="flex items-center gap-2 text-white text-sm">
              <Check className="w-4 h-4 text-boxer-red" /> Acesso a sparrings (opcional)
            </li>
            <li className="flex items-center gap-2 text-white text-sm">
              <Check className="w-4 h-4 text-boxer-red" /> Evolução acelerada
            </li>
          </ul>
          <Button href={WHATSAPP_LINK} variant="primary" fullWidth>Matricular Agora</Button>
        </div>

      </div>

      <div className="mt-12 text-center">
        <div className="inline-block bg-white/5 border border-white/10 rounded-full px-8 py-4">
          <p className="text-lg text-white">
            🎁 Primeira vez? <span className="text-boxer-red font-bold">Sua Aula Experimental é GRÁTIS!</span>
          </p>
        </div>
      </div>
    </Section>
  );
};