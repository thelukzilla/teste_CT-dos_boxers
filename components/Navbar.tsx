import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK } from '../constants';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-boxer-black/95 backdrop-blur-sm border-b border-boxer-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              {/* Logo Placeholder - User can replace src with their actual logo URL */}
              <div className="w-10 h-10 bg-boxer-red rounded-full flex items-center justify-center font-display font-bold text-xl text-white">
                CT
              </div>
              <span className="font-display text-2xl tracking-wider text-white">
                CT DOS <span className="text-boxer-red">BOXERS</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-boxer-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button href={WHATSAPP_LINK} variant="outline" className="py-2 px-4 !text-sm">
                Agendar Aula
              </Button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-boxer-dark border-b border-boxer-gray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-boxer-red block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              className="w-full text-center block bg-boxer-red text-white px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};