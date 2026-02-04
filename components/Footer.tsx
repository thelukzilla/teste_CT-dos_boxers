import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-black border-t border-boxer-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand & Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-boxer-red rounded-full flex items-center justify-center font-display font-bold text-sm text-white">
                CT
              </div>
              <span className="font-display text-xl tracking-wider text-white">
                CT DOS <span className="text-boxer-red">BOXERS</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Promovendo o esporte e a inclusão. Boxe recreativo e competitivo para todas as idades.
              Venha fazer parte do nosso time na região norte de BH.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-boxer-gray p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_LINK} className="text-gray-400 hover:text-white transition-colors bg-boxer-gray p-2 rounded-full">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Onde Estamos</h3>
            <div className="flex items-start gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-boxer-red mt-1 shrink-0" />
              <address className="not-italic">
                <span className="block font-medium text-white mb-1">Bairro Maria Tereza</span>
                Rua 4, número 54<br />
                Próximo ao supermercado BH<br />
                A caminho do Mega Space<br />
                Belo Horizonte, MG
              </address>
            </div>
            
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-boxer-red hover:text-red-400 transition-colors font-bold mt-2"
            >
              <Phone className="w-4 h-4" /> (31) 99548-4675
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CT dos Boxers. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};